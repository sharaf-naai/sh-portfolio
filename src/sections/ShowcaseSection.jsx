import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full flex flex-col gap-10">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper ">
            <div className="image-wrapper hover:scale-105 transition-transform duration-300 ease-in-out">
              <a href="" target="_blank"><img src="/images/project4.png" className="gradient-border" alt="Ryde App Interface" /></a>
            </div>
            <div className="text-content">
              <h2>
                Modern Artisanal Baking Made Simple with a Fresh, Contemporary Touch — Lola’s Bakery.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, Three, GSAP, & TailwindCSS for smooth and good looking 3D animations.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://hanabaly.onrender.com" target="_blank"><img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                /></a>
              </div>
              <h2>Refreshing Flavors, Bold Identity — Discover SHARAF, the Modern Drink for Every Taste.</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://hanabaly.onrender.com" target="_blank"><img src="/images/project1.png" alt="YC Directory App" /></a>
              </div>
              <h2>Connecting You with Psychologists and Mental Coaches
                Through a Seamless Online Platform — Hanabaly.</h2>
            </div>
          </div>
        </div>


        <div className="showcaselayout">

          <div className="project-list-wrapper2 overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://hanabaly.onrender.com" target="_blank"><img
                  src="/images/project3.png"
                  alt="Library Management Platform"
                /></a>
              </div>
              <h2>Refreshing Flavors, Bold Identity — Discover SHARAF, the Modern Drink for Every Taste.</h2>
            </div>

            {/* <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] hover:scale-105 transition-transform duration-300 ease-in-out">
                <a href="https://hanabaly.onrender.com" target="_blank"><img src="/images/project1.png" alt="YC Directory App" /></a>
              </div>
              <h2>Connecting You with Psychologists and Mental Coaches
                Through a Seamless Online Platform — Hanabaly.</h2>
            </div> */}
          </div>

          <div ref={rydeRef} className="first-project-wrapper2">
            <div className="image-wrapper hover:scale-105 transition-transform duration-300 ease-in-out">
              <a href="" target="_blank"><img src="/images/project5.png" className="gradient-border1" alt="Ryde App Interface" /></a>
            </div>
            <div className="text-content">
              <h2>
                Modern Artisanal Baking Made Simple with a Fresh, Contemporary Touch — Lola’s Bakery.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, Three, GSAP, & TailwindCSS for smooth and good looking 3D animations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
