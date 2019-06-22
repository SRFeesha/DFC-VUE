<template>
  <li v-bind:class="{ selected: selected }" @click="selected = !selected">{{ cont }}</li>
</template>

<script>
export default {
  name: "CardMini",
  props: {
    cont: String
  },
  data() {
    return {
      selected: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
li {
  box-shadow: 0px 5px 30px 0px rgba(36, 36, 40, 0.1);
  padding: 1rem 3rem;
  margin: 1rem;
  border-radius: 10px;
  box-sizing: border-box;
  transition: 0.3s ease-in;
}
li:hover {
  box-shadow: 0px 5px 60px 0px rgba(36, 36, 100, 0.2);
  transform: scale(1.03);
  transition: 0.1s ease-out;
}
.selected {
  box-shadow: 0px 5px 60px 0px rgba(36, 36, 100, 0.2);
  transform: scale(1.03);
  transition: 0.1s ease-out;
  /* border: solid 1px olivedrab; */
}
</style>
