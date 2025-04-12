const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");
  
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
  });
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const product = document.getElementById('product').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const date = document.getElementById('date').value;
    const features = [...document.querySelectorAll('input[name="features"]:checked')].map(cb => cb.value);
    const review = document.getElementById('review').value;
    const name = document.getElementById('name').value;
  
    if (!product || !rating || !date) {
      alert('Please complete all required fields.');
      return;
    }
  
    const reviewData = {
      product,
      rating: rating.value,
      date,
      features,
      review,
      name
    };
  
    console.log('Review Submitted:', reviewData);
    alert('Thank you for your review!');
  
    this.reset();
  });