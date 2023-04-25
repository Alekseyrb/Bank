<template>
  <form class="card" @submit.prevent>
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email">
    </div>

    <div class="form-control">
      <label for="password">Email</label>
      <input type="password" id="password">
    </div>

    <button class="btn primary" type="submit">Войти</button>
  </form>
</template>

<script>
export default {
  name: "Auth"
}
</script>

<style scoped>

</style>