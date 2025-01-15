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
            Pembayaran
          </h2>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Informasi Pemohon</h3>
            <div class="space-y-2">
              <div>
                <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama:</span>
                <span class="block text-lg font-semibold text-gray-900 dark:text-gray-100">{{ user.name }}</span>
              </div>
              <div>
                <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email:</span>
                <span class="block text-lg font-semibold text-gray-900 dark:text-gray-100">{{ user.email }}</span>
              </div>
              <div>
                <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">WhatsApp:</span>
                <span class="block text-lg font-semibold text-gray-900 dark:text-gray-100">{{ user.phone }}</span>
              </div>
            </div>
          </div>
          

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Informasi Permohonan</h3>
            <div class="space-y-2">
              <div>
                <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">Jalan / Kampung:</span>
                <span class="block text-lg font-semibold text-gray-900 dark:text-gray-100">{{ payment.ktr_request?.road }}</span>
              </div>
              <div>
                <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">Luas Lahan:</span>
                <span class="block text-lg font-semibold text-gray-900 dark:text-gray-100">{{ payment.ktr_request?.land_area }}</span>
              </div>
              <div>
                <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">Status Tanah:</span>
                <span class="block text-lg font-semibold text-gray-900 dark:text-gray-100">{{ payment.ktr_request?.land_status }}</span>
              </div>
              <div>
                <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">Untuk Keperluan:</span>
                <span class="block text-lg font-semibold text-gray-900 dark:text-gray-100">{{ payment.ktr_request?.purpose }}</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Informasi Harga</h3>
            <div class="space-y-2">
              <div>
                <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">E-Materai:</span>
                <span class="block text-lg font-semibold text-gray-900 dark:text-gray-100">Rp {{ payment.total_cost }}</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Informasi Pembayaran</h3>
            <div class="space-y-2">
              <div>
                <span class="block text-sm font-medium text-gray-700 dark:text-gray-300">Status:</span>
                <span class="block text-lg font-semibold text-gray-900 dark:text-gray-100" :class="{'text-red-600': payment.status == 'pending', 'text-green-600': payment.status === 'paid'}">{{ payment.status == 'paid' ? 'Sudah Bayar' : 'Belum Bayar' }}</span>
              </div>
            </div>
          </div>

          <button v-if="payment.status != 'paid'" @click.stop="pay" type="submit" class="w-full px-4 py-2 mt-2 mb-12 text-white bg-indigo-500 rounded hover:bg-indigo-700">Bayar</button>
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
import { useRoute } from 'vue-router';

const $loading = useLoading()
const route = useRoute()

const user = JSON.parse(localStorage.getItem('user'))
const payment = ref({})

const fetchPayment = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/payments/${route.params.id}`)
    payment.value = response.data
  } catch (error) {
    console.error(error)
  }
}

const pay = async () => {
  const paymentModal = await Swal.fire({
    title: 'Masukkan kode pembayaran',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Bayar',
  })
  if (paymentModal.isDismissed) {
    return
  }
  const loader = $loading.show({isFullPage: true, loader: 'dots', color: '#4B5563'});
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/payments/${route.params.id}/verify`, {
      payment_id: paymentModal.value
    })
    Swal.fire('Berhasil', response.data.message, 'success')
    fetchPayment()
  } catch (error) {
    Swal.fire('Gagal', error.response.data.message, 'error')
  } finally {
    loader.hide()
  }
}

onMounted(() => {
  fetchPayment()
})

</script>