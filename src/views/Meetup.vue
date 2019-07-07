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
import NextEvent from "../components/NextEvent";
import PastEvent from "../components/PastEvent";

export default {
  name: "Meetup", //this is the name of the component
  components: {
    NextEvent,
    PastEvent
  }
};
</script>
<style>
</style>