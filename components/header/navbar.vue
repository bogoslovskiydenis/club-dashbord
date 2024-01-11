<template>
  <div class="navbar_wrapper">
    <ul>
      <li>
        <NuxtLink no-prefetch to="/admin" aligns="center">
          главная
        </NuxtLink>
      </li>
      <li>
        <NuxtLink no-prefetch to="/admin/find-partners">Find partners</NuxtLink>
      </li>
      <li>
        <NuxtLink no-prefetch to="/admin/transfer-bonuses">Transfer Bonuses</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBarLink"
}
</script>

<style scoped>
.navbar_wrapper {
  display: flex;
  align-items: center;
}

.navbar_wrapper ul {
  gap: 16px;
  display: flex;
  padding: 0px;
}

.navbar_wrapper a {
  color: rgba(204, 204, 204, 0.50);

  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  text-transform: uppercase;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 768px) {
  .navbar_wrapper a{
    font-size: 9px;
  }
}

@media (max-width: 375px) {
.navbar_wrapper  ul{
    display: none;
  }
}
</style>
