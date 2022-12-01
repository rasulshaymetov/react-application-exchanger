import {useState, useEffect } from "react";

export function useOnScreen() {
  const [currentSection, setCurrentSection] = useState<string>("");

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("div");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          setCurrentSection(section.getAttribute("id") ?? "");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    // Remove the listener as soon as the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return currentSection;
}
