<script setup lang="ts">
const modal = useModal();
</script>

<template>
  <div class="home">
    <div class="container">
      <h1>Composable Component</h1>

      <p>
        vue menerima Komponen yang dijadikan objek reaktif. Hal ini dapat
        menyebabkan overhead performa yang tidak perlu, oleh sebab itu hal ini
        harus dihindari dengan menandai komponen sebagai `markRaw` atau
        menggunakan `shallowRef` sebagai pengganti `ref`.
      </p>

      <p>
        shallowRef() digunakan untuk mengoptimalkan performa dari struktur data
        yang besar atau integrasi dengan sistem manajemen state eksternal.
        shallowRef() hanya akan memicu listener jika nilai itu sendiri berubah
      </p>

      <button
        style="margin: 0 4px"
        @click="modal.showModal(modal.stateTYPE.LOGIN)"
      >
        Login
      </button>
      <button @click="modal.showModal(modal.stateTYPE.REGISTER)">
        Register
      </button>
    </div>
  </div>

  <Teleport to="#modal">
    <component :is="modal.component.value" />
  </Teleport>
</template>

<style scoped>
.home .container {
  width: 1080px;
  margin: 0 auto;
}
</style>
