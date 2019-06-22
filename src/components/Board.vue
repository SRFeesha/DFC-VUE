<template>
  <div class="arg">
    <h3>{{ arg }}</h3>
    <ul>
      <CardMini v-for="postit in chooseArg" :key="chooseArg.id" :cont="postit.msg"></CardMini>
    </ul>
    <Input/>
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
  data() {
    return {
      postits: [
        {
          id: 1,
          board: "Improvements",
          msg: "Aria condizionata pls!"
        },
        {
          id: 2,
          board: "Speakers",
          msg: "Filippo Andolfatto"
        },
        {
          id: 3,
          board: "Speakers",
          msg: "Paolo Spazzini"
        },
        {
          id: 4,
          board: "Argomenti",
          msg: "Gradienti"
        },
        {
          id: 5,
          board: "Improvements",
          msg: "più birra! 🍻"
        },
        {
          id: 6,
          board: "Improvements",
          msg: "More design dollars"
        },
        {
          id: 7,
          board: "Improvements",
          msg: "finire dopo le 11"
        }
      ]
    };
  },
  methods: {},
  computed: {
    chooseArg: function() {
      if (this.arg === "Speakers") {
        return this.postits.filter(function(postit) {
          return postit.board === "Speakers";
        });
      } else if (this.arg === "Improvements") {
        return this.postits.filter(function(postit) {
          return postit.board === "Improvements";
        });
      } else if (this.arg === "Argomenti") {
        return this.postits.filter(function(postit) {
          return postit.board === "Argomenti";
        });
      }
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
}
h3 {
  padding: 1rem 4rem;
}
.addmore {
  padding: 0 4rem;
  /* font-style: italic; */
  color: #0000008c;
}
</style>
