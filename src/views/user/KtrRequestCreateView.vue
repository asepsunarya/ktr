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
            Form Permohonan
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
              <input v-model="user.name" readonly type="text" id="name" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="nik" class="block text-sm font-medium text-gray-700 dark:text-gray-300">NIK</label>
              <input v-model="user.ktp" readonly type="number" id="nik" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nomor WhatsApp</label>
              <input v-model="user.phone" readonly type="number" id="phone" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="job" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Pekerjaan</label>
              <input v-model="form.job" type="text" id="job" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

            <div>
              <label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Alamat</label>
              <textarea
                v-model="form.address"
                id="address"
                class="w-full px-3 py-2 mt-1 border rounded text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-gray-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                rows="4"
              ></textarea>
            </div>
            
            <div>
              <label for="act_as" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Bertindak Sebagai</label>
              <select v-model="form.act_as" @change="fetchDistricts" id="act_as" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required>
                <option value="pemilik">Pemilik</option>
                <option value="pembeli">Pembeli</option>
                <option value="penghubung">Penghubung/Kuasa</option>
              </select>
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
              <input v-model="form.road" type="text" id="road" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

            <div>
              <label for="regency_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Kabupaten / Kota</label>
              <select v-model="form.regency_id" @change="fetchDistricts" id="regency_id" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required>
                <option selected disabled value="">Pilih Kabupaten / Kota</option>
                <option v-for="regency in regencies" :value="regency.id">
                  {{ `${regency.type} ${regency.name}` }}
                </option>
              </select>
            </div>
            
            <div v-if="districts.length > 0">
              <label for="district_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Kecamatan</label>
              <select v-model="form.district_id" id="district_id" @change="fetchSubdistricts" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required>
                <option selected disabled value="">Pilih Kecamatan</option>
                <option v-for="district in districts" :value="district.id">
                  {{ district.name }}
                </option>
              </select>
            </div>
            
            <div v-if="subdistricts.length > 0">
              <label for="district_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Kelurahan / Desa</label>
              <select v-model="form.subdistrict_id" id="district_id" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required>
                <option selected disabled value="">Pilih Kelurahan / Desa</option>
                <option v-for="subdistrict in subdistricts" :value="subdistrict.id">
                  {{ subdistrict.name }}
                </option>
              </select>
            </div>

            <div>
              <label for="land_area" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Luas Lahan</label>
              <input v-model="form.land_area" type="text" id="land_area" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>

            <div>
              <label for="land_status" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Status Tanah</label>
              <input v-model="form.land_status" type="text" id="land_status" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="purpose" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Keperluan</label>
              <input v-model="form.purpose" type="text" id="purpose" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
          </div>

          <h4
            class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
          >
            Upload Dokumen
          </h4>
          <div
            class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-5"
          >
            <div>
              <label for="ktp_file" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Fotocopy KTP</label>
              <input @change="handleFileChange($event, 'ktp_file')" type="file" id="ktp_file" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="activity_location" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Foto Lokasi Kegiatan</label>
              <input @change="handleFileChange($event, 'activity_location')" type="file" id="activity_location" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
            </div>
            
            <div>
              <label for="land_document" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Fotocopy Surat Tanah</label>
              <input  @change="handleFileChange($event, 'land_document')" type="file" id="land_document" class="w-full px-3 py-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" required />
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
            <VueSignaturePad width="500px" height="300px" ref="signaturePad" :disabled="!isDrawing" />
          </div>
          <div class="flex gap-x-4">
            <button @click="toggleDraw" class="w-[100px] px-4 mb-12 text-indigo-500 border-indigo-500 rounded ">{{ isDrawing ? 'Selesai' : 'Ubah' }}</button>
            <button @click="resetDraw" class="w-[100px] px-4 mb-12 text-orange-500 border-orange-500 rounded ">Reset</button>
          </div>
          <button @click.stop="requestKTR" type="submit" class="w-full px-4 py-2 mt-2 mb-12 text-white bg-indigo-500 rounded hover:bg-indigo-700">Simpan</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/views/user/layouts/Sidebar.vue';
import Navbar from '@/views/user/layouts/Navbar.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useLoading } from 'vue-loading-overlay'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const $loading = useLoading()
const router = useRouter()

const user = JSON.parse(localStorage.getItem('user'))
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
  sign: null
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

const validateForm = () => {
  if (!form.address || !form.regency_id || !form.district_id || !form.subdistrict_id || !form.land_area || !form.land_status || !form.purpose || !form.ktp_file || !form.activity_location || !form.land_document || !form.act_as || !form.job || !form.road || !form.sign) {
    Swal.fire({
      icon: 'info',
      title: 'Lengkapi Form',
      text: 'Form tidak boleh kosong!',
    })
    return false
  }
  return true
}

const requestKTR = async () => {
  if (!validateForm()) {
    return
  }
  const loader = $loading.show({isFullPage: true, loader: 'dots', color: '#4B5563'});

  const formData = new FormData()
  formData.append('address', form.address)
  formData.append('regency_id', form.regency_id)
  formData.append('district_id', form.district_id)
  formData.append('subdistrict_id', form.subdistrict_id)
  formData.append('latitude', form.latitude)
  formData.append('longitude', form.longitude)
  formData.append('land_area', form.land_area)
  formData.append('land_status', form.land_status)
  formData.append('purpose', form.purpose)
  formData.append('ktp_file', form.ktp_file)
  formData.append('activity_location', form.activity_location)
  formData.append('land_document', form.land_document)
  formData.append('user_id', user.id)
  formData.append('act_as', form.act_as)
  formData.append('job', form.job)
  formData.append('road', form.road)
  formData.append('sign', form.sign)


  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/ktr-requests`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    router.push(`/user/payments/${response.data.payment.id}`)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Terjadi kesalahan',
      text: error.response.data.message,
    })
  } finally {
    loader.hide()
  }
}

onMounted(() => {
  fetchRegencies()
})


const handleFileChange = (event, field) => {
  form[field] = event.target.files[0];
};

const toggleDraw = () => {
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