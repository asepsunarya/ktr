<template>
  <div
    class="flex bg-gray-50 dark:bg-gray-900 h-screen"
    :class="{ 'overflow-hidden': true }"
  >
    <Sidebar />
    

    <div class="flex flex-col flex-1 w-full">
      <Navbar />

      <main class="h-full overflow-y-auto">
        <div class="container px-6 mx-auto mb-8 flex gap-x-8">
          <div class="w-2/4">
            <h2
              class="my-6  text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
              Preview Surat Permohonan
            </h2>
            <div class="flex justify-between mb-2">
              <div>
                <span class="font-semibold">Status Permohonan:&nbsp;</span>
                <select @change="updateStatus" v-model="status" name="" id="" class="cursor-pointer">
                  <option value="approved">Disetujui</option>
                  <option value="pending">Sedang Diproses</option>
                  <option value="rejected">Ditolak</option>
                </select>
              </div>
              <div class="flex gap-2">
                <a :href="`/admin/request/print/${route.params.id}`" target="_blank" class="bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-3 rounded">Cetak</a>
                <!-- <a :href="`/admin/request/edit/${route.params.id}`" class="border border-indigo-500 text-indigo-500 hover:bg-blue-700 py-1 px-3 rounded">Ubah</a> -->
              </div>
            </div>
            <div class="bg-white shadow px-8 py-4 rounded">
              <div class="px-8 py-4 rounded">
                <div class="grid">
                  <p class="justify-self-end">Cianjur, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024</p>
                  <table>
                    <tr>
                      <td width="100">Nomor</td>
                      <td width="10">:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td width="100">Lampiran</td>
                      <td width="10">:</td>
                      <td>1 (satu) lembar gambar situasi</td>
                    </tr>
                    <tr>
                      <td width="100">Perihal</td>
                      <td width="10">:</td>
                      <td class="font-bold underline">Permohonan Keterangan Tata Ruang</td>
                    </tr>
                  </table>
                </div>
                <br>
                <div>
                  <p class="font-bold">Kepada:</p>
                  <p class="font-bold">Yth. Bapak Kepala Dinas Pekerjaan Umum dan Tata Ruang</p>
                  <p class="font-bold ml-8">Kabupaten Cianjur</p>
                  <p>Di</p>
                  <p class="tracking-[10px] ml-8">CIANJUR</p>
                  <br>
                  <p>Dengan hormat,</p>
                  <p>Yang bertandatangan di bawah ini:</p>
                  <br>
                  <table>
                      <tr>
                        <td width="200">Nama</td>
                        <td width="10">:</td>
                        <td>{{ ktrRequest?.user?.name }}</td>
                      </tr>
                      <tr>
                        <td width="200">NIK</td>
                        <td width="10">:</td>
                        <td>{{ ktrRequest?.user?.ktp }}</td>
                      </tr>
                      <tr>
                        <td width="200">Pekerjaan</td>
                        <td width="10">:</td>
                        <td>{{ ktrRequest.job }}</td>
                      </tr>
                      <tr>
                        <td width="200">Alamat</td>
                        <td width="10">:</td>
                        <td>{{ ktrRequest.address }}</td>
                      </tr>
                      <tr>
                        <td width="200">No. Telp</td>
                        <td width="10">:</td>
                        <td>{{ ktrRequest?.user?.phone }}</td>
                      </tr>
                      <tr>
                        <td width="200">Bertindak selaku</td>
                        <td width="10">:</td>
                        <td class="capitalize">{{ ktrRequest.act_as }}</td>
                      </tr>
                  </table>
                  <br>
                  <p>Dengan ini mengajukan permohonan keterangan peruntukan lahan, di lokasi:</p>
                  <table>
                      <tr>
                          <td width="25">1.</td>
                          <td width="200">Jalan/Kampung</td>
                          <td width="10">:</td>
                          <td>{{ ktrRequest.road }}</td>
                      </tr>
                      <tr>
                          <td width="25"></td>
                          <td width="200">Desa/Kelurahan</td>
                          <td width="10">:</td>
                          <td>{{ ktrRequest?.subdistrict?.name }}</td>
                      </tr>
                      <tr>
                          <td width="25"></td>
                          <td width="200">Kecamatan</td>
                          <td width="10">:</td>
                          <td>{{ ktrRequest?.district?.name }}</td>
                      </tr>
                      <tr>
                          <td width="25"></td>
                          <td width="200">Kabupaten</td>
                          <td width="10">:</td>
                          <td>{{ ktrRequest?.regency?.name }}</td>
                      </tr>
                      <tr>
                          <td width="25">2.</td>
                          <td width="200">Luas Lahan</td>
                          <td width="10">:</td>
                          <td>{{ ktrRequest.land_area }}</td>
                      </tr>
                      <tr>
                          <td width="25">3.</td>
                          <td width="200">Status Tanah</td>
                          <td width="10">:</td>
                          <td>{{ ktrRequest.land_status }}</td>
                      </tr>
                      <tr>
                          <td width="30">4.</td>
                          <td width="200">Untuk Keperluan</td>
                          <td width="10">:</td>
                          <td>{{ ktrRequest.purpose }}</td>
                      </tr>
                  </table>
                  <br>
                  <p>Sebagai bahan, bersama ini saya lampirkan fotokopi identitas pemohon, fotokopi tanda bukti tanah, peta lokasi/situasi tanah dan foto eksisting lokasi yang dimohon keterangan tata ruangnya.</p>
                  <br>
                  <p>Demikian permohonan ini kami sampaikan, atas perhatian dan perkenannya diucapkan terima kasih.</p>
                  <br>
                  <div class="grid">
                    <div class="justify-self-end">
                      <p class="text-center">Hormat Saya,</p>
                      <img class="w-48 h-36 text-center" :src="ktrRequest.sign">
                      <br>
                      <p style="border: 1px dashed black; width: 200px;"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="w-1/4"></div> -->
          <div class="w-2/4">
            <h2
              class="my-6 mb-[65px] text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
              Lampiran
            </h2>
            <div class="bg-white shadow px-8 py-4 rounded">
              <div class="px-8 py-4 rounded">
                <img :src="`${storageURL}/${ktrRequest.activity_location}`" alt="">
              </div>
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
import { useLoading } from 'vue-loading-overlay'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'

const $loading = useLoading()
const route = useRoute()

const status = ref('')
const ktrRequest = ref({})

const storageURL = import.meta.env.VITE_STORAGE_URL

const fetchKtrRequest = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/ktr-requests/${route.params.id}`)
    ktrRequest.value = response.data
    status.value = response.data.status
  } catch (error) {
    console.error(error)
  }
}

const updateStatus = async () => {
  const loader = $loading.show({isFullPage: true, loader: 'dots', color: '#4B5563'});
  try {
    const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/ktr-requests/${route.params.id}/status`, {
      status: status.value
    })
    if (response.status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Status berhasil diubah'
      })
    }
  } catch (error) {
    console.error(error) 
  } finally {
    loader.hide()
  }
}

onMounted(() => {
  fetchKtrRequest()
})


</script>
