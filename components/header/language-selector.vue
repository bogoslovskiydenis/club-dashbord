<template>
  <div v-if="posts.length" class="lang_selector">
    <div class="lang_selector_ttl" :class="{ open: open }" @click="activate">
      <img :src="posts[0].flag" class="lang_selector_img" />
      {{ t('CURRENT_LANG') }}
    </div>
    <div class="lang_selector_wrapper" :class="{ open: open }">
      <div
        v-for="(item, index) in posts"
        :key="index"
        class="lang_selector_item"
      >
        <NuxtLink :to="item.link" class="lang_selector_item_link">
          <img :src="item.flag" /> {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import translate from '~/mixins/translate'
export default {
  name: 'LangSelector',
  mixins: [translate],
  props: {
    posts: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      title: '',
      open: false,
    }
  },
  mounted() {
    window.addEventListener('click', this.onClick)
  },
  destroyed() {
    window.removeEventListener('resize', this.onClick)
  },
  methods: {
    activate() {
      this.open = true
    },
    onClick(event) {
      if (
        this.open &&
        !event.target.classList.contains('lang_selector_ttl') &&
        !event.target.classList.contains('lang_selector_img')
      ) {
        this.open = false
      }
    },
  },
}
</script>

<style>
.lang_selector {
  font-family: 'Inter';
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  color: #8b8b8b;
}
.lang_selector_item {
  padding-bottom: 4px;
  padding-top: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
}
.lang_selector_item:last-child {
  border-bottom: none;
}
.lang_selector_item a {
  gap: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #8b8b8b !important;
}
.lang_selector_wrapper {
  position: absolute;
  background: linear-gradient(
    235deg,
    #0e0c15 6.76%,
    #110d18 49.09%,
    #0f0e1f 93.29%
  );
  top: -10px;
  left: 0px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: none;
  z-index: 3;
}
.lang_selector_ttl {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}
.lang_selector_ttl::after {
  content: '';
  width: 24px;
  height: 24px;
  position: absolute;
  background: var(--white_arrow);
  top: 8px;
  right: 12px;
  transition: 0.7s;
}
.lang_selector_ttl.open::after {
  transform: rotate(180deg);
}
.lang_selector_wrapper.open {
  display: block;
}
</style>
