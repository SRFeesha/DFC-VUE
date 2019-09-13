<template>
  <div class="card">
    <div class="nextEvent">
      <div class="infoEvent">
        <p>{{ date }}</p>
        <h2>{{ title }}</h2>
        <div class="line-clamp">{{ resume }}</div>
        <div class="cta">
          <button>Get ticket</button>
        </div>
      </div>
      <div class="photoEvent frame">
        <img class="photo" :src="img" alt="Next event image" />
      </div>
    </div>

    <div class="moreSpace"></div>
  </div>
</template>

<script>
export default {
  name: "NextEvent",
  data() {
    return {
      img: "",
      date: "November 19, 9PM",
      title: "Leading design",
      resume:
        "Leading Design is a conference for people leading design teams, overseeing design direction, or instilling a culture of design within their organisations.",
      nextEvent: "10306079066",
      token: "GGAQ2BUKIRGJMZMU55YZ"
    };
  },

  created() {
    let url =
      "https://www.eventbriteapi.com/v3/events/search/?token=" +
      this.token +
      "&organizer.id=" +
      this.nextEvent +
      "&expand=venue";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let event = data.events[0];

        this.title = event.name.text;
        this.date = event.start.local;
        this.resume = event.description.text;
        this.img = event.logo.original.url;
      });
  }
};
</script>

<style lang="scss" >
.card {
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(255, 255, 255, 0.1),
    0 5px 15px rgba(255, 255, 255, 0.05);
  h2 {
    margin: 0;
    padding-bottom: 0.5em;
  }
}

.line-clamp {
  -webkit-line-clamp: 10;
}
.photoEvent .photo {
  max-width: 100%;
  object-fit: contain;
}

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
  h3 {
    text-align: center;
  }
}
</style>