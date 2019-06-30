<template>
  <div class="contentSpace">
    <h1>Meetup</h1>
    <NextEvent/>
    <hr>
    <PastEvent/>
  </div>
</template>

<script>
import NextEvent from "./NextEvent";
import PastEvent from "./PastEvent";

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