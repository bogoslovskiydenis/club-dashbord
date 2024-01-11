<template>
  <div class="navbar_wrapper" :class="{active: hide}">

    <v-icon
      large
      color="black"
      class="burger_icon"
      @click="toggle"
    >
      mdi-message-text
    </v-icon>
    <ul >
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
  name: "NavBarLink",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hide: false
    }
  },
  methods: {
    toggle() {
      this.hide = true
    }
  },
  mounted() {
    this.hide = !this.show
  }
}
</script>

<style scoped>
.navbar_wrapper {
  display: flex;
  align-items: center;
  transition: 0.7s;
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
  .burger_icon {
    position: absolute;
    top:10px;
    right:10px;
  }
  .navbar_wrapper{
    position: relative;
  }
  .navbar_wrapper.active {
    transform: translateX(-100%);
  }
  .navbar_wrapper a{
    font-size: 9px;
  }
  .navbar_wrapper {
    position: fixed;
    background: rgba(204, 204, 204, 0.50);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navbar_wrapper ul {
    border: 1px solid red;
  }
}

@media (max-width: 375px) {
.navbar_wrapper  ul{
    display: none;
  }
}
</style>
