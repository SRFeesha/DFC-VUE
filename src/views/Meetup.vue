<template>
  <div class="contentSpace">
    <h1>Meetup</h1>

    <h3>New event coming soon</h3>
    <NextEvent />

    <h2>Past Events</h2>
    <div class="grid">
      <PastEvent v-for="event in events" v-bind:key="event.id" :event="event" />
    </div>

    <Footer />
  </div>
</template>

<script>
import NextEvent from "../components/NextEvent";
import PastEvent from "../components/PastEvent";

export default {
  name: "Meetup",
  components: {
    NextEvent,
    PastEvent
  },
  data() {
    return {
      events: ["65788399875", "62347399751", "53503912643"]
    };
  }
};
</script>

<style>
h2 {
  margin-top: 3em;
}

.grid {
  display: grid;
  grid-template-columns: 100%;
}

.line-clamp {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  min-height: min-content;
  max-width: 600px;
}

.frame {
  overflow: hidden;
  position: relative;
  margin: 1rem 0;
  border-radius: 10px;
  width: 100%;
  height: 200px;
  /* background-size: fill; */
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.01), 0 5px 15px rgba(0, 0, 0, 0.05);
}

.frame .photo {
  position: absolute;
  top: 0px;
  width: 200%;
  left: -50%;
}

@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: 50% 50%;
  }
  .frame .photo {
    position: absolute;
    top: -30%;
    /* background-size: contain; */
    width: 100%;
    left: 0;
  }
}
</style>