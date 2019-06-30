<template>
  <div class="contentSpace">
    <section id="hero">
      <div class="pitch">
        <h1>A creative meetup</h1>
        <h3>We are calling out for Visual, UI/UX, and Interaction Design enthusiasts in the Trento community</h3>
        <button>Join meetup</button>
        <span>Go on, it's free!</span>
      </div>
      <div class="illustration">
        <img src="../assets/illustration_01_welcome.png" alt="Welcome" />
      </div>
    </section>

    <section id="whoWheAre">
      <!-- <img src="../assets/illustration_02_who we are.png" alt="Who we are"> -->
      <div>
        <h1>We are the design freaks</h1>
        <p>We provide an opportunity for design students in Trento to exchange ideas, learn new skills and have fun while meeting new exciting creative minds.</p>
      </div>
      <div class="grid-interests">
        <div class="interest">
          <img src="../assets/icons_02_uiux.png" alt="UI and UX" />
          <p class="caption">UI/UX</p>
        </div>
        <div class="interest">
          <img src="../assets/icons_02_visualDesign.png" alt="Visual Design" />
          <p class="caption">visual design</p>
        </div>
        <div class="interest">
          <img src="../assets/icons_02_webDesign.png" alt="Web Design" />
          <p class="caption">web design</p>
        </div>
        <div class="interest">
          <img src="../assets/icons_02_illustration.png" alt="Illustration" />
          <p class="caption">illustration</p>
        </div>
        <div class="interest">
          <img src="../assets/icons_02_photogrphy.png" alt="Photography" />
          <p class="caption">photography</p>
        </div>
        <div class="interest">
          <img src="../assets/icons_02_marketing.png" alt="Marketing" />
          <p class="caption">marketing</p>
        </div>
      </div>
    </section>

    <section id="joinUs">
      <div>
        <h1>Do more of what you love, with us</h1>
        <p>Events include talks from guest speakers on topics around design, photography and professional arts, networking opportunities, dynamic workshop and a good old-fashioned chin-wag over a beer or two.</p>
        <button>Join meetup</button>
      </div>
      <img src="../assets/illustration_03_what we do.png" alt="What we do" />
    </section>

    <section id="sponsor">
      <h2>Proudly sponsored by</h2>
    </section>

    <section id="social">
      <img src="../assets/illustration_05_feedback.png" alt="Share your ideas" />
      <div>
        <h1>Got an idea? Share it!</h1>
        <p>Our community listen to new and old members alike. If you have an idea, a suggestion or a feature request, please let us know! You can find us litterally everywhere.</p>
        <img src="../assets/icon_05_facebook.png" alt="Facebook" />
        <img src="../assets/icon_05_instagram.png" alt="Instagram" />
        <img src="../assets/icon_05_telegram.png" alt="Telegram" />
      </div>
    </section>

    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <div>
        <h4>What's the meetup about?</h4>
        <p></p>
      </div>
      <div>
        <h4>Is the event open to designers only?</h4>
        <p></p>
      </div>
      <div>
        <h4>Where do I book?</h4>
        <p></p>
      </div>
      <div>
        <h4>Is the meetup completely free?</h4>
        <p></p>
      </div>
      <div>
        <h4>Who partecipates at these meetups?</h4>
        <p></p>
      </div>
      <div>
        <h4>Can I speak at the next event?</h4>
        <p></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home" //this is the name of the component
};
</script>

<style lang="scss">
.sponsor {
  height: 50vh;
  background-color: #334798;
}
section {
  height: 100vh;
  width: 100%;
  &#hero {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100%;
    padding: 8rem 0rem 2rem 0rem;
    .pitch {
      grid-column: 1 / 8;
      grid-row: 1;
      h1 {
        margin: 1rem 0rem;
      }
      h3 {
        width: 66%;
        margin: 1rem 0rem;
      }
      span {
        margin: 0rem 1rem;
        font-size: 12px;
        color: #334798;
      }
    }
    .illustration {
      grid-column: 6 / 12;
      grid-row: 1;
      object-fit: cover;
    }
  }
}
</style>