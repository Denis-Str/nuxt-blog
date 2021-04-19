<template lang="pug">
  .error
    .error__content
      h2(class="error__title") Ошибка 404
      nuxt-link(to="/") На главную
</template>

<script>
export default {
  head: {
    title: "Ошибка"
  }
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
}

.error__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error__title {
  color: #f10a0a;
  margin-bottom: 1rem;
}

.error {
  height: 100%;
  padding: 0;
}
</style>
