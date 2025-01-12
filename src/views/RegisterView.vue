<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Daftar</h2>
      <form @submit.prevent="register">
        <div class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama</label>
            <input v-model="form.name" type="text" id="name" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
          </div>
          <div>
            <label for="ktp" class="block text-sm font-medium text-gray-700 dark:text-gray-300">KTP</label>
            <input v-model="form.ktp" type="text" id="ktp" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            <span v-if="errors.ktp" class="text-red-500">{{ errors.ktp }}</span>
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nomor HP</label>
            <input v-model="form.phone" type="text" id="phone" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input v-model="form.email" type="email" id="email" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Kata Sandi</label>
            <input v-model="form.password" type="password" id="password" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>
          </div>
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Konfirmasi Kata Sandi</label>
            <input v-model="form.confirmPassword" type="password" id="confirmPassword" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            <span v-if="errors.confirmPassword" class="text-red-500">{{ errors.confirmPassword }}</span>
          </div>
          <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
          <button type="submit" class="w-full px-4 py-2 mt-4 text-white bg-indigo-500 rounded hover:bg-indigo-700">Daftar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useLoading } from 'vue-loading-overlay'

const $loading = useLoading()

function useForm() {
  const form = ref({
    name: '',
    ktp: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const errors = ref({})
  const errorMessage = ref('')

  const validateForm = () => {
    errors.value = {}
    if (!form.value.name) {
      errors.value.name = 'Nama wajib diisi'
    }
    if (!form.value.ktp) {
      errors.value.ktp = 'KTP wajib diisi'
    }
    if (!form.value.phone) {
      errors.value.phone = 'Nomor HP wajib diisi'
    }
    if (!form.value.email) {
      errors.value.email = 'Email wajib diisi'
    }
    if (!form.value.password) {
      errors.value.password = 'Kata sandi wajib diisi'
    }
    if (form.value.password !== form.value.confirmPassword) {
      errors.value.confirmPassword = 'Kata sandi tidak cocok'
    }
    return Object.keys(errors.value).length === 0
  }

  return {
    form,
    errors,
    errorMessage,
    validateForm
  }
}

const { form, errors, errorMessage, validateForm } = useForm()
const router = useRouter()

const register = async () => {
  if (!validateForm()) {
    return
  }
  const loader = $loading.show({isFullPage: true, loader: 'dots', color: '#4B5563'});
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/register`, {
      name: form.value.name,
      ktp: form.value.ktp,
      phone: form.value.phone,
      email: form.value.email,
      password: form.value.password
    })
    if (response.data.success) {
      router.push('/login')
    } else {
      errorMessage.value = response.data.message || 'Pendaftaran gagal'
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Terjadi kesalahan'
  } finally {
    loader.hide()
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>