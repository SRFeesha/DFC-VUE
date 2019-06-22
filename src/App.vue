<template>
  <div id="app">
    <FreaksBoard/>
  </div>
</template>

<script>
import FreaksBoard from "./components/FreaksBoard";

export default {
  name: "App",
  components: {
    FreaksBoard
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
