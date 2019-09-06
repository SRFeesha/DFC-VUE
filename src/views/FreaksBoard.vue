<template>
  <div>
    <div class="FreaksBoard">
      <h1 class="freaky">Freaks Board</h1>
      <div class="board">
        <Board arg="Speakers" />
        <Board arg="Improvements" />
        <Board arg="Argomenti" />
      </div>
    </div>
  </div>
</template>

<script>
import Board from "../components/Board";

export default {
  name: "FreaksBoard",
  components: {
    Board
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.board {
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* justify-content: space-around; */
  padding: 3rem 1rem;
  margin-top: 1vh;
  align-self: baseline;
  white-space: nowrap;
  overflow-x: scroll;
}

h1.freaky {
  text-align: center;
  font-weight: 900;
  font-size: 6rem;
  color: #ffffffcc;
  margin: 2rem 0;
  /* font-size: 22vh; */
  max-width: 100%;
  position: absolute;
  top: 0vh;
  z-index: 1;
  -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}

Board {
  z-index: 2;
  width: 60vw;
  max-width: 400px;
}
</style>
