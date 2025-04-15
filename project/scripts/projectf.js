document.addEventListener("DOMContentLoaded", () => {
    
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
  
    const copyrightElement = document.getElementById("copyright-year");
    if (copyrightElement) copyrightElement.textContent = new Date().getFullYear();
  
    const lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) lastModifiedElement.textContent = document.lastModified;
  
    
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  
    const testimonials = [
      {
        name: "Jordan M.",
        quote: "Working with The Pad Studio was a dream. My mix came out crisp, clean, and powerful!"
      },
      {
        name: "Lana S.",
        quote: "The Pad Studio helped bring my track to life. Their attention to detail is unmatched."
      },
      {
        name: "Marcus T.",
        quote: "Professional, timely, and they truly care about your sound. Highly recommend."
      }
    ];
  
    let currentTestimonial = 0;
  
    function showTestimonial(index) {
      const container = document.getElementById("testimonial-container");
      if (container && testimonials[index]) {
        const t = testimonials[index];
        container.innerHTML = `
          <blockquote>
            <p>"${t.quote}"</p>
            <footer>— ${t.name}</footer>
          </blockquote>
        `;
      }
    }
  
    function rotateTestimonials() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }
  
    showTestimonial(currentTestimonial);
    setInterval(rotateTestimonials, 5000); // rotate every 5 sec
  
  
    const reviewMsg = document.getElementById("review-count-message");
    if (reviewMsg) {
      const reviewCount = parseInt(localStorage.getItem("reviewCount") || "0");
      const newCount = reviewCount + 1;
      localStorage.setItem("reviewCount", newCount);
      reviewMsg.textContent = `You have submitted ${newCount} review${newCount > 1 ? 's' : ''}.`;
    }
  
  
    const form = document.getElementById('bookingForm');
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const booking = {
          name: form.fullname.value,
          email: form.email.value,
          service: form.service.value,
          date: form.date.value,
          notes: form.notes.value
        };
        localStorage.setItem('booking', JSON.stringify(booking));
        alert('Thanks for booking with us! We will contact you shortly.');
        form.reset();
      });
    }
  });
  