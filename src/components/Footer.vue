<template>
  <footer>
    <h3 class="title">Design Freaks Club ©</h3>
    <p>Design freaks club is a monthly meetup in the community of Trento. We talk about anything-design, photography, marketing. You can join our event here:</p>
    <a href>Facebook</a>

    <a href>Instagram</a>
    <a href>Telegram</a>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>


<style scoped>
footer {
  background-color: #334798;
  color: #f1cfda;
  height: 40vh;
  padding: 5rem;
  width: 80vw;
  margin-left: calc((100vw - 1200px) / -2);
  font-weight: 500;
}
h3.title {
  color: #f1cfda;
  font-size: 28px;
  margin-bottom: 3rem;
  font-weight: 500;
}
p {
  width: 30%;
  margin-bottom: 4rem;
}
a {
  color: #f1cfda;
  text-decoration: none;
  margin-right: 2.5rem;
  font-weight: 400;
}
</style>

