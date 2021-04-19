<template lang="pug">
  el-card(shadow="always")
    h2 Войти в панель администратора
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
      el-button(
        type="primary"
        native-type="submit"
        :loading="loading"
        round
      ) Войти
</template>

<script>
export default {
  layout: "empty",
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
  head: {
    title: "Login"
  },
  mounted() {
    const { message } = this.$route.query;
    switch (message) {
      case "login":
        this.$message.info("Необходимо авторизоваться");
        break;
        case "logout":
        this.$message.success("Вы вышли из административной панели");
        break;
    }
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
            await this.$store.dispatch("auth/login", formData);
            this.$router.push("/admin");
          } catch (e) {
            // this.$message.error("Ошибка авторизации");
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
  display: flex;
  flex-direction: column;
}

.el-card {
  width: 50%;
}

.el-button {
  align-self: center;
}
</style>
