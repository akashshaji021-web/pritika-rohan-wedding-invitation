import { useState } from "react";
import "./App.css";
import ring from "./assets/ring.jpeg"

function App() {

  const [open, setOpen] = useState(false);

  if (!open) {
    return (

      <div
        className="landing"
        onClick={() => setOpen(true)}
      >

        <div className="seal">

          {/* FIXED A & P SPACING */}
          <h1 className="seal-text">
            A
            <span className="amp">&</span>
            <span className="p-letter">P</span>
          </h1>

        </div>

        <p className="tap">
          TAP TO OPEN
        </p>

      </div>
    );
  }

  return (

    <div className="invite second-page">

      {/* FLOATING DOTS */}
      <div className="floating-dot dot1"></div>
      <div className="floating-dot dot2"></div>
      <div className="floating-dot dot3"></div>
      <div className="floating-dot dot4"></div>
      <div className="floating-dot dot5"></div>

      {/* TOP LEFT CURVE */}
      <svg
        className="curve-left-top"
        viewBox="0 0 300 300"
      >
        <path d="M280 60 Q100 140 200 260" />
        <path d="M260 90 Q120 160 200 230" />
      </svg>

      {/* HEART */}
      <div className="line-heart">

        <svg
          viewBox="0 0 100 220"
          width="120"
          height="220"
        >

          <path
            d="
              M50 60 
              C50 35, 20 35, 20 70
              C20 100, 50 120, 50 120
              C50 120, 80 100, 80 70
              C80 35, 50 35, 50 60
            "
            className="heart-path"
          />

          <path
            d="M50 120 L50 200"
            className="line"
          />

        </svg>

      </div>

      {/* CONTENT */}
      <div className="content">

        <p className="invite-text">
          You are invited!
        </p>

       
<p className="desc">
  TO CELEBRATE THE WEDDING RECEPTION OF
</p>


        <h1 className="name">
          Ashik
        </h1>

        <p className="and">
          AND
        </p>

        <h1 className="name">
          Priyanka
        </h1>

        <p className="desc">
          YOUR PRESENCE WILL MAKE OUR CELEBRATION 
          <br />
          EVEN MORE SPECIAL
        </p>

      </div>

      {/* EVENT SECTION */}
      <section className="event-section">

        {/* BIG CARD */}
        <div className="event-card main-card">


          
          <p className="big-title">
            MARRIAGE
          </p>


          <p className="day">
            SUNDAY
          </p>

          

         <h1 className="main-date marriage-date">

            <span>May</span> 31, 2026
          </h1>

          <p className="time-text">
            AT 11 O'CLOCK IN THE MORNING
          </p>

          <div className="divider-line"></div>

          <p className="venue-main">
            MAHARAJA BANQUET ADHARWADI CHOWK KALYAN (W)
          </p>

          <p className="venue-sub">
            MAHARASHTRA
          </p>

        </div>

        {/* SMALL CARD */}
        <div className="event-card small-card">

          <p className="small-title">
            RECEPTION
          </p>

  
    <p className="dayto">SUNDAY</p>

<h1 className="main-date reception-date">
  <span>June</span> 7th, 2026
</h1>

          

           <p className="time-text">
            From 4:30 PM – 8:30 PM
          </p>


        <p className="reception-venue">
  SREEPADMAM AUDITORIUM WEST FORT 
</p>


         <p className="reception-place">
  TRIVANDRUM
</p>

        </div>

      </section>

      {/* FINAL PHOTO PAGE */}
      <section className="photo-page">

    <img
  src={ring}
  alt="Wedding Rings"
  className="ring-photo"
/>

        <h2 className="photo-title">
          A New Chapter Begins
        </h2>

        <p className="photo-subtitle">
          Join Our Celebration
        </p>

        {/* RIGHT CURVE DESIGN */}
        <svg
          className="curve-right-bottom"
          viewBox="0 0 300 300"
        >
          <path d="M20 60 Q200 140 100 260" />
          <path d="M40 90 Q180 160 100 230" />
        </svg>

      </section>

    </div>
  );
}

export default App;