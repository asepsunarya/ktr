<template>
  <div class="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
    <header class="bg-primary">
      <div class="container mx-auto px-4 py-12 flex justify-between items-center">
        <div class="text-2xl font-bold">KTR</div>
        <nav class="space-x-4">
          <router-link to="/user/request" v-if="isLogin">Home</router-link>
          <div class="flex gap-4" v-else>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
          </div>
        </nav>
      </div>
    </header>

    <main class="container mx-auto px-4 py-16 flex-grow">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">Selamat datang di Website kami</h1>
        <p v-if="!isLogin" class="mt-4 text-lg text-gray-600 dark:text-gray-300">Silahkan mendaftar untuk melanjutkan pendaftaran</p>
        <div class="mt-8">
          <router-link v-if="!isLogin" to="/register" class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700">Memulai</router-link>
        </div>
      </div>
    </main>

    <footer>
      <div class="container mx-auto px-4 py-6 text-center text-gray-300">
        &copy; 2025 KTR. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
const isLogin = localStorage.getItem('isLogin')
</script>

<style scoped>
/* Add any additional styles here */
</style>