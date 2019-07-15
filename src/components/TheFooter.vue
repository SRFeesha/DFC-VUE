<template>
  <footer>
    <h3 class="title">Design Freaks Club ©</h3>
    <p>Design freaks club is a monthly meetup in the community of Trento. We talk about anything-design, photography, marketing. You can join our event here:</p>
    <div class="social">
      <a href>Facebook</a>
      <a href>Instagram</a>
      <a href>Telegram</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>


<style scoped>
footer {
  box-sizing: border-box;
  /* height: 40vh; */
  height: 100%;
  min-height: 200px;
  width: 90vw;
  margin: auto;
  padding: 3rem;
  border-radius: 2vh 2vh 0vh 0vh;
  background-color: #334798;
  color: #f1cfda;
  font-weight: 500;
}
h3.title {
  color: #f1cfda;
  font-size: 28px;
  margin-bottom: 3rem;
  font-weight: 500;
}
p {
  /* width: 30%; */
  margin-bottom: 4rem;
}
.social {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-items: start;
  line-height: 48px;
}
a {
  color: #f1cfda;
  text-decoration: none;
  /* margin-right: 2.5rem; */
  font-weight: 400;
}

@media screen and (min-width: 768px) {
  p {
    width: 30%;
  }
  .social {
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 1fr;
    justify-items: start;
  }
}
</style>

