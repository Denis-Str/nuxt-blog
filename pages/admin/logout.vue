<template lang="pug">
  h2 Выход
</template>

<script>
export default {
  layout: "empty",
  middleware: ["admin-auth"],
  created() {
    this.$store.dispatch("auth/logout");
    this.$router.push("/admin/login?message=logout")
  }
};
</script>

<style scoped></style>
