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
// TODO: Super bad practice, should be linked in html instead
@import "./assets/font/font.css"; /* Using a string */

// start LAYOUT
html,
body {
  margin: 0;
  background-color: #f1cfda;
}

#app {
  font-family: Circular Std, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #334798;
  // margin-top: 10vh;
}

.contentSpace {
  max-width: 1200px;
  margin: 1rem;
}

section {
  // height: 70vh;
  min-height: min-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: min-content 1fr;
  margin-bottom: 5rem;
  padding-top: 3rem;
}

.cta {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0rem;
  align-items: center;

  span {
    text-align: center;
    margin: 1rem 0rem;
  }
  button {
    margin-top: 1em;
    padding: 1em 3em;
    border: 0px;
    width: fit-content;
    height: 48px;
    background-color: #334798;
    border-radius: 100px;
    // color: #ffffff;
    // font-family: Larish Neue;
    // font-size: 18px;
    // letter-spacing: 0.54px;
    transition: ease-in 0.2s;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    a {
      color: #ffffff;
      font-family: Larish Neue;
      font-size: 18px;
      letter-spacing: 0.54px;
    }
  }
}

.illustration {
  grid-column: 1 / 7;
  grid-row: 1;
  object-fit: cover;
  img {
    max-width: 100%;
  }
}

.pitch {
  grid-column: 1 / 7;
  grid-row: 2;
}

// end LAYOUT

// start TYPOGRAPHY
h1 {
  font-family: Larish Neue;
  font-size: 4rem;
  color: #334798;
  margin: 1rem 0rem;
}

h2 {
  font-family: Larish Neue;
  font-size: 3rem;
  color: #334798;
  margin: 2rem 0 1.5rem 0;
}
h3 {
  font-family: Circular Std;
  font-size: 25px;
  line-height: 2rem;
  letter-spacing: 0.5px;
  color: #334798;
  font-weight: 400;
  margin: 1rem 0rem;
}

.body-section {
  font-family: Circular Std;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.48px;
  color: #334798;
}

a {
  text-decoration: none;
  /* margin-right: 2.5rem; */
  font-weight: 400;
  &.link {
    color: #334798;
  }
  &.link-inverse {
    color: #f1cfda;
  }
}

// END TYPOGRAPHY

@media screen and (min-width: 768px) {
  #mainMenu {
    display: none;
  }

  section {
    height: 70vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100%;
    .pitch {
      grid-column: 1 / 8;
      grid-row: 1;
      h1,
      h3 {
        margin: 1rem 0rem;
      }
    }
    .illustration {
      grid-column: 6 / 12;
      grid-row: 1;
      object-fit: cover;
    }
  }
  .cta {
    display: block;
    button + span {
      margin: 0rem 1rem;
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .contentSpace {
    margin: auto;
  }
  .pitch h3 {
    width: 66%;
  }
}
</style>
