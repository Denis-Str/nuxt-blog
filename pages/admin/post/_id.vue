<template lang="pug">
  .post-component
    el-breadcrumb(separator-class="el-icon-arrow-right" class="post__breadcrumb")
      el-breadcrumb-item(:to="{ path: '/admin/posts' }") Посты
      el-breadcrumb-item {{ post.title }}
    h2 {{ post.title }}

    el-form.form(
      :model="formFields"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit()"
    )
      el-form-item(label="Заголовок" prop="title")
        el-input(v-model="formFields.title")

      el-form-item(label="Текст в формате .md или .html" prop="text")
        el-input(
          type="textarea"
          v-model="formFields.text"
          resize="none"
          :rows="10"
        )

      .post__info
        i.el-icon-time
        span {{ new Date().toLocaleString() }}

      el-button(
        type="primary"
        native-type="submit"
        :loading="loading"
        round
      ) Обновить
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch("posts/fetchSinglePostById", params.id)

    return {
      post
    }
  },
  data() {
    return {
      loading: false,
      formFields: {
        text: "",
        title: ""
      },
      rules: {
        text: [
          { required: true, message: "Текст не должен быть пустым", trigger: "blur" },
          { min: 3, message: "Длина поста должна быть не менее 3 символов", trigger: "blur" }
        ],
        title: [
          { required: true, message: "Загловок не должен быть пустым", trigger: "blur" },
          { min: 3, message: "Длина Заголовка должна быть не менее 3 символов", trigger: "blur" }
        ],
      }
    };
  },
  head() {
    return {
      title: `Пост | ${this.post.title}`
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;

          const formData = {
            title: this.formFields.title,
            text: this.formFields.text,
            id: this.post.id
          };

          try {
            await this.$store.dispatch("posts/upDataPost", formData);
            this.$message.success("Пост обновлен");
          } catch (e) {
            this.$message.error("Пост не обновлен");
            this.loading = false;
          } finally {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.post-component {
  max-width: 600px;
}

.post__breadcrumb {
  margin-bottom: 2rem;
}

.post__info {
  margin-bottom: 25px;
}
</style>
