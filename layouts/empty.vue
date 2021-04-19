<template lang="pug">
  .wrap
    .empty-layout
      el-container.empty-layout__container
        nuxt
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(value) {
      this.$message.error(value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
