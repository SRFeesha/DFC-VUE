<template>
  <!-- <div class="card"> -->
  <div class="card nextEvent">
    <div v-if="loading">
      <div class="spinner"></div>
    </div>

    <div class="infoEvent" v-else="!loading">
      <p>{{ date }}</p>
      <h2>{{ title }}</h2>
      <div class="line-clamp">{{ resume }}</div>
      <div class="cta">
        <button>
          <a :href="link" target="_blank">Get ticket</a>
        </button>
      </div>
    </div>

    <div class="photoEvent frame" :style="{ backgroundImage: `url(${img})` }">
      <!-- <img class="photo" :src="img" alt="Next event image" /> -->
      <!-- <div :style="{ backgroundImage: `url(${img})` }"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NextEvent",
  data() {
    return {
      loading: true,
      link: "",
      img: "",
      date: "November 19, 9PM",
      title: "",
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
        let event = data.events[0];
        console.log(data);
        this.link = event.url;
        this.title = event.name.text;
        this.date = event.start.local;
        this.resume = event.description.text;
        this.img = event.logo.original.url;
        this.loading = false;
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
.spinner {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #334798;
  border-radius: 100%;
  -webkit-animation: sk-scaleout 500ms infinite ease-in-out;
  animation: sk-scaleout 500ms infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@media screen and (min-width: 768px) {
  .nextEvent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
    padding: 3rem 3rem 6rem 3rem;
    margin: 3rem;
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