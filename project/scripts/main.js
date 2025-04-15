
const testimonials = [
    {
      name: "Jordan M.",
      quote: "Working with The Pad Studio was a dream. My mix came out crisp, clean, and powerful!"
    },
    {
      name: "Lana S.",
      quote: "The Pad Studio helped bring my EP to life. Their attention to detail is unmatched."
    },
    {
      name: "Marcus T.",
      quote: "Professional, timely, and they truly care about your sound. Highly recommend."
    }
  ];
  
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
    const container = document.getElementById("testimonial-container");
    const t = testimonials[index];
    container.innerHTML = `
      <blockquote>
        <p>"${t.quote}"</p>
        <footer>— ${t.name}</footer>
      </blockquote>
    `;
  }
  
  function rotateTestimonials() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    showTestimonial(currentTestimonial);
    setInterval(rotateTestimonials, 5000); // rotate every 5 seconds
  });
  const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
