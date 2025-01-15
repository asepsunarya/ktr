<template>
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
        <div class="justify-self-end flex flex-col items-center">
          <p class="text-center">Hormat Saya,</p>
          <img class="w-48 h-36 text-center" :src="ktrRequest.sign">
          <br>
          <p class="text-center" style="border: 1px dashed black; width: 200px;"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useLoading } from 'vue-loading-overlay'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute()

const ktrRequest = ref({})

const fetchKtrRequest = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/ktr-requests/${route .params.id}`)
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
  fetchKtrRequest()
  setTimeout(() => {
    window.print();
  }, 2000); // Delay 2 detik
})


</script>

