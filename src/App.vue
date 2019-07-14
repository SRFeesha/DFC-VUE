<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// import FreaksBoard from "./components/FreaksBoard";
import Nav from "./components/TheNavbar";
import Footer from "./components/TheFooter";

export default {
  name: "App",
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
@import "./assets/font/font.css"; /* Using a string */
html,
body {
  margin: 0;
  background-color: #f1cfda;
}
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: Circular Std, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #334798;
  margin-top: 10vh;
}
.contentSpace {
  max-width: 1200px;
  margin: 1rem;
}

.cta {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0rem;
  span {
    text-align: center;
    margin: 1rem 0rem;
  }
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
  // & + span {
  // display: block;
  // text-align: center;
  // }
}

h3 {
  font-family: Circular Std;
  font-size: 25px;
  line-height: 2rem;
  letter-spacing: 0.5px;
  color: #334798;
  font-weight: 400;
}
h2 {
  font-family: Larish Neue;
  font-size: 3rem;
  color: #334798;
}
h1 {
  font-family: Larish Neue;
  font-size: 4rem;
  color: #334798;
}

.body-section {
  font-family: Circular Std;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.48px;
  color: #334798;
}

section {
  height: 70vh;
  min-height: min-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
}
.illustration {
  grid-column: 1 / 7;
  grid-row: 2;
  object-fit: cover;
  img {
    max-width: 100%;
  }
}
.pitch {
  grid-column: 1 / 7;
  grid-row: 1;
  h1 {
    margin: 1rem 0rem;
  }
  h3 {
    width: 66%;
    margin: 1rem 0rem;
  }
}

@media screen and (min-width: 768px) {
  #mainMenu {
    display: none;
  }
  section {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100%;
  }
  .contentSpace {
    max-width: 1200px;
    margin: auto;
  }

  section {
    height: 70vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr;
    .pitch {
      grid-column: 1 / 8;
      grid-row: 1;
      h1 {
        margin: 1rem 0rem;
      }
      h3 {
        width: 66%;
        margin: 1rem 0rem;
      }
    }
    .illustration {
      grid-column: 6 / 12;
      grid-row: 1;
      object-fit: cover;
    }
  }
  h3 {
    font-family: Circular Std;
    font-size: 25px;
    line-height: 32px;
    letter-spacing: 0.5px;
    color: #334798;
    font-weight: 400;
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
  .cta {
    display: block;
  }
  .button + span {
    margin: 0rem 1rem;
    font-size: 12px;
    color: #334798;
  }
  .button:hover {
    transform: scale(1.1);
    transition: ease-in 0.2s;
    cursor: pointer;
  }
}
</style>
