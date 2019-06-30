<template>
  <div class="contentSpace">
    <h1>Meetup</h1>
    <NextEvent />
    <hr />
    <PastEvent />
    <Footer />
  </div>
</template>

<script>
import NextEvent from "./NextEvent";
import PastEvent from "./PastEvent";
import Footer from "./Footer";

export default {
  name: "Meetup", //this is the name of the component
  components: {
    NextEvent,
    PastEvent,
    Footer
  }
};
</script>
<style>
</style>