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
  