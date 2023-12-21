<template>
  <div class="navbar">
    <div class="navbar_wrapper">
      <ul>
        <li><a href="#">главная</a></li>
        <li><a href="#">Партнерская сеть</a></li>
        <li><a href="#">Трансфер бонусов</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarLink"
}
</script>

<style scoped>
.navbar_wrapper{
  display: flex;
}
ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
