<template>
  <div class="contentSpace">
    <section id="schedule">
      <div class="illustration">
        <img
          src="../assets/illustration_04_schedule.png"
          alt="discover the design freaks club schedule"
        />
      </div>
      <div class="pitch">
        <div class="grid-timetable">
          <h1>A schedule that rocks!</h1>
          <div class="time-table">
            <div>20:30</div>
            <div>Open for arrivals & drinks*</div>
            <div>20:50</div>
            <div>Welcome & Introduction</div>
            <div>21:10</div>
            <div>Talk</div>
            <div>21:30</div>
            <div>Q&A</div>
            <div>21:40</div>
            <div>Open Mic Session</div>
            <div>22:00</div>
            <div>Raffle & close event</div>
            <div>22:05</div>
            <div>Pizza* & Networking</div>
            <div>
              <!-- useful to align disclaimer -->
            </div>
            <div
              class="disclaimer"
            >*drinks and food are subject to a small charge to cover the costs</div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Schedule"
};
</script>
<style>
#schedule {
  padding: 8rem 0 0 0;
}
.time-table {
  font-family: Larish Neue;
  display: grid;
  grid-template-columns: minmax(100px, 1fr) 3fr;
  grid-column-gap: 2rem;
}
.time-table div {
  margin: 1rem;
}

.time-table :nth-child(odd) {
  text-align: right;
}

.disclaimer {
  font-size: 0.75em;
}
</style>