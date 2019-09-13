<template>
  <div class="card">
    <div class="frame">
      <img :src="img" class="photo" />
    </div>
    <h3>{{ title }}</h3>
    <p class="short-desc line-clamp">{{ shortDesc }}</p>
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
        let event = data;
        this.title = event.name.text;
        this.date = event.start.local;
        this.shortDesc = event.description.text;
        this.img = event.logo.original.url;
      });
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
</style>