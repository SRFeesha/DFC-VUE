<template>
  <div class="contentSpace">
    <div class="moreSpace"></div>
    <nav id="mainMenu" class="sticky">
      <div class="logo">
        <img src="../assets/logo_00_designFreaksClub.png" alt="Logo DFC">
      </div>
      <div class="links">
        <router-link
          class="nav-link"
          v-for="routes in links"
          v-bind:key="routes.id"
          :to="`${routes.page}`"
        >{{ routes.text}}</router-link>
      </div>
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

<style lang="scss">
nav#mainMenu {
  background-color: #f1cfda;
  height: 20vh;
  min-height: 50px;
  max-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-link {
  /* font-family: Circular Std; */
  color: #334798;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.48px;
  margin: 1.5rem;
  text-decoration: none;
}
a.router-link-exact-active {
  border-bottom: 2px solid #334798;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1000px;
}
.moreSpace {
  height: 100px;
}
</style>