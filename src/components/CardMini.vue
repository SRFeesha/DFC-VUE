<template>
  <div class="card-mini">
    <li v-for="postit in speakers" :key="speakers.id">{{ postit.msg }}</li>
  </div>
</template>

<script>
export default {
  name: "CardMini",
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
  computed: {
    speakers: function() {
      return this.postits.filter(function(postit) {
        return postit.board === "Speakers";
      });
    },
    improvements: function() {
      return this.postits.filter(function(postit) {
        return postit.board === "Improvements";
      });
    },
    topics: function() {
      return this.postits.filter(function(postit) {
        return postit.board === "Argomenti";
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.board {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* justify-content: space-around; */
  align-self: baseline;
  margin: 3rem;
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
p {
  padding: 0 4rem;
  /* font-style: italic; */
  color: #0000008c;
}
.arg > ul > li {
  box-shadow: 0px 5px 30px 0px rgba(36, 36, 40, 0.1);
  padding: 1rem 3rem;
  margin: 1rem;
  border-radius: 10px;
  box-sizing: border-box;
  transition: 0.3s ease-in;
}
.arg > ul > li:hover {
  box-shadow: 0px 5px 60px 0px rgba(36, 36, 100, 0.2);
  transform: scale(1.03);
  transition: 0.1s ease-out;
}
</style>
