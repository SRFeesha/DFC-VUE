<template>
  <!-- <div class="centered"> -->
  <nav id="mainMenu" class="sticky contentSpace centered">
    <div class="logo-box">
      <router-link to="/">
        <img id="logo-img" src="../assets/logo_00_designFreaksClub.png" alt="Logo DFC" />
      </router-link>
    </div>
    <mq-layout :mq="['mobile', 'tablet']">
      <MenuMobile :links="links" />
    </mq-layout>
    <mq-layout mq="desktop+">
      <MenuDesktop :links="links" />
    </mq-layout>
  </nav>
  <!-- </div> -->
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
  // box-sizing: border-box;
  padding: 1rem 1rem 0 1rem;
  margin: 0 auto 2rem auto;
  background-color: rgba(241, 207, 218, 0.7);
  border-radius: 0 0 10px 10px;
  height: 10vh;
  min-height: 80px;
  max-height: 150px;
  font-weight: 500;
  z-index: 99;
  backdrop-filter: blur(10px);
  // box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
}

.logo-box {
  display: flex;
  min-height: 70px;
}

.logo-img {
  object-fit: contain;
}

.sticky {
  position: sticky;
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