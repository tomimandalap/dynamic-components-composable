<script setup lang="ts">
const modal = useModal();

function onSubmit() {
  alert("REGISTER");

  modal.hideModal();
}
</script>
<template>
  <div class="card">
    <h1 class="card-title">Register</h1>
    <form class="forms" @submit.prevent="onSubmit">
      <input type="text" id="email" placeholder="example@mail.com" />
      <input type="password" id="password" placeholder="Input password" />

      <div class="card-actions">
        <button type="button" @click="modal.hideModal()">Close</button>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.card {
  background: #f8f8f8;
  border: 1px solid #ccc;
  padding: 1rem;
}

.card-title {
  color: black;
  margin: 0;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0;
  width: 100%;
}

.forms {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  min-width: 320px;
  padding: 1rem;
}

.forms > input,
.forms > button {
  margin: 6px 0;
  border: 0;
  font-size: 0.8rem;
}

input {
  padding: 8px 1rem;
  width: 100%;
  background: #efefef;
}

button {
  padding: 8px 3rem;
}
</style>
