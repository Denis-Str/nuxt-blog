<template lang="pug">
  .post-create-component
    h2 Создать пост

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

      el-upload.post__upload(
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="uploadImg"
        :auto-upload="false"
        ref="upload"
        drag
      )
        i.el-icon-upload
        .el-upload__text
          | Перетащите картинку
          em  или нажмите для загрузки
        .el-upload__tip(slot="tip") jpg/png < 500kb


      el-button.post__preview(type="success" @click="previewPost = true" plain) Предпросмотр

      el-dialog(
        title="Предпросмотр"
        :visible.sync="previewPost"
      )
        .post__preview--inner(:key="formFields.text")
          vue-markdown {{ formFields.text }}


      el-button(
        type="primary"
        native-type="submit"
        :loading="loading"
        round
      ) Создать пост
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  data() {
    return {
      img: null,
      loading: false,
      previewPost: false,
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
        ]
      }
    };
  },
  head() {
    return {
      title: "Создать пост"
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid && this.img) {
          this.loading = true;
          const formData = {
            title: this.formFields.title,
            text: this.formFields.text,
            img: this.img
          };

          try {
            await this.$store.dispatch("posts/createPost", formData);
            this.$message.success("Пост создан");
            this.formFields.title = "";
            this.formFields.text = "";
            this.img = null;
            this.$refs.upload.clearFiles();
          } catch (e) {
            this.$message.error("Пост не создан");
            this.loading = false;
          } finally {
            this.loading = false;
          }
        } else {
          this.$message.warning("Форма не валидна");
        }
      });
    },
    uploadImg(file) {
      this.img = file.raw;
    }
  }
};
</script>

<style lang="scss" scoped>
.post-component {
  max-width: 600px;
}

.post__upload {
  margin-bottom: 25px;
}

.post__preview {
  margin-right: 25px;
}
</style>
