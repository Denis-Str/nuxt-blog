<template lang="pug">
  el-card(
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  )
    header(slot="header" class="posts__header")
      h3 Post
      small(class="el-icon-time") {{ new Date().toLocaleString() }}
    .posts__body
      img(
        src="https://www.vse-strani-mira.ru/images/stories/picture/novosibirsk/000000000000000net_ua-93092.jpg"
        alt="post image"
        class="posts__img"
      )
    footer(class="posts__footer")
      el-button(
        @click="openPost"
        type="primary"
        round
      ) Открыть пост
      span
        i(class="el-icon-chat-line-square") 10
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 1;
      this.$router.push(`/post/${id}`);
    }
  }
};
</script>

<style src="./Post.scss" lang="scss" scoped></style>
