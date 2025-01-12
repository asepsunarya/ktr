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
            Pengaturan
          </h2>


          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Umum
          </h4>
          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >
            <div>
              <label for="cost" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Biaya dan Tarif</label>
              <input v-model="form.cost" type="text" id="cost" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="time_period" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Jangka Waktu</label>
              <input v-model="form.time_period" type="text" id="time_period" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>


            <div>
              <label for="terms_and_conditions" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Syarat dan Ketentuan</label>
              <textarea
                v-model="form.terms_and_conditions"
                id="terms_and_conditions"
                class="w-full px-3 py-2 mt-1 border rounded text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-gray-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                rows="8"
              ></textarea>
            </div>
          </div>

          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Kontak
          </h4>
          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input v-model="form.email" type="email" id="email" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="website" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Website</label>
              <input v-model="form.website" type="text" id="website" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nomor WhatsApp</label>
              <input v-model="form.phone" type="text" id="phone" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

            <div>
              <label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Alamat</label>
              <textarea
               v-model="form.address"
                id="address"
                class="w-full px-3 py-2 mt-1 border rounded text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-gray-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                rows="3"
              ></textarea>
            </div>
          </div>

          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Alur Pelayanan 1
          </h4>
          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >
            <div>
              <label for="service_flow_title_1" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Judul</label>
              <input v-model="form.service_flow_title_1" type="text" id="service_flow_title_1" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

            <div>
              <label for="service_flow_description_1" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Deskripsi</label>
              <textarea
                v-model="form.service_flow_description_1"
                id="service_flow_description_1"
                class="w-full px-3 py-2 mt-1 border rounded text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-gray-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                rows="3"
              ></textarea>
            </div>
          </div>
          
          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Alur Pelayanan 2
          </h4>
          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >
            <div>
              <label for="service_flow_title_2" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Judul</label>
              <input v-model="form.service_flow_title_2" type="text" id="service_flow_title_2" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

            <div>
              <label for="service_flow_description_2" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Deskripsi</label>
              <textarea
                v-model="form.service_flow_description_2"
                id="service_flow_description_2"
                class="w-full px-3 py-2 mt-1 border rounded text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-gray-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                rows="3"
              ></textarea>
            </div>
          </div>

          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Alur Pelayanan 3
          </h4>
          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >
            <div>
              <label for="service_flow_title_3" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Judul</label>
              <input v-model="form.service_flow_title_3" type="text" id="service_flow_title_3" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

            <div>
              <label for="service_flow_description_3" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Deskripsi</label>
              <textarea
                v-model="form.service_flow_description_3"
                id="service_flow_description_3"
                class="w-full px-3 py-2 mt-1 border rounded text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-gray-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                rows="3"
              ></textarea>
            </div>
          </div>

          
          <button @click.stop="updateSettings" type="submit" class="w-full px-4 py-2 mt-2 mb-12 text-white bg-indigo-500 rounded hover:bg-indigo-700">Simpan</button>
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

const $loading = useLoading()


const settings = ref([])

function useForm() {
  const form = reactive({
    cost: '',
    time_period: '',
    terms_and_conditions: '',
    email: '',
    website: '',
    phone: '',
    address: '',
    service_flow_title_1: '',
    service_flow_description_1: '',
    service_flow_title_2: '',
    service_flow_description_2: '',
    service_flow_title_3: '',
    service_flow_description_3: ''
  })

  const errors = ref({})
  const errorMessage = ref('')

  const validateForm = () => {
    errors.value = {}
    errorMessage.value = ''
    if (!form.cost) {
      errors.value.cost = 'Cost is required'
    }
    if (!form.time_period) {
      errors.value.time_period = 'Time is required'
    }
    if (!form.terms_and_conditions) {
      errors.value.terms_and_conditions = 'Terms is required'
    }
    if (!form.email) {
      errors.value.email = 'Email is required'
    }
    if (!form.website) {
      errors.value.website = 'Website is required'
    }
    if (!form.phone) {
      errors.value.phone = 'Phone is required'
    }
    if (!form.address) {
      errors.value.address = 'Address is required'
    }
    if (!form.service_flow_title_1) {
      errors.value.service_flow_title_1 = 'Title is required'
    }
    if (!form.service_flow_description_1) {
      errors.value.service_flow_description_1 = 'Description is required'
    }
    if (!form.service_flow_title_2) {
      errors.value.service_flow_title_2 = 'Title is required'
    }
    if (!form.service_flow_description_2) {
      errors.value.service_flow_description_2 = 'Description is required'
    }
    if (!form.service_flow_title_3) {
      errors.value.service_flow_title_3 = 'Title is required'
    }
    if (!form.service_flow_description_3) {
      errors.value.service_flow_description_3 = 'Description is required'
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

const updateSettings = async () => {
  if (!validateForm()) {
    return
  }
  const loader = $loading.show({isFullPage: true, loader: 'dots', color: '#4B5563'});
  try {
    for (let key in form) {
      const id = settings.value.find(setting => setting.key === key).id
      const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/settings/${id}`, {
        key: key,
        value: form[key]
      })
      if (response.status == 200) {
        errorMessage.value = ''
      } else {
        errorMessage.value = response.data.message || 'Pengaturan gagal diperbarui'
      }
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Terjadi kesalahan'
  } finally {
    loader.hide()
  }
  
  if (errorMessage.value === '') {
    Swal.fire({
      title: 'Berhasil!',
      text: 'Pengaturan berhasil diperbarui',
      icon: 'success'
    })
  } else {
    Swal.fire({
      title: 'Gagal!',
      text: errorMessage.value,
      icon: 'error'
    })
  }
}

const getSettings = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/settings`)
    if (response.status == 200) {
      settings.value = response.data
      for (let setting of settings.value) {
        form[setting.key] = setting.value
      }
    } else {
      errorMessage.value = response.data.message || 'Gagal mengambil pengaturan'
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Terjadi kesalahan'
  }
}

onMounted(() => {
  getSettings()
})
</script>