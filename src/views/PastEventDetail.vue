<template>
  <!-- <div class="contentSpace card"> -->
  <div class="contentSpace">
    <div class="card">
      <h1>{{ title }}</h1>

      <div class="content" :desc="desc" v-html="desc"></div>
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
  },
  computed: {
    desc: function() {
      return this.$store.state.events.desc;
    },
    title: function() {
      return this.$store.state.events.title;
    }
  }
  // created() {
  //   this.title = this.$store.state.events.title;
  //   this.desc = this.$store.state.events.desc;
  // }
};
</script>

<style >
.content img {
  max-width: 100%;
  max-height: 400px;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.01), 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.contentSpace {
  margin-bottom: 4rem;
}
</style>