function animateCounter(id, end) {
  let current = 0;
  const el = document.getElementById(id);
  const step = Math.ceil(end / 100);
  const interval = setInterval(() => {
    current += step;
    if (current >= end) {
      current = end;
      clearInterval(interval);
    }
    el.innerText = current;
  }, 20);
}

window.onload = () => {
  const counters = [
    { id: "studentsCount", end: 200 },
    { id: "projectsCount", end: 55 },
    { id: "internshipsCount", end: 100 },
  ];
  counters.forEach(({ id, end }) => animateCounter(id, end));
};

// Optional future filtering
function filterCourses(category) {
  const cards = document.querySelectorAll('.course-card');
  cards.forEach(card => {
    card.style.display = category === 'all' || card.dataset.category === category ? 'block' : 'none';
  });
}

// Pause rolling on hover
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  track.addEventListener("mouseenter", () => track.style.animationPlayState = "paused");
  track.addEventListener("mouseleave", () => track.style.animationPlayState = "running");
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flip-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    // Optional: Flip back when clicking outside
    document.addEventListener("click", e => {
      if (!card.contains(e.target)) {
        card.classList.remove("flipped");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  animatedItems.forEach(item => observer.observe(item));
});

// Optional: Add auto scroll to the right every 5 seconds
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");

  if (track) {
    let scrollAmount = 0;
    setInterval(() => {
      if (scrollAmount <= track.scrollWidth - track.clientWidth) {
        track.scrollTo({ left: scrollAmount, behavior: "smooth" });
        scrollAmount += 270;
      } else {
        scrollAmount = 0;
        track.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 5000); // Adjust time if needed
  }
});
