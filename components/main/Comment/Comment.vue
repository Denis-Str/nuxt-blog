<template lang="pug">
    el-card(class="comment-component")
      .comment__header
        span(class="comment__name") Person name
        span(class="el-icon-time") {{ new Date().toLocaleString() }}
      .comment__content Lorem ipsum dolor sit amet.
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"]
};
</script>

<style src="./Comment.scss" lang="scss" scoped></style>
