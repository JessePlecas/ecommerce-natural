const products = [
    {
        "id": "product-1",
        "name": "Eco Cotton QTips",
        "image": "images/product-1.jpg",
        "price": "€6.99",
        "short_description": "Our cotton buds are made from bamboo and soft cotton, thus 100% biodegradable",
        "bullet_description": [
            "After usage, you can dispose of the cotton swabs by simply throwing them into your organic waste, compost or no-matter-where.", 
            "Come in box made of recycled cardboard.", 
            "100 cotton swabs per box.", 
            "Made with 100% cotton and bamboo"
        ]
    },
    {
        "id": "product-2",
        "name": "Bamboo Toothbrush",
        "image": "images/product-2.jpg",
        "price": "€7.99",
        "short_description": "The medium soft bristles ensure thorough cleansing of your teeth while also protecting your gums.",
        "bullet_description": [
            "The handle is made of fast-growing Moso bamboo which is biodegradable.", 
            "Artificial irrigation is not used in our bamboo cultivation, nor are pesticides or other chemicals.", 
            "The biobased bristles are obtained from castor oil. The oil derived from the plant ricinus communis is processed into our biobased bristles and is free of BPA and petroleum."
        ]
    },
    {
        "id": "product-3",
        "name": "Natural Soap",
        "image": "images/product-3.jpg",
        "price": "€8.99",
        "short_description": "Handmade soap with skin-loving oils, kinds of butter, herbs, clays, spices and pure essential oils.",
        "bullet_description": [
            "Each bar natural soap is made with only natural soap ingredients that were specifically chosen to provide you with the all-natural shower experience.", 
            "Essential oils add fragrance to our natural soap bars as well as contribute their healthful qualities through their various abilities to tone, balance, relax, cleanse and invigorate.", 
            "Each bar is also made with only natural ingredients when it comes to colouring our soaps."
        ]
    },
    {
        "id": "product-4",
        "name": "Bamboo Utensils",
        "image": "images/product-4.jpg",
        "price": "€21.99",
        "short_description": "Handmade bamboo utensils for your everyday use.",
        "bullet_description": [
            "Portable healthy and reusable bamboo cutlery set, the pouch keeps utensils sanitary, prefect for camping, travel, school, office or home.", 
            "Ergonomically designed handle for a secure grip, provides good balance and anti-slip.", 
            "The pouch is designed well, each utensil has a compartment so that they aren't bumping into each other, which can build up unnecessary wear."
        ]
    },
    {
        "id": "product-5",
        "name": "Skincare Set",
        "image": "images/product-5.jpg",
        "price": "€49.99",
        "short_description": "Organic face wash, toner and oil made with 100% natural ingredients.",
        "bullet_description": [
            "Organic flowers combined with essential oils and handmade soap ensure a clean and gentle cleanse.", 
            "Our toner refreshes dull skin and is again 100% natural on you and our planet.", 
            "Floral oil added to your skin as the final step to your skincare routine for a softer and dewey face."
        ]
    },
    {
        "id": "product-6",
        "name": "Natural Toothpaste",
        "image": "images/product-6.jpg",
        "price": "€14.99",
        "short_description": "Our all-natural Toothpaste keep your teeth healthy, strong, and minty fresh.",
        "bullet_description": [
            "We only use natural ingredients. No sulfates, parabens, allergens, dyes or any other chemical.", 
            "The storage containers for our Toothpaste are practical and sustainable at the same time. They last forever but can also easily be recycled.", 
            "All-natural means Toothpaste without bad chemicals or micro-plastics, because those unnecessary and unsustainable ingredients hurt the planet."
        ]
    },
    {
        "id": "product-7",
        "name": "Natural Body Butter",
        "image": "images/product-7.jpg",
        "price": "€27.99",
        "short_description": "Goat milk and lychee body butter dedicated to sensitive and dry skin.",
        "bullet_description": [
            "Shea butter protects and soothes the skin, nourishes it and moisturizes, acts as a natural UV filter.", 
            "Beeswax seals epidermis against the waist of water and the pearl extract accelerates healing, protects and smoothes by decreasing ageing process.", 
            "This wonderful cosmetic contains also lychee fruit extract rich in vitamins, especially in vitamin C. Goat's milk proteins are the royal dose of youth recovery."
        ]
    },
    {
        "id": "product-8",
        "name": "Bamboo Nailbrush",
        "image": "images/product-8.jpg",
        "price": "€9.99",
        "short_description": "Bamboo Nail brush with Mane & Cactus Bristle.",
        "bullet_description": [
            "Made with bamboo for the handle part with mane & cactus bristles for properly cleaning your nails", 
            "The jute string loop allows you to hang the nail brush when not in use.", 
            "Simple yet elegant look from high quality materials."
        ]
    },
    {
        "id": "product-9",
        "name": "Shampoo Bar",
        "image": "images/product-9.jpg",
        "price": "€9.99",
        "short_description": "Eucaliptus and Nettle shampoo bar.",
        "bullet_description": [
            "Green clay and nettle actually help to strengthen and promote hair growth", 
            "Gently fragranced with eucaliptus, tea tree and lemon verbena essential oils to refresh your hair and scalp and to soothe your senses", 
            "It is suitable for greasy hair acting against dandruff. It has an antibacterial effect as well thanks to the essential oils."
        ]
    },
    {
        "id": "product-10",
        "name": "Bath Salts",
        "image": "images/product-10.jpg",
        "price": "€12.99",
        "short_description": "Natural bath salts with essential oils and petals.",
        "bullet_description": [
            "A bathing ritual before bed can help encourage a deep, restorative night’s sleep.", 
            "A 100% natural blend of mineral-rich Epsom and Dead Sea Salts, infused with Jasmine and Lavender essentials oils to calm and soothe the senses, and Valerian to promote deep, peaceful relaxation.", 
            "Drift into a peaceful nights sleep. Epsom and Dead Sea Mineral Salts. With Lavender, Jasmine & Valerian."
        ]
    },
    {
        "id": "product-6",
        "name": "Natural Toothpaste",
        "image": "images/product-6.jpg",
        "price": "€14.99",
        "short_description": "Our all-natural Toothpaste keep your teeth healthy, strong, and minty fresh.",
        "bullet_description": [
            "We only use natural ingredients. No sulfates, parabens, allergens, dyes or any other chemical.", 
            "The storage containers for our Toothpaste are practical and sustainable at the same time. They last forever but can also easily be recycled.", 
            "All-natural means Toothpaste without bad chemicals or micro-plastics, because those unnecessary and unsustainable ingredients hurt the planet."
        ]
    },
    {
        "id": "product-7",
        "name": "Natural Body Butter",
        "image": "images/product-7.jpg",
        "price": "€27.99",
        "short_description": "Goat milk and lychee body butter dedicated to sensitive and dry skin.",
        "bullet_description": [
            "Shea butter protects and soothes the skin, nourishes it and moisturizes, acts as a natural UV filter.", 
            "Beeswax seals epidermis against the waist of water and the pearl extract accelerates healing, protects and smoothes by decreasing ageing process.", 
            "This wonderful cosmetic contains also lychee fruit extract rich in vitamins, especially in vitamin C. Goat's milk proteins are the royal dose of youth recovery."
        ]
    },
] 




