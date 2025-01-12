<template>
  <div
    class="flex bg-gray-50 dark:bg-gray-900 h-screen"
    :class="{ 'overflow-hidden': true }"
  >
    <Sidebar />
    

    <div class="flex flex-col flex-1 w-full">
      <Navbar />

      <main class="h-full overflow-y-auto">
        <div class="container px-6 mx-auto grid">
          <h2
            class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Profil
          </h2>

          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input v-model="form.email" type="email" id="email" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input v-model="form.password" type="password" id="password" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

          </div>

          <button @click.stop="updateAdmin" type="submit" class="w-full px-4 py-2 mt-2 mb-12 text-white bg-indigo-500 rounded hover:bg-indigo-700">Simpan</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/views/admin/layouts/Sidebar.vue';
import Navbar from '@/views/admin/layouts/Navbar.vue';
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';


const admin = ref({})

function useForm() {
  const form = reactive({
    email: '',
    password: '',
  })

  const errors = ref({})
  const errorMessage = ref('')

  const validateForm = () => {
    errors.value = {}
    errorMessage.value = ''
    if (!form.email) {
      errors.value.email = 'Email is required'
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

const updateAdmin = async () => {
  if (!validateForm()) {
    return
  }
  try {
    const id = admin.value.id
    const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/admins/${id}`, form)
    if (response.status == 200) {
      errorMessage.value = 'Profil berhasil diperbarui'
    } else {
      errorMessage.value = response.data.message || 'Profil gagal diperbarui'
    }
  } catch (error) {
    console.log(error, 'error')
    errorMessage.value = error.response?.data?.message || 'Terjadi kesalahan'
  }
}

const getUser = async () => {
  try {
    const adminString = localStorage.getItem('admin')
    const id = JSON.parse(adminString).id
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admins/${id}`)
    if (response.status == 200) {
      admin.value = response.data
      form.email = response.data.email
    } else {
      errorMessage.value = response.data.message || 'Gagal mengambil profil'
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Terjadi kesalahan'
  }
}

onMounted(() => {
  getUser()
})
</script>