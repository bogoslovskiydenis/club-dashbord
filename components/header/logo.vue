<template>
  <div class="navbar_logo">
    <NuxtLink no-prefetch to="/admin" aligns="center">
      <img src="/Logo.png" width="150px" class="logo"/>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'LogoApp',
}
</script>

<style>

.navbar_logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar_logo img {
  max-width: 100%;
}

</style>


