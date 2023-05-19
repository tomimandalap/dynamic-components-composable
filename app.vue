<script setup lang="ts">
const modal = useModal();
const show = computed(() => {
  return modal.show.value;
});
</script>

<template>
  <div :class="['overlay', { block: show, hidden: !show }]">
    <div class="container">
      <div id="modal"></div>
    </div>
  </div>

  <main>
    <NuxtPage />
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  color: black;
  background-color: #f8fcf8;
  font-family: Arial, Helvetica, sans-serif;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.block {
  display: block;
}

.hidden {
  display: none;
}
</style>
