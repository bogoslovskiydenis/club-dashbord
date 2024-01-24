<template>
  <div class="navbar_logo">
    <NuxtLink
      no-prefetch
      :to="login ? `${currentLinkPrefix}main` : currentLinkPrefix"
      aligns="center"
    >
      <img src="/LogoSVG.svg" width="150px" class="logo" />
    </NuxtLink>
  </div>
</template>

<script>
import userMixin from '~/mixins/user'
import translate from '~/mixins/translate'
export default {
  name: 'LogoApp',
  mixins: [userMixin, translate],
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
  width: 95px;
}
</style>
