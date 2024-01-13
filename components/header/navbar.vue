<template>
  <div class="navbar_wrapper" :class="{ active: stateMenu }">
    <v-icon large color="white" class="burger_icon" @click="hideMenu">
      mdi-backburger
    </v-icon>
    <ul>
      <li v-for="item in menu[config.LANG]" :key="item.title">
        <NuxtLink no-prefetch :to="item.link" aligns="center">
          <span @click="hideMenu">{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import translate from '~/mixins/translate'
export default {
  name: 'NavBarLink',
  mixins: [translate],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menu: {
        RU: [
          { title: 'главная', link: '/admin' },
          { title: 'Партнерская сеть', link: '/admin/find-partners' },
          { title: 'Трансфер бонусов', link: '/admin/transfer-bonuses' },
        ],
        EN: [],
        UA: [],
      },
    }
  },
  computed: {
    stateMenu() {
      const menu = this.$store.getters['menu/getStateMenu']
      return menu.isOpen
    },
  },
  methods: {
    hideMenu() {
      this.$store.dispatch('menu/setStateMenu', false)
    },
  },
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
  color: rgba(204, 204, 204, 0.5);

  text-align: center;
  font-family: 'Montserrat', sans-serif;
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
    top: 11px;
    right: 20px;
  }
  .navbar_wrapper {
    position: relative;
  }
  .navbar_wrapper.active {
    transform: translateX(0%);
  }
  .navbar_wrapper a {
    font-size: 9px;
  }
  .navbar_wrapper {
    position: fixed;
    background: rgba(15, 14, 31, 0.5);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: 0.7s;
  }
  .navbar_wrapper ul {
    flex-wrap: wrap;
  }
  .navbar_wrapper ul li {
    display: block;
    width: 100%;
    text-align: center;
  }
  .navbar_wrapper ul li a {
    color: white;
    font-size: 15px;
  }
}
</style>
