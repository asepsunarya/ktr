<template>
  <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
    <div
      class="container flex items-center justify-between h-full px-6 mx-auto text-indigo-600 dark:text-indigo-300"
    >
      <!-- Search input -->
      <div class="flex justify-center flex-1 lg:mr-32">
      </div>
      <ul class="flex items-center flex-shrink-0 space-x-6">
        
        <!-- Profile menu -->
        <li class="relative">
          <div
            class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none bg-opacity-0 cursor-pointer"
            @click="toggleProfileMenu"
            @keydown.escape="closeProfileMenu"
            aria-label="Account"
            aria-haspopup="true"
          >
            <img
              class="object-cover w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
              alt=""
              aria-hidden="true"
            />
          </div>
          <template v-if="isProfileMenuOpen">
            <ul
              @click.away="closeProfileMenu"
              @keydown.escape="closeProfileMenu"
              class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
              aria-label="submenu"
            >
              <li class="flex">
                <a
                  class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  href="#"
                  @click="logout"
                >
                  <svg
                    class="w-4 h-4 mr-3"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isProfileMenuOpen = ref(false)

function toggleProfileMenu() {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
}

function closeProfileMenu() {
  isProfileMenuOpen.value = false
}

function logout() {
  localStorage.removeItem('isLogin')
  localStorage.removeItem('user')
  location.href = '/login'
}
</script>

<style scoped>
</style>