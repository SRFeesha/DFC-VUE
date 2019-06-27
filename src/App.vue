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

<style>
html,
body {
  margin: 0;
  background-image: url("./assets/bg.jpg");
  overscroll-behavior-y: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
