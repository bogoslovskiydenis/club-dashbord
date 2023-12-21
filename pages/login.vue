<template>
  <v-row>
    <v-col class="text-center test">
      Login Page
      <NuxtLink  no-prefetch to="/">Registration</NuxtLink> |
      <NuxtLink  no-prefetch to="/password-recovery">Password Recovery</NuxtLink>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>
<style scoped>
  .test {
    border: 1px solid green;
  }
</style>
