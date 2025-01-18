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
            Detail Permohonan
          </h2>


          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Informasi Pemohon
          </h4>
          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest?.user?.name }}</label>
            </div>
            
            <div>
              <label for="nik" class="block text-sm font-medium text-gray-700 dark:text-gray-300">NIK</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest?.user?.ktp }}</label>
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nomor WhatsApp</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest?.user?.phone }}</label>
            </div>
            
            <div>
              <label for="job" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Pekerjaan</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest.job }}</label>
            </div>

            <div>
              <label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Alamat</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest.address }}</label>
            </div>
            
            <div>
              <label for="act_as" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Bertindak Sebagai</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 capitalize">{{ ktrRequest.act_as }}</label>
            </div>
          </div>

          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Form Permohonan
          </h4>
          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >  
           <div>
              <label for="road" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Jalan</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest.road }}</label>
            </div>

            <div>
              <label for="regency_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Kabupaten / Kota</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest?.regency?.name }}</label>
            </div>
            
            <div>
              <label for="district_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Kecamatan</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest?.district?.name }}</label>
            </div>
            
            <div>
              <label for="district_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Kelurahan / Desa</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest?.subdistrict?.name }}</label>
            </div>

            <div>
              <label for="land_area" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Luas Lahan</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest.land_area }}</label>
            </div>

            <div>
              <label for="land_status" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Status Tanah</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest.land_status }}</label>
            </div>
            
            <div>
              <label for="purpose" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Keperluan</label>
              <label  class="w-full mt-1 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{{ ktrRequest.purpose }}</label>
            </div>
          </div>

          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Dokumen
          </h4>
          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >
            <div>
              <label for="ktp_file" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Fotocopy KTP</label>
              <img :src="`${STORAGE_URL}/${ktrRequest.ktp_file}`" alt="">
            </div>
            
            <div>
              <label for="activity_location" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Foto Lokasi Kegiatan</label>
              <img :src="`${STORAGE_URL}/${ktrRequest.activity_location}`" alt="">
            </div>
            
            <div>
              <label for="land_document" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Fotocopy Surat Tanah</label>
              <img :src="`${STORAGE_URL}/${ktrRequest.land_document}`" alt="">
            </div>
          </div>
          
          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Tanda Tangan Digital

          </h4>
          
          <div
            :class="{'bg-gray-200 dark:bg-gray-700 pointer-events-none': !isDrawing, 'bg-white dark:bg-white': isDrawing}"
            class="px-4 py-3 mb-8 space-y-5 h-[300px] w-[500px] bg-white rounded-lg shadow-md dark:bg-gray-800 cursor-"
          >
            <div v-if="form.sign == ktrRequest.sign && !isDrawing" class="flex justify-center items-center h-full">
              <img :src="ktrRequest.sign" alt="">
            </div>
            <VueSignaturePad v-else width="500px" height="300px" ref="signaturePad" :disabled="!isDrawing" />
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
import { useRoute } from 'vue-router'

const route = useRoute()
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL

const ktrRequest = ref({})
const regencies = ref([])
const districts = ref([])
const subdistricts = ref([])
const signaturePad = ref(null)
const isDrawing = ref(false)

const form = {
  address: '',
  regency_id: null,
  district_id: null,
  subdistrict_id: null,
  latitude: null,
  longitude: null,
  land_area: null,
  land_status: '',
  purpose: '',
  ktp_file: null,
  activity_location: null,
  land_document: null,
  act_as: 'pemilik',
  job: null,
  road: null,
  sign: null,
  user_id: null
}

const fetchRegencies = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/regencies/9`)
    regencies.value = response.data
  } catch (error) {
    console.error(error)
  }
}

const fetchDistricts = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/districts/${form.regency_id}`)
    districts.value = response.data
  } catch (error) {
    console.error(error)
  }
}

const fetchSubdistricts = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/subdistricts/${form.district_id}`)
    subdistricts.value = response.data
  } catch (error) {
    console.error(error)
  }
}


const fetchKtrRequest = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/ktr-requests/${route.params.id}`)
    ktrRequest.value = response.data
    const ktrRequestKey = Object.keys(response.data)
    ktrRequestKey.forEach(key => {
      if (form[key] !== undefined) {
        form[key] = response.data[key]
      }
    })
  } catch (error) {
    console.error(error)
  }
}


onMounted(() => {
  fetchRegencies()
  fetchKtrRequest()
  if (ktrRequest.value.user) {
    form.user_id = ktrRequest.value.user_id
  }
})


const handleFileChange = (event, field) => {
  form[field] = event.target.files[0];
};

const toggleDraw = () => {
  form.sign = null
  if (isDrawing.value) {
    const canvas = signaturePad.value.saveSignature()
    if (!canvas.isEmpty) {
      form.sign = canvas.data
    }
  }
  isDrawing.value = !isDrawing.value
}

const resetDraw = () => {
  signaturePad.value.clearSignature()
}

</script>