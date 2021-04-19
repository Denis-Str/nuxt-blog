<template lang="pug">
  el-form.form(
    :model="formFields"
    :rules="rules"
    ref="form"
    :hide-required-asterisk="true"
    @submit.native.prevent="onSubmit()"
  )
    h3 Добавить комментарий
    el-form-item(label="Имя" prop="name")
      el-input(
        placeholder="Ваше имя"
        v-model="formFields.name"
      )
    el-form-item(label="Текст" prop="text")
      el-input(
        type="textarea"
        placeholder="Комментарий"
        v-model="formFields.text"
        resize="none"
        :rows="2"
      )
    el-form-item
    el-button(
      type="primary"
      native-type="submit"
      icon="el-icon-check"
      :loading="loading"
      round
    ) Добавить комментарий
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      formFields: {
        name: "",
        text: ""
      },
      rules: {
        name: [
          { required: true, message: "Имя не должно быть пустым", trigger: "blur" },
          { min: 3, message: "Длина имени должна быть не менее 3 букв", trigger: "blur" }
        ],
        text: [
          { required: true, message: "Комментарий не должно быть пустым", trigger: "blur" },
          { max: 255, message: "Максимальное количество символов должно быть не более 255", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          // const formData = {
          //   name: this.formFields.name,
          //   text: this.formFields.text,
          //   postId: ``
          // };
          try {
            this.$message.success("Комментарий добавлен");
            this.$emit("created");
          } catch (e) {
            this.$message.error(e);
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  margin-bottom: 2rem;
}
</style>
