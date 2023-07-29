function changeQuantity(element, increment) {
    const quantityValue = element.querySelector('.product__quantity-value');
    let quantity = +quantityValue.textContent;
    quantity += increment;
    quantity = Math.max(1, quantity);
    quantityValue.textContent = quantity;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const productControls = document.querySelectorAll('.product__controls');
  
    productControls.forEach((controls) => {
      const incButton = controls.querySelector('.product__quantity-control_inc');
      const decButton = controls.querySelector('.product__quantity-control_dec');
      const addButton = controls.querySelector('.product__add');
      const product = controls.closest('.product');
  
      incButton.addEventListener('click', () => {
        changeQuantity(product, 1);
      });
  
      decButton.addEventListener('click', () => {
        changeQuantity(product, -1);
      });
  
      addButton.addEventListener('click', () => {
        const productId = product.dataset.id;
        const productImageSrc = product.querySelector('.product__image').src;
        const productQuantity = +product.querySelector('.product__quantity-value').textContent;
        const cartProducts = document.querySelectorAll('.cart__product');
  
        for (const cartProduct of cartProducts) {
          if (cartProduct.dataset.id === productId) {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            const currentQuantity = +cartProductCount.textContent;
            const newQuantity = currentQuantity + productQuantity;
            const updatedQuantity = Math.max(1, newQuantity);
            cartProductCount.textContent = updatedQuantity;
            
            return;
          }
        }
  
        if (productQuantity === 0) {
          return;
        }
  
        const cartProductHTML = `
          <div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${productImageSrc}">
            <div class="cart__product-count">${productQuantity}</div>
          </div>
        `;
  
        const cartProductsContainer = document.querySelector('.cart__products');
        cartProductsContainer.insertAdjacentHTML('beforeend', cartProductHTML);
      });
    });
  });
  