class ProductTile extends React.Component {
    render() {
        return (
            <div className="product">
                  <div className="product-content">
                    <div className="product-image" id="product-image">
                      <img src={this.props.product.image} alt="product-image"/>
                    </div>
                    <div className="buttons">
                      <button type ="button" className="btn-cart">Add to cart<span>
                        <i className="fas fa-plus"></i></span>
                      </button>
                      <button type ="button" className="btn-buy">Buy now<span>
                        <i className="fas fa-shopping-cart"></i></span>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-info-top">
                      <h2 className="sm-title">{this.props.product.name}</h2>
                      <div className="rating">
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "far fa-star"></i></span>
                      </div>
                    </div>
                    <a href="#" className="product-name">{this.props.product.name}</a>
                    <p className="product-price">{this.props.product.price}</p>
                    <p className="product-price">€6.79</p>
                  </div>
                  <div className="discount">
                    <h2 className="sm-title">15% off</h2>
                  </div>
                </div>
        )
    }
}


class ProductCatalog extends React.Component {
    renderTile = (current_item) => {
        return <ProductTile product={current_item}></ProductTile>;
    }

    render() {
        let tiles = [];
        for (let i = 0; i < this.props.products.length; i++) {
            const current_item = this.props.products[i];
            tiles.push(this.renderTile(current_item));
        }
        return tiles;
    }
}

const setup = function() {
    ReactDOM.render(<ProductCatalog products={products}></ProductCatalog>, document.getElementById('product-catalog'));
}

setup();