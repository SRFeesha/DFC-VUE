<template>
  <div>
    <nav>
    <img src="../assets/logo_00_designFreaksClub.png" alt="Logo DFC">
      <router-link
        class="nav-link"
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
      >{{ routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Nav",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home",
          page: "/"
        },
        {
          id: 1,
          text: "Meetup",
          page: "/meetup"
        },
        {
          id: 2,
          text: "Schedule",
          page: "/schedule"
        },
        {
          id: 3,
          text: "FreaksBoard",
          page: "/freaksboard"
        }
      ]
    };
  }
};
</script>

<style>
nav {
    background-color: pink;
    height: 20vh;
}
.nav-link{
    color:black;
    background-color: red;
}
a.router-link-exact-active{
    background-color: green;
}
</style>