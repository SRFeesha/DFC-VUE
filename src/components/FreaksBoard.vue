<template>
  <div class="FreaksBoard">
    <h1>Freaks Board</h1>
    <div class="board">
      <Board arg="Speakers"/>
      <Board arg="Improvements"/>
      <Board arg="Argomenti"/>
    </div>
  </div>
</template>

<script>
import Board from "./Board";

export default {
  name: "FreaksBoard",
  components: {
    Board
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
  font-weight: 900;
  font-size: 6rem;
  color: #ffffffcc;
  margin: 2rem 0;
}
.board {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* justify-content: space-around; */
  align-self: baseline;
  margin: 3rem;
}
</style>
