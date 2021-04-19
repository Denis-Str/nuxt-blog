<template lang="pug">
  .posts-component
    h2 Список постов
    el-table.posts__table(:data="posts")
      el-table-column.posts__table-column(
        prop="title"
        label="Название поста"
      )
      el-table-column.posts__table-column(label="Дата")
        template(slot-scope="{row: { date }}")
          i.el-icon-time
          span {{ new Date(date).toLocaleString() }}

      el-table-column.posts__table-column(label="Просмотры")
        template(slot-scope="{row: { views }}")
          i.el-icon-view
          span {{ views }}

      el-table-column.posts__table-column(label="Комментарии")
        template(slot-scope="{row: { comments }}")
          i.el-icon-chat-line-square
          span {{ comments.length }}

      el-table-column(label="Действия")
        template(slot-scope="{ row }")
          el-tooltip(effect="light" content="Редактировать пост" placement='top')
            el-button(
                type="primary"
                @click="open(row.id)"
                icon="el-icon-edit"
                circle
              )
          el-tooltip(effect="light" content="Удалить пост" placement='top')
            el-button(
              type="danger"
              @click="remove(row.id)"
              icon="el-icon-delete"
              circle
            )
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  async asyncData({store}) {
    const posts = await store.dispatch("posts/fetchAdminList");
    return {
      posts
    }
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`);
    },
    async remove(id) {
      try {
        await this.$confirm("Удалить поста", "Внимание!", {
          confirmButtonText: "Да",
          cancelButtonText: "Отменить",
          type: "warning"
        });
        this.$message.success(" Пост удален");
        await this.$store.dispatch("posts/removePosts", id);
        this.posts = this.posts.filter(post => post.id !== id);
      } catch (e) {}
    }
  }
};
</script>

<style scoped>
.posts__table {
  width: 100%;
}

.posts__table-column {
  width: 180px;

  span {
    margin-left: 10px;
  }
}
</style>
