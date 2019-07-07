
<template>
  <div>
    <div v-on-clickaway="away">
      <!-- l'autofocus va solo alla prima volta  -->
      <p class="addmore" @click="startAdding" v-show="!adding">+ Add more</p>
      <input
        id="inputAddMore"
        v-model="content"
        v-show="adding"
        @keydown.enter="addCard"
        @keyup.esc="adding=false"
        type="text"
        placeholder="+ Add more"
        class="form-control"
      />
    </div>
  </div>
</template>

<script>
// vue-click-away add-on per gestire quando cliccki fuori dall'input
// https://github.com/simplesmiler/vue-clickaway
import { mixin as clickaway } from "vue-clickaway";
import { db } from "@/main";

export default {
  name: "Input",
  mixins: [clickaway],
  props: {
    arg: String
  },
  data() {
    return {
      adding: false,
      content: this.value,
      errors: ""
    };
  },
  methods: {
    addCard() {
      let newPostIt = {
        board: this.arg,
        msg: this.content
      };
      this.$store.commit("addPostIt", newPostIt);
      this.content = "";
      this.adding = false;
    },

    away: function() {
      if (this.adding) {
        console.log("clicked away");
        this.adding = false;
      }
    },
    startAdding: function() {
      this.adding = true;
      var selector = "." + this.arg + " #inputAddMore";
      let x = document.querySelectorAll(selector);
      // da fixare
      // metto il timeout altrimenti l'input non è ancora renderizzato e non lo vede
      setTimeout(function() {
        x[0].focus();
      }, 20);
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
