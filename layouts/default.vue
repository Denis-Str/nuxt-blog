<template lang="pug">
  .wrap
    el-container
      el-header
        app-navigation
      el-main
        nuxt
      el-footer footer
</template>

<script>
import AppNavigation from "@/components/main/Navigation";

export default {
  components: {
    AppNavigation
  }
};
</script>
