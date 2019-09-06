<template>
  <div>
    <div class="hamburger" @click="openHamburger">
      <img src="../assets/hamburger.png" alt="toggle menu" />
    </div>

    <!-- The overlay -->
    <div id="myNav" class="overlay">
      <!-- Button to close the overlay navigation -->
      <a href="javascript:void(0)" class="closebtn" @click="closeHamburger">&times;</a>

      <!-- Overlay content -->
      <div class="overlay-content">
        <div class="links" @click="closeHamburger">
          <router-link
            class="nav-link"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >{{ routes.text}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var body = document.getElementsByTagName("BODY")[0];

export default {
  name: "MenuMobile",
  props: {
    links: Array
  },
  methods: {
    openHamburger: function() {
      document.getElementById("myNav").style.height = "100vh";
      //set a timeout otherwise the animation isn't smooth (due to fixed property)
      setTimeout(function() {
        // prevent unintended scrolling
        body.style.position = "fixed";
      }, 100);
    },
    closeHamburger: function() {
      document.getElementById("myNav").style.height = "0%";
      // enabling scrolling again
      body.style.position = "relative";
    }
  }
};
</script>

<style scoped>
.overlay {
  height: 0;
  width: 100vw;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: #334798;
  overflow-x: hidden;
  /* hidetheclose button */
  transition: 0.3s;
}

.overlay-content {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5vh;
  height: 50%;
}

.overlay .nav-link {
  padding: 5vh;
  text-decoration: none;
  font-size: 7vh;
  color: #f1cfda;
  display: block;
  transition: 0.3s;
  z-index: 99;
}

/* .overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
} */

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  text-decoration: none;
  color: white;
}

.overlay .router-link-exact-active {
  color: white;
  text-decoration: underline;
}
</style>

