<template lang="pug">
  article.article-component
    header.article__header
      .article__header-info
        h1.article__header-title Post title
        nuxt-link(to="/")
          i(class="el-icon-back")
      .article__info
        small.el-icon-time {{ new Date().toLocaleString() }}
        small
          i.el-icon-chat-line-square 10
    main.article__content
      .article__content-picture
        img.article__content-img(
          src="https://www.vse-strani-mira.ru/images/stories/picture/novosibirsk/000000000000000net_ua-93092.jpg"
          alt="article image"
        )
      p Lorem ipsum dolor sit amet.
      p Lorem ipsum dolor sit amet.
      p Lorem ipsum dolor sit amet.

    footer.article__footer
      app-add-comment(
        v-if="canAddComment"
        @created="createdComment"
      )
      .article__comments(v-if="true")
        app-comment(
          v-for="comment in 4"
          :key="comment"
          :comment="comment"
        )
      .article__comments-empty(v-else) Комметариев нет
</template>

<script>
import AppComment from "@/components/main/Comment/Comment";
import AppAddComment from "@/components/main/Form";

export default {
  components: {
    AppComment,
    AppAddComment
  },
  validate({ params }) {
    return Boolean(params.id);
  },
  data() {
    return {
      canAddComment: true
    };
  },
  head: {
    title: "Статья"
  },
  methods: {
    createdComment() {
      this.canAddComment = false;
    }
  }
};
</script>

<style src="./id.scss" lang="scss" scoped></style>
