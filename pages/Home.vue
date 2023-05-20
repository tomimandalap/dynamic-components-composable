<script setup lang="ts">
const modal = useModal();

useHead({
  title: "Dynamic Components - Composable",
});
</script>

<template>
  <div class="home">
    <div class="container">
      <h1>Composable Component</h1>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, facere
        excepturi! Molestias asperiores, doloribus autem molestiae eum unde at
        officiis, quaerat hic, enim commodi voluptates fugiat cum assumenda illo
        quae expedita atque optio inventore a repudiandae aliquid. Quasi autem
        odio natus, architecto praesentium ullam laboriosam repellat cumque
        voluptate magni voluptates?
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        deserunt earum quia dolores tenetur rem hic itaque. Magnam assumenda
        possimus, veniam voluptatem debitis est autem eum eaque accusamus unde
        ullam!
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
