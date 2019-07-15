<template>
  <div class="centered">
    <nav id="mainMenu" class="sticky contentSpace">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo_00_designFreaksClub.png" alt="Logo DFC" />
        </router-link>
      </div>
      <mq-layout :mq="['mobile', 'tablet']">
        <MenuMobile :links="links" />
      </mq-layout>
      <mq-layout mq="desktop+">
        <MenuDesktop :links="links" />
      </mq-layout>
    </nav>
  </div>
</template>

<script>
import MenuMobile from "./TheMenuMobile";
import MenuDesktop from "./TheMenuDesktop";

export default {
  name: "Nav",
  components: {
    MenuMobile,
    MenuDesktop
  },
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
          text: "Suggestion",
          page: "/freaksboard"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
nav#mainMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  height: 10vh;
  max-height: 80px;
  width: 100%;
  font-weight: 500;
  background-color: #f1cfda;
  padding: 1rem 0;
  z-index: 99;
}

.sticky {
  position: fixed;
  top: 0;
  margin-top: 0;
}

.nav-link {
  font-weight: 700;
}

.centered {
  display: flex;
  justify-content: center;
}
</style>