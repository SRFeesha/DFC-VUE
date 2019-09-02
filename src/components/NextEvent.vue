<template>
<div>
  <h3>New event coming soon</h3>
  <div class="nextEvent">
    <div class="infoEvent">
      <p>{{ date }}</p>
      <h2>{{ title }}</h2>
      <p>{{ resume }}</p>
      <div class="cta">
        <button>Get ticket</button>
      </div>
    </div>
    <div class="photoEvent">
      <img  class="photo" src="https://www.raconteur.net/wp-content/uploads/2016/12/Design-thinking-1280x720.jpg" alt="Next event image">
    </div>
  </div>
  <div class="moreSpace">
  </div>
</div>
</template>

<script>

export default {
  name: "NextEvent",
  data() {
      return {
          date: 'November 19, 9PM',
          title: 'Leading design',
          resume: 'Leading Design is a conference for people leading design teams, overseeing design direction, or instilling a culture of design within their organisations.'
      };
  },
  props: {
    cont: String
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .nextEvent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
    padding: 3rem 0rem 6rem 0rem;
    .infoEvent {
      grid-column: 2 / 3;
      padding: 0rem 2rem 0rem 2rem;

    }
    .photoEvent {
      grid-column: 1 / 2;
      grid-row: 1;
      .photo {
        max-width: 100%;
      }
    }
  }
  h3{
    text-align:center;
  }
}
</style>