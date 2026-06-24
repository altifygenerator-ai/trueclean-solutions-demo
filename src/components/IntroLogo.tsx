"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroLogo() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // FOR TESTING: always show it
    setShowIntro(true);

    // Later, replace the line above with this:
    // const alreadyPlayed = sessionStorage.getItem("trueclean-intro-played");
    // if (!alreadyPlayed) setShowIntro(true);
  }, []);

  function handleAnimationEnd() {
    sessionStorage.setItem("trueclean-intro-played", "true");
    setShowIntro(false);
  }

  if (!showIntro) return null;

  return (
    <div className="intro-logo-screen" aria-hidden="true">
      <div className="intro-water-glow" />

      <Image
        src="/images/trueclean-logo.jpg"
        alt=""
        width={420}
        height={420}
        priority
        className="intro-logo"
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
}