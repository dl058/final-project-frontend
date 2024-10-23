import { useEffect, useState } from "react";
import "./LandingPage.css";
import axios from "axios";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <section className="landingPg">
        <p className="introTag"> No Plans... No Problem! </p>
        unPlan'd Adventure is your go-to for spontaneous, exciting experiences
        tailored just for you. Simply enter your location or event type and let
        unPlan'd Adventure suggest unplanned activities that fit your budget and
        location. Whether you're looking to break free from routine or discover
        something new, unPlan'd Adventure makes it easy to explore without the
        hassle of planning.
        <p className="tagLine">
          Because the best moments are the ones you don't plan!
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
