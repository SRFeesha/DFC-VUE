<template>
  <!-- <div class="contentSpace card"> -->
  <div class="contentSpace">
    <div class="card">
      <h1>{{ $store.state.events.title }}</h1>

      <div class="content" v-html="$store.state.events.desc"></div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "PastEventDetail",
  data() {
    return {
      eventID: this.$route.params.eventName
    };
  }
};
</script>

<style >
.content img {
  max-width: 100%;
  max-height: 400px;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.01), 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>