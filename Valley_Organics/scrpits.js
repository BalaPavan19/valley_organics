
        document.addEventListener('DOMContentLoaded', () => {
            const cartItems = {};
            const cartItemsContainer = document.getElementById('cart-items');
            const cartTotalElement = document.getElementById('cart-total');
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            const logo = document.getElementById('logo');
            const categories = document.querySelectorAll('.category');
            const citySelection = document.getElementById('city-selection');
            const reviewsContainer = document.getElementById('customer-reviews');

            addToCartButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const productName = button.dataset.productName;
                    const productPrice = parseFloat(button.dataset.productPrice);

                    if (cartItems[productName]) {
                        cartItems[productName].quantity += 1;
                    } else {
                        cartItems[productName] = { price: productPrice, quantity: 1 };
                    }

                    updateCart();
                });
            });

            function updateCart() {
                cartItemsContainer.innerHTML = '';
                let total = 0;

                for (const itemName in cartItems) {
                    if (cartItems.hasOwnProperty(itemName)) {
                        const item = cartItems[itemName];
                        total += item.price * item.quantity;

                        const cartItem = document.createElement('li');
                        cartItem.innerHTML = `
                            <span>${itemName} x ${item.quantity}</span>
                            <button onclick="removeItem('${itemName}')">Remove</button>
                        `;
                        cartItemsContainer.appendChild(cartItem);
                    }
                }

                cartTotalElement.textContent = `Total: ₹${total.toFixed(2)}`;
            }

            window.removeItem = (itemName) => {
                if (cartItems[itemName].quantity > 1) {
                    cartItems[itemName].quantity -= 1;
                } else {
                    delete cartItems[itemName];
                }
                updateCart();
            };

            // Highlight Logo function
            function highlightLogo(category) {
                categories.forEach(cat => {
                    cat.classList.remove('active'); // Remove active class from all categories
                });
                category.classList.add('active'); // Add active class to the clicked category

                logo.classList.add('active'); // Highlight logo
                setTimeout(() => {
                    logo.classList.remove('active'); // Remove highlighting after a short delay
                }, 300); 
            }

            // Customer Reviews Section
            // Sample customer reviews (replace with your actual data)
            const reviews = [
                {
                    name: "Bala",
                    review: "I love the quality of the products from Bhai Organics. They are fresh and flavorful! Highly recommend them.",
                    rating: 5,
                },
                {
                    name: "Sai Varma",
                    review: "I've been a customer of Bhai Organics for years, and I've never been disappointed. Their service is excellent, and the prices are reasonable.",
                    rating: 4,
                },
                {
                    name: "Revi Sena",
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


        });