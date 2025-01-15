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
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama</label>
              <input v-model="form.name" type="text" id="name" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input v-model="form.email" type="email" id="email" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">WhatsApp</label>
              <input v-model="form.phone" type="text" id="phone" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

            <div>
              <label for="nik" class="block text-sm font-medium text-gray-700 dark:text-gray-300">NIK</label>
              <input v-model="form.ktp" type="text" id="nik" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
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
import { useLoading } from 'vue-loading-overlay'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router';

const $loading = useLoading()
const route = useRoute()

const user = ref({})

function useForm() {
  const form = reactive({
    name: '',
    phone: '',
    email: '',
    ktp: '',
  })

  const errors = ref({})
  const errorMessage = ref('')

  const validateForm = () => {
    errors.value = {}
    errorMessage.value = ''
    if (!form.email) {
      errors.value.email = 'Email is required'
    }
    if (!form.phone) {
      errors.value.phone = 'Phone is required'
    }
    if (!form.name) {
      errors.value.name = 'Name is required'
    }
    if (!form.ktp) {
      errors.value.ktp = 'NIK is required'
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
  const loader = $loading.show({isFullPage: true, loader: 'dots', color: '#4B5563'});
  try {
    const id = user.value.id
    const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/users/${id}`, form)
    if (response.status == 200) {
      Swal.fire({
        title: 'Berhasil!',
        text: 'Pemohon berhasil diperbarui',
        icon: 'success'
      })
    } else {
      errorMessage.value = response.data.message || 'Pemohon gagal diperbarui'
    }
  } catch (error) {
    console.log(error, 'error')
    errorMessage.value = error.response?.data?.message || 'Terjadi kesalahan'
  } finally {
    loader.hide()
  }
}

const getUser = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/${route.params.id}`)
    if (response.status == 200) {
      user.value = response.data
      for (const key in form) {
        form[key] = response.data[key]
      }
    } else {
      errorMessage.value = response.data.message || 'Gagal mengambil pemohon'
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Terjadi kesalahan'
  }
}

onMounted(() => {
  getUser()
})
</script>