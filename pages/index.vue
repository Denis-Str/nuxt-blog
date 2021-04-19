<template lang="pug">
  el-row(type="flex" justify="center")
    el-col(:xs="24" :sm="18" :md="12" :lg="10")
      app-post(
        v-for="post in 3"
        :key="post"
      )
</template>
<script>
import AppPost from "@/components/main/Post/Posts";
export default {
  components: {
    AppPost
  },
  head: {
    title: "Главная"
  }
}
</script>

<style scoped></style>
