<template>
  <div class="links">
    <router-link
      class="nav-link"
      v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`"
    >{{ routes.text}}</router-link>
  </div>
</template>

<script>
export default {
  name: "MenuDesktop",
  props: {
    links: Array
  }
};
</script>

<style scoped>
.nav-link {
  /* font-family: Circular Std; */
  color: #334798;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.48px;
  margin: 1.5rem;
  text-decoration: none;
  font-weight: 500;
}
a.router-link-exact-active {
  border-bottom: 2px solid #334798;
}
</style>
