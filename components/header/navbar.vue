<template>
  <div class="navbar_wrapper">
    <ul>
      <li v-for="item in menu[config.LANG]" :key="item.title">
        <NuxtLink no-prefetch :to="item.link" aligns="center">
          {{ item.title }}
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
</style>
