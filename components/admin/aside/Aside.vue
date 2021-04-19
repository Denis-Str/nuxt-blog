<template lang="pug">
  el-menu.aside-component(
    :default-active="$route.path"
    router
  )
    el-menu-item(index="/admin")
      i.el-icon-s-tools
      span Аналитика
    el-menu-item(index="/admin/create")
      i.el-icon-paperclip
      span Создать
    el-menu-item(index="/admin/posts")
      i.el-icon-chat-line-round
      span Посты
    el-menu-item(index="/admin/users")
      i.el-icon-user-solid
      span Пользователи
    el-menu-item(index="/admin/logout")
      i.el-icon-switch-button
      span Выйти
</template>

<script>
export default {};
</script>

<style src="./Aside.scss" lang="scss" scoped></style>
