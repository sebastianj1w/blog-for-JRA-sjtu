<template>
  <nav class="nav">
    <h1 class="nav__title">
      <router-link to="/">{{ content.title }}</router-link>
    </h1>
    <a v-if="this.$route.path === '/'" style="position: absolute; right: 20px" href="" target="_blank">
      <img style="width: 50px;" src="../assets/topicon.svg"/>
    </a>
    <transition-group tag="menu" name="nav__item" class="nav__menu">
      <li v-for="label in labels" class="nav__item" :key="label" @click="navBack">
        <i class="nav__item--icon"></i>
        <span class="nav__item--label">{{ label }}</span>
      </li>
    </transition-group>
  </nav>
</template>

<script>
export default {
  name: 'blog-nav',
  props: {
    navs: Number,
    content: Object,
    filters: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      init_navs: 0
    }
  },

  created: function () {
    this.init_navs = this.navs;
  },

  computed: {
    labels() {
      return Object.keys(this.filters)
        .map(filter => this.content.labels[filter])
    }
  },

  methods: {
    navBack() {
      console.log(this.navs);
      console.log(this.$route.path);
      if (this.navs && !this.filters.author) this.$router.go(-1)
      else this.$router.push('/')
    }
  }
}
</script>
