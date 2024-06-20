document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".word");

  sections.forEach((word, i) => {
    ScrollTrigger.create({
      trigger: word,
      start: "top center",
      end: "bottom center",
      onEnter: () => highlightWord(word),
      onLeave: () => resetWords(),
      onEnterBack: () => highlightWord(word),
      onLeaveBack: () => resetWords(),
    });
  });

  function highlightWord(word) {
    gsap.to(sections, { opacity: 0.3 });
    gsap.to(word, { opacity: 1 });
    showDetails(word.id);
  }

  function resetWords() {
    gsap.to(sections, { opacity: 0.3 });
    hideDetails();
  }

  function showDetails(wordId) {
    document.querySelectorAll(".detail").forEach((detail) => {
      if (detail.dataset.word === wordId) {
        gsap.to(detail, { opacity: 1 });
      } else {
        gsap.to(detail, { opacity: 0 });
      }
    });
  }

  function hideDetails() {
    document
      .querySelectorAll(".detail")
      .forEach((detail) => gsap.to(detail, { opacity: 0 }));
  }
});
