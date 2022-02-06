 
    let previewContainer = document.querySelector('.product-preview');
    let previewBox = previewContainer.querySelectorAll('.preview');

        document.querySelectorAll('.buttons .view').forEach(button => {
        button.onclick = () => {
            previewContainer.style.display = 'flex';
            let name = button.getAttribute('data-name');
            previewBox.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if(name === target) {
                    preview.classList.add('active');
            
                }
            });
        };
    });


    previewBox.forEach(close => {
        close.querySelector('.fa-times').onclick = (event) => {
            close.classList.remove('active');
            previewContainer.style.display = 'none';
        };
    });

       
    
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
         let button = removeCartItemButtons[i]
         button.addEventListener('click', removeCartItem)  
     }
    

    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    

    let buyNowButton = document.getElementsByClassName('btn-buy')
    for (let i = 0; i < buyNowButton.length; i++) {
        let button = buyNowButton[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


function purchaseClicked() {
    alert('Thank you for your purchase')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal();
}


function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value < 0) {
        input.value = 0
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let productDetails = button.parentElement.parentElement
    let title = productDetails.getElementsByClassName('product-title-view')[0].innerText
    let price = productDetails.getElementsByClassName('item-price')[0].innerText
    let imageSrc = productDetails.getElementsByClassName('srcImage')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let i =0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    let cartRowContents = `
    <div class="cart-item cart-column">
    <span class="cart-item-title cart-title">${title}</span>
        <img class="srcImage cart-image" src="${imageSrc}"
        width="100" height="100"> 
        
    </div>
    
    
    <div class="cart-quantity">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger"
        type="button">REMOVE</button>
        <span class="cart-price">${price}</span>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('€', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total;
}