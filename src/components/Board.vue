<template>
  <div class="arg" :class="arg">
    <div class="title">
      <h3>{{ arg }}</h3>
    </div>
    <ul class="content">
      <CardMini v-for="postit in postitsByArg" :key="postitsByArg.id" :cont="postit.msg"></CardMini>
    </ul>
    <Input :arg="arg"></Input>
  </div>
</template>

<script>
import CardMini from "./CardMini";
import Input from "./Input";

export default {
  name: "Board",
  components: {
    CardMini,
    Input
  },
  props: {
    arg: String
  },
  methods: {},
  computed: {
    postits: function() {
      // console.log(this.$store.state.postits);
      return this.$store.state.postits;
    },
    postitsByArg: function() {
      let arg = this.arg;
      return this.$store.state.postits.filter(function(postit) {
        return postit.board === arg;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
.arg {
  box-sizing: border-box;
  width: 25vw;
  min-width: 300px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 10px 60px 0px rgba(36, 36, 40, 0.25);
  background-color: white;
  margin: 1em;
  max-height: 50vh;
  overflow-y: auto;
}
h3 {
  padding: 1rem 4rem;
}
.addmore {
  padding: 0 4rem;
  /* font-style: italic; */
  color: #0000008c;
}
.title {
  background: white;
  /* border-radius: 10px 10px 0px 0px; */
  /* border-bottom: 1px solid lightgray; */
  /* position: fixed; */
  width: 25vw;
  min-width: 300px;
  /* z-index: 1; */
}
.content {
  /* padding-top: 4rem; */
}
.scrolling-title {
  background: white;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid lightgray;
  position: fixed;
  width: 25vw;
  min-width: 300px;
  z-index: 1;
}
</style>
