<template>
  <div class="centered">
    <nav id="mainMenu" class="sticky">
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
  height: 10vh;
  min-height: 50px;
  max-height: 80px;
  width: 90%;
  margin: auto;
  font-weight: 500;
  border-radius: 0vh 0vh 2vh 2vh;
  background-color: #f1cfda;
  padding: 1rem 0;
  z-index: 99;
  // padding: 1rem calc((90vw - 1200px) / 2);
  // box-sizing: content-box;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100vw;
  max-width: 1200px;
}

.nav-link {
  font-weight: 700;
}

// More space before the menu gets sticky
.moreSpace {
  height: 100px;
}
.centered {
  display: flex;
  justify-content: center;
}
</style>