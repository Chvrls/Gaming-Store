let productsHTML = '';

products.forEach((product) => {
  productsHTML += 
  `
  <div class="product-container">
    <div class="image-container">
      <img class="product-img" src=${product.image} alt="">
    </div>

    <div class="product-name">
      ${product.name}
    </div>

    <div class="rating-container">
      <img class="rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png" alt="">
      <div class="rating-count">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      ₱ ${product.price}
    </div>

    <button class="add-to-cart">
      Add to Cart
    </button>

  </div>
  `;

});

document.querySelector('.product-grid').innerHTML = productsHTML;