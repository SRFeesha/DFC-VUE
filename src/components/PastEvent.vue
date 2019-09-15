<template>
  <div>
    <div class="card" @click="showPastEvent">
      <router-link :to="{ name: 'pastEventDetail', params: {eventName: event} }">
        <div class="frame">
          <img :src="img" class="photo" />
        </div>
        <h3>{{ title }}</h3>
        <!-- <p class="short-desc line-clamp">{{ shortDesc }}</p> -->
        <div class="short-desc line-clamp" v-html="shortDesc"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PastEvent",
  data() {
    return {
      title: "event -1",
      shortDesc:
        "this event was fire!!! you should've been here man, where you at?!?",
      img: "",
      desc: "",
      token: "GGAQ2BUKIRGJMZMU55YZ"
    };
  },
  props: {
    event: String
  },
  created() {
    let url =
      "https://www.eventbriteapi.com/v3/events/" +
      this.event +
      "/?token=" +
      this.token;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.title = data.name.text;
        this.date = data.start.local;
        this.shortDesc = data.summary;
        this.desc = data.description.html;
        this.img = data.logo.original.url;
      });
  },
  methods: {
    showPastEvent() {
      this.$store.commit("showPastEvent", {
        img: this.img,
        title: this.title,
        shortDesc: this.shortDesc,
        desc: this.desc
      });
    }
  }
};
</script>



<style lang="scss" scoped>
.card {
  /* display: inline-block; */
  margin: 4vh 2vh;
  text-align: left;
  padding: 4rem;
}

h3 {
  margin: 1em 0 0.5em 0;
  text-align: left;
}

.short-desc {
  -webkit-line-clamp: 4;
}

.open {
  position: absolute;
  top: 10px;
}
// .open::after {
//   width: 100vw;
//   height: 100vh;
//   background-color: black;
// }
</style>