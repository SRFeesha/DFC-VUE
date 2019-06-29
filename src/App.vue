<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import FreaksBoard from "./components/FreaksBoard";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  background-color: #f1cfda;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.contentSpace {
  max-width: 1000px;
  margin: auto;
}

.buttonhover {
  font-family: Circular Std;
  font-size: 13px;
  color: #334798;
}
button {
  font-family: Larish Neue;
  font-size: 18px;
  letter-spacing: 0.54px;
  color: #ffffff;
  background-color: #334798;
  border: 0px;
  border-radius: 100px;
  padding: 1em 3em;
  margin-top: 1em;
}

h3 {
  font-family: Circular Std;
  font-size: 25px;
  line-height: 32px;
  letter-spacing: 0.5px;
  color: #334798;
}
h2 {
  font-family: Larish Neue;
  font-size: 40px;
  color: #334798;
}
h1 {
  font-family: Larish Neue;
  font-size: 69px;
  color: #334798;
}

@media screen and (min-width: 768px) {
  #mainMenu {
    display: none;
  }
}

// .body {
//   font-family: Circular Std;
//   font-size: 13px;
//   color: #334798;
// }
// .bodysection {
//   font-family: Circular Std;
//   font-size: 20px;
//   line-height: 28px;
//   letter-spacing: 0.48px;
//   color: #334798;
// }
// .bodyschedule {
//   font-family: Bluu Next;
//   font-weight: bold;
//   font-size: 20px;
//   line-height: 50px;
//   color: #334798;
// }
// .bodymenu {
//   font-family: Circular Std;
//   font-size: 19px;
//   color: #334798;
// }
</style>
