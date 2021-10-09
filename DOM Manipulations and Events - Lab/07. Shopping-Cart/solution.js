function solve() {
   const cart = {};
   const resultBox = document.querySelector('textarea');

   document
      .querySelector('.shopping-cart')
      .addEventListener('click', (ev) => {
         if (ev.target.classList.contains('add-product')) {
            const productDiv = ev.target.parentNode.parentNode;
            const name = productDiv.querySelector('.product-title').textContent;
            const price = Number(productDiv.querySelector('.product-line-price').textContent);

            if (!cart[name]) {
               cart[name] = 0;
            }
            cart[name] += price;

            resultBox.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
         } else if (ev.target.classList.contains('checkout')) {
            const products = Object.keys(cart).join(', ');
            const totalPrice = Object.values(cart).reduce((a, b) => a + b, 0);

            resultBox.textContent += `You bought ${products} for ${totalPrice.toFixed(2)}.`;

            Array.from(document.getElementsByTagName('button'))
               .forEach((btn) => btn.disabled = true);
         }
      })
}