<template>
  <div class="card">
    <div class="photo">{{ img }}</div>
    <h3>{{ title }}</h3>
    <p>{{ shortDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "PastEvent",
  data() {
    return {
      title: "event -1",
      shortDesc:
        "this event was fire!!! you should've been here man, where you at?!?",
      img: "www.unsplash.com/source/400/400"
    };
  }
};
</script>

<style>
</style>