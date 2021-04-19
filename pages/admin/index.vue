<template lang="pug">
  h1 Admin
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  head: {
    title: "Админка"
  }
};
</script>

<style lang="scss" scoped>

</style>
