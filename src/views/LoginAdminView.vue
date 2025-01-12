<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Login Admin</h2>
      <form @submit.prevent="login">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input v-model="email" type="email" id="email" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input v-model="password" type="password" id="password" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>
          </div>
          <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
          <button type="submit" class="w-full px-4 py-2 mt-4 text-white bg-indigo-500 rounded hover:bg-indigo-700">Login</button>
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
const email = ref('')
const password = ref('')
const errors = ref({})
const errorMessage = ref('')
const router = useRouter()

const login = async () => {
  errors.value = {}
  errorMessage.value = ''
  if (!email.value) {
    errors.value.email = 'Email is required'
  }
  if (!password.value) {
    errors.value.password = 'Password is required'
  }
  if (Object.keys(errors.value).length > 0) {
    return
  }
  const loader = $loading.show({isFullPage: true, loader: 'dots', color: '#4B5563'});
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login/admin`, {
      email: email.value,
      password: password.value
    })
    if (response.status == 200) {
      localStorage.setItem('isLoginAdmin', true)
      localStorage.setItem('admin', JSON.stringify(response.data.admin))
      router.push('/admin/dashboard')
    } else {
      errorMessage.value = response.data.message || 'Login failed'
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'An error occurred'
  } finally {
    loader.hide()
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>