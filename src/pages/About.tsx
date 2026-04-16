import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutServicesGrid from "../components/About/AboutServicesGrid";
import AboutTimeline from "../components/About/AboutTimeline";
import AboutValues from "../components/About/AboutValues";
import AboutTeam from "../components/About/AboutTeam";
import AboutTestimonials from "../components/About/AboutTestimonials";
import AboutCTA from "../components/About/AboutCTA";

const About: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container">
      <AboutHero />
      <AboutStory />
      <AboutServicesGrid />
      <AboutTimeline />
      <AboutValues />
      <AboutTeam />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  );
};

export default About;
