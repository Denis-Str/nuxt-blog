<template lang="pug">
  .wrap
    el-container.admin__container
      el-aside.admin__aside(width="25%" )
        app-aside
      el-main
        nuxt
</template>

<script>
import AppAside from "@/components/admin/aside/Aside";

export default {
  components: {
    AppAside
  }
};
</script>

<style lang="scss" scoped>

.admin__container {
  height: 100%;
}
</style>
