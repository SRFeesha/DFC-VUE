<template>
  <div class="contentSpace">
    <h3>New event coming soon</h3>
    <p>{{ date }}</p>
    <h2>{{ title }}</h2>
    <p>{{ resume }}</p>
    <img src="" alt="Next event image">
    <button>Tickets</button>
  </div>
</template>

<script>

export default {
  name: "NextEvent",
  data() {
      return {
          date: 'June 19, 9PM',
          title: 'Leading design',
          resume: 'Leading Design is a conference for people leading design teams, overseeing design direction, or instilling a culture of design within their organisations.'
      };
  },
  props: {
    cont: String
  }
};
</script>

<style>
</style>