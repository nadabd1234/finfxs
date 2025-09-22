import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import VideoPinSection from "../components/VideoPinSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BenefitSection = () => {
  useGSAP(() => {
    const titles = [
      ".first-title",
      ".second-title",
      ".third-title",
      ".fourth-title",
    ];

    // Set initial states
    gsap.set(titles, {
      opacity: 0,
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    // Animate all titles with stagger
    revealTl.to(titles, {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
      stagger: 0.3,
    });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center text-center">
          <p className="text-lg md:text-xl font-semibold">
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>

          <div className="mt-20 col-center space-y-6">
            <ClipPathTitle
              title="RISK MANAGEMENT"
              color="#faeade"
              bg="#c88e64"
              className="first-title"
              borderColor="#222123"
            />
            <ClipPathTitle
              title="Dealing Support"
              color="#222123"
              bg="#faeade"
              className="second-title"
              borderColor="#222123"
            />
            <ClipPathTitle
              title="Platform Support"
              color="#faeade"
              bg="#7F3B2D"
              className="third-title"
              borderColor="#222123"
            />
            <ClipPathTitle
              title="CRM Support"
              color="#2E2D2F"
              bg="#FED775"
              className="fourth-title"
              borderColor="#222123"
            />
            <ClipPathTitle
              title="Custom support"
              color="#faeade"
              bg="#c88e64"
              className="first-title"
              borderColor="#222123"
            />

          </div>

          <div className="md:mt-0 mt-10">
            <p className="text-md md:text-lg">And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box mt-12">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
