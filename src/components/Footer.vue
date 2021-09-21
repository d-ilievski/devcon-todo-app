<template>
  <footer>
    <div>&copy; DevCon</div>
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default { name: "Footer" };
</script>

<style scoped>
footer {
  text-align: center;
  margin-top: 32px;
  color: grey;
}

a {
  color: teal;
}
</style>