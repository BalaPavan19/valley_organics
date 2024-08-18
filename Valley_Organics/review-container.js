// Customer Reviews Section
const reviewsContainer = document.getElementById('customer-reviews');

// Sample customer reviews (replace with your actual data)
const reviews = [
  {
    name: "John Doe",
    review: "I love the quality of the products from Bhai Organics. They are fresh and flavorful! Highly recommend them.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "I've been a customer of Bhai Organics for years, and I've never been disappointed. Their service is excellent, and the prices are reasonable.",
    rating: 4,
  },
  {
    name: "Peter Jones",
    review: "I was hesitant to try organic products at first, but Bhai Organics won me over. Their products are top-notch, and I feel good knowing I'm supporting a sustainable brand.",
    rating: 5,
  },
];

// Function to generate HTML for a single review
function createReviewElement(review) {
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  reviewElement.innerHTML = `
    <h3>${review.name}</h3>
    <p>${review.review}</p>
    <div class="rating">
      ${generateRatingStars(review.rating)}
    </div>
  `;

  return reviewElement;
}

// Function to generate rating stars HTML
function generateRatingStars(rating) {
  let stars = '';
  for (let i = 0; i < rating; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  for (let i = rating; i < 5; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

// Display customer reviews
reviews.forEach(review => {
  const reviewElement = createReviewElement(review);
  reviewsContainer.appendChild(reviewElement);
});