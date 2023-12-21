<template>
  <v-row justify="center" align="center">
    Registration Page |
    <NuxtLink  no-prefetch to="/login">Login</NuxtLink> |
    <NuxtLink  no-prefetch to="/password-recovery">Password Recovery</NuxtLink>
  </v-row>
</template>

<script>
export default {
  name: 'RegistrationPage',
}
</script>
