
<template>
  <div>
    <!-- l'autofocus va solo alla prima volta  -->
    <p class="addmore" @click="adding = true" v-show="!adding">+ Add more</p>
    <input
      v-model="content"
      v-show="adding"
      @keydown.enter="addCard"
      @keyup.esc="adding=false"
      type="text"
      placeholder="+ Add more"
      class="form-control"
      autofocus
    >
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: String
  },
  data() {
    return {
      adding: false,
      content: this.value
    };
  },
  methods: {
    addCard(e) {
      this.$emit("addcard", this.content);
      // console.log(this.content);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.addmore {
  padding: 0 4rem;
  color: #0000008c;
}
.form-control {
  color: #000000ff;
  margin: 0rem 1rem 1rem;
  border: none;
  padding: 1rem 3rem;
  width: calc(100% - 8rem);
  background-color: lightblue;
  border-radius: 10px;
  font-size: 1rem;
}
</style>
