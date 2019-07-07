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

    <section id="whoWeAre">
      <div class="illustration">
        <img src="../assets/illustration_02_who we are.png" alt="Who we are" />
      </div>
      <div class="pitch">
        <h2>We are the design freaks.</h2>
        <p
          class="body-section"
        >We provide an opportunity for design students in Trento to exchange ideas, learn new skills and have fun while meeting new exciting creative minds.</p>
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
      </div>
    </section>

    <section id="joinUs">
      <div class="pitch">
        <h2>Do more of what you love, with us</h2>
        <p
          class="body-section"
        >Events include talks from guest speakers on topics around design, photography and professional arts, networking opportunities, dynamic workshop and a good old-fashioned chin-wag over a beer or two.</p>
        <button>Join meetup</button>
        <span>Go on, it's free!</span>
      </div>
      <div class="illustration">
        <img src="../assets/illustration_03_what we do.png" alt="What we do" />
      </div>
    </section>

    <section id="sponsor">
      <h2>Proudly sponsored by</h2>
    </section>

    <section id="social">
      <div class="illustration">
        <img src="../assets/illustration_05_feedback.png" alt="Share your ideas" />
      </div>
      <div class="pitch">
        <h2>Got an idea? Share it!</h2>
        <p class="body-section">
          Our community listen to new and old members alike.
          <br />If you have an idea, a suggestion or a feature request, please let us know! You can find us litterally everywhere.
        </p>
        <div class="social-link">
          <div>
            <img src="../assets/icon_05_facebook.png" alt="Facebook" />
            <p>Facebok</p>
          </div>
          <div>
            <img src="../assets/icon_05_instagram.png" alt="Instagram" />
            <p>Instagram</p>
          </div>
          <div>
            <img src="../assets/icon_05_telegram.png" alt="Telegram" />
            <p>Telegram</p>
          </div>
        </div>
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
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
#sponsor {
  height: 50vh;
  background-color: #334798;
  h2 {
    color: #f1cfda;
  }
}

#hero {
  padding: 8rem 0rem 2rem 0rem;
  .pitch {
    grid-column: 1 / 8;
  }
}
#whoWeAre {
  padding: 8rem 0rem 2rem 0rem;
  height: 50vh;
  .pitch {
    grid-column: 7 / 13;
    h2 {
      margin: 0 0 1.5rem 0;
    }
  }
  .illustration {
    grid-column: 1/8;
  }
}
#joinUs {
  padding: 8rem 0rem 2rem 0rem;
  place-items: center center;
  .pitch {
    grid-column: 1 / 6;
    h2 {
      margin: 0 0 1.5rem 0;
      width: 66%;
    }
  }
  .illustration {
    grid-column: 7 / 13;
  }
}
#sponsor {
  background-color: #334798;
  width: 100vw;
  margin-left: calc((100vw - 1200px) / -2);
}
#social {
  place-items: center center;
  .pitch {
    grid-column: 7/13;
    padding: 0 0 0 4rem;
  }
  .illustration {
    grid-column: 1/7;
  }
}
.grid-interests {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center start;
  text-align: center;
  padding: 3rem 0 0 0;
  font-size: 12px;
}
.social-link {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem 0 0 1rem;
}
</style>