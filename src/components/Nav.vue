<template>
  <div>
    <nav id="mainMenu" class="sticky">
      <div class="logo">
        <img src="../assets/logo_00_designFreaksClub.png" alt="Logo DFC" />
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
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

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
  width: 100%;
  font-weight: 500;
  padding: 1rem calc((100vw - 1200px) / 2);
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
</style>