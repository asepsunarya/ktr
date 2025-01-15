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

          <div class="flex justify-between items-center">
            <h3
              class="my-6 text-xl font-semibold text-gray-700 dark:text-gray-200"
            >
              List Pemohon
            </h3>
          </div>

          <!-- New Table -->
          <div class="w-full overflow-hidden rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto">
              <table class="w-full whitespace-no-wrap">
                <thead>
                  <tr
                    class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                  >
                    <th class="px-4 py-3">Nama</th>
                    <th class="px-4 py-3">WhatsApp</th>
                    <th class="px-4 py-3">Email</th>
                    <th class="px-4 py-3">NIK</th>
                    <th class="px-4 py-3">Tanggal Daftar</th>
                    <th class="px-4 py-3">Aksi</th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                >
                  <template v-if="users.length > 0">
                    <tr v-for="(user, index) in users" :key="index" class="text-gray-700 dark:text-gray-400 cursor-pointer">
                      <td class="px-4 py-3 text-sm">
                        {{ user.name }}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{ user.phone }}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{ user.email }}
                      </td>
                      <td class="px-4 py-3 text-xs">
                        {{ user.ktp }}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{ user.created_at.split('T')[0] }}
                      </td>
                      <td class="px-2 py-1 text-sm flex gap-2">
                        <button @click="toEdit(user.id)" class="border-indigo-600 border text-indigo-600 hover:text-indigo-900">Ubah</button>
                        <button @click="deleteUser(user.id)" class="border-red-600 border text-red-600 hover:text-red-900">Hapus</button>
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr>
                      <td class="px-4 py-3" colspan="6">
                        <p class="text-center text-gray-600 dark:text-gray-400">Belum ada data</p>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/views/admin/layouts/Sidebar.vue';
import Navbar from '@/views/admin/layouts/Navbar.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { useLoading } from 'vue-loading-overlay';

const router = useRouter()
const $loading = useLoading()

const users = ref([])

const fetchUsers = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users`)
  users.value = data
}

const toEdit = (id) => {
  router.push(`/admin/user/${id}`)
}

const deleteUser = async (userId) => {
  const { value: confirmed } = await Swal.fire({
    title: 'Hapus Pemohon',
    text: 'Apakah Anda yakin ingin menghapus pemohon ini?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya, hapus',
    cancelButtonText: 'Batal'
  })
  if (confirmed) {
    const loader = $loading.show({isFullPage: true, loader: 'dots', color: '#4B5563'})
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/users/${userId}`)
      await fetchUsers()
    } catch (error) {
      console.error(error)
    } finally {
      loader.hide()
    }
  }
}

onMounted(() => {
  fetchUsers()
})
</script>