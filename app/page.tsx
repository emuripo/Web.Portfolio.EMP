"use client";

import dynamic from "next/dynamic";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Stats from "../components/Stats";
import { FEATURE_FLAGS } from "../lib/constants";

const VideoIntro = dynamic(() => import("../components/VideoIntro"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="content">
        {FEATURE_FLAGS.showSections.hero ? <Hero /> : null}
        {FEATURE_FLAGS.showSections.stats ? <Stats /> : null}
        {FEATURE_FLAGS.showSections.about ? <About /> : null}
        {FEATURE_FLAGS.showSections.video ? <VideoIntro /> : null}
        {FEATURE_FLAGS.showSections.experience ? <Experience /> : null}
        {FEATURE_FLAGS.showSections.projects ? <Projects /> : null}
        {FEATURE_FLAGS.showSections.skills ? <Skills /> : null}
        {FEATURE_FLAGS.showSections.contact ? <Contact /> : null}
        {FEATURE_FLAGS.showSections.resume ? <Resume /> : null}
      </main>
      {FEATURE_FLAGS.showSections.footer ? <Footer /> : null}
    </div>
  );
}
