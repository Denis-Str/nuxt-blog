<template lang="pug">
  .user-component
    h2 Создать пользователя
    el-form.form(
      :model="formFields"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit()"
    )
      el-form-item(label="Логин" prop="login")
        el-input(v-model="formFields.login")
      el-form-item(label="Пароль" prop="pass")
        el-input(v-model="formFields.pass" type="password")
      el-form-item
      el-button(
        type="primary"
        native-type="submit"
        :loading="loading"
        round
      ) Создать
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  data() {
    return {
      loading: false,
      formFields: {
        login: "",
        pass: ""
      },
      rules: {
        login: [
          { required: true, message: "Введите логин", trigger: "blur" },
          { min: 3, message: "Длина логина должна быть не менее 3 символов", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "Введите пароль", trigger: "blur" },
          { min: 6, message: "Длина пароля должна быть не менее 6 символов", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          const formData = {
            name: this.formFields.login,
            text: this.formFields.pass,
          };

          try {
            await this.$store.dispatch("auth/createdUser", formData);
            this.$message.success("Пользователь создан");
            this.formFields.login = "";
            this.formFields.pass = "";

          } catch (e) {
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
.form {
  max-width: 600px;
}
</style>
