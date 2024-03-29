const products = [
    {
        id: 0,
        name: "Eco Cotton QTips",
        imgSrc: "images/product-1.jpg",
        price: 6.99,
        short_description: "Our cotton buds are made from bamboo and soft cotton, thus 100% biodegradable",
        bullet_description: [
            "After usage, you can dispose of the cotton swabs by simply throwing them into your organic waste, compost or no-matter-where.", 
            "Come in box made of recycled cardboard.", 
            "100 cotton swabs per box.", 
            "Made with 100% cotton and bamboo"
        ]
    },
    {
        id: 1,
        name: "Bamboo Toothbrush",
        imgSrc: "images/product-2.jpg",
        price: 7.99,
        short_description: "The medium soft bristles ensure thorough cleansing of your teeth while also protecting your gums.",
        bullet_description: [
            "The handle is made of fast-growing Moso bamboo which is biodegradable.", 
            "Artificial irrigation is not used in our bamboo cultivation, nor are pesticides or other chemicals.", 
            "The biobased bristles are obtained from castor oil. The oil derived from the plant ricinus communis is processed into our biobased bristles and is free of BPA and petroleum."
        ]
    },
    {
        id: 2,
        name: "Natural Soap",
        imgSrc: "images/product-3.jpg",
        price: 8.99,
        short_description: "Handmade soap with skin-loving oils, kinds of butter, herbs, clays, spices and pure essential oils.",
        bullet_description: [
            "Each bar natural soap is made with only natural soap ingredients that were specifically chosen to provide you with the all-natural shower experience.", 
            "Essential oils add fragrance to our natural soap bars as well as contribute their healthful qualities through their various abilities to tone, balance, relax, cleanse and invigorate.", 
            "Each bar is also made with only natural ingredients when it comes to colouring our soaps."
        ]
    },
    {
        id: 3,
        name: "Bamboo Utensils",
        imgSrc: "images/product-4.jpg",
        price: 21.99,
        short_description: "Handmade bamboo utensils for your everyday use.",
        bullet_description: [
            "Portable healthy and reusable bamboo cutlery set, the pouch keeps utensils sanitary, prefect for camping, travel, school, office or home.", 
            "Ergonomically designed handle for a secure grip, provides good balance and anti-slip.", 
            "The pouch is designed well, each utensil has a compartment so that they aren't bumping into each other, which can build up unnecessary wear."
        ]
    },
    {
        id: 4,
        name: "Skincare Set",
        imgSrc: "images/product-5.jpg",
        price: 49.99,
        short_description: "Organic face wash, toner and oil made with 100% natural ingredients.",
        bullet_description: [
            "Organic flowers combined with essential oils and handmade soap ensure a clean and gentle cleanse.", 
            "Our toner refreshes dull skin and is again 100% natural on you and our planet.", 
            "Floral oil added to your skin as the final step to your skincare routine for a softer and dewey face."
        ]
    },
    {
        id: 5,
        name: "Natural Toothpaste",
        imgSrc: "images/product-6.jpg",
        price: 14.99,
        short_description: "Our all-natural Toothpaste keep your teeth healthy, strong, and minty fresh.",
        bullet_description: [
            "We only use natural ingredients. No sulfates, parabens, allergens, dyes or any other chemical.", 
            "The storage containers for our Toothpaste are practical and sustainable at the same time. They last forever but can also easily be recycled.", 
            "All-natural means Toothpaste without bad chemicals or micro-plastics, because those unnecessary and unsustainable ingredients hurt the planet."
        ]
    },
    {
        id: 6,
        name: "Natural Body Butter",
        imgSrc: "images/product-7.jpg",
        price: 27.99,
        short_description: "Goat milk and lychee body butter dedicated to sensitive and dry skin.",
        bullet_description: [
            "Shea butter protects and soothes the skin, nourishes it and moisturizes, acts as a natural UV filter.", 
            "Beeswax seals epidermis against the waist of water and the pearl extract accelerates healing, protects and smoothes by decreasing ageing process.", 
            "This wonderful cosmetic contains also lychee fruit extract rich in vitamins, especially in vitamin C. Goat's milk proteins are the royal dose of youth recovery."
        ]
    },
    {
        id: 7,
        name: "Bamboo Nailbrush",
        imgSrc: "images/product-8.jpg",
        price: 9.99,
        short_description: "Bamboo Nail brush with Mane & Cactus Bristle.",
        bullet_description: [
            "Made with bamboo for the handle part with mane & cactus bristles for properly cleaning your nails", 
            "The jute string loop allows you to hang the nail brush when not in use.", 
            "Simple yet elegant look from high quality materials."
        ]
    },
    {
        id: 8,
        name: "Shampoo Bar",
        imgSrc: "images/product-9.jpg",
        price: 9.99,
        short_description: "Eucaliptus and Nettle shampoo bar.",
        bullet_description: [
            "Green clay and nettle actually help to strengthen and promote hair growth", 
            "Gently fragranced with eucaliptus, tea tree and lemon verbena essential oils to refresh your hair and scalp and to soothe your senses", 
            "It is suitable for greasy hair acting against dandruff. It has an antibacterial effect as well thanks to the essential oils."
        ]
    },
    {
        id: 9,
        name: "Bath Salts",
        imgSrc: "images/product-10.jpg",
        price: 12.99,
        short_description: "Natural bath salts with essential oils and petals.",
        bullet_description: [
            "A bathing ritual before bed can help encourage a deep, restorative night’s sleep.", 
            "A 100% natural blend of mineral-rich Epsom and Dead Sea Salts, infused with Jasmine and Lavender essentials oils to calm and soothe the senses, and Valerian to promote deep, peaceful relaxation.", 
            "Drift into a peaceful nights sleep. Epsom and Dead Sea Mineral Salts. With Lavender, Jasmine & Valerian."
        ]
    },
    {
        id: 10,
        name: "Natural Toothpaste",
        imgSrc: "images/product-6.jpg",
        price: 14.99,
        short_description: "Our all-natural Toothpaste keep your teeth healthy, strong, and minty fresh.",
        bullet_description: [
            "We only use natural ingredients. No sulfates, parabens, allergens, dyes or any other chemical.", 
            "The storage containers for our Toothpaste are practical and sustainable at the same time. They last forever but can also easily be recycled.", 
            "All-natural means Toothpaste without bad chemicals or micro-plastics, because those unnecessary and unsustainable ingredients hurt the planet."
        ]
    },
    {
        id: 11,
        name: "Natural Body Butter",
        imgSrc: "images/product-7.jpg",
        price: 27.99,
        short_description: "Goat milk and lychee body butter dedicated to sensitive and dry skin.",
        bullet_description: [
            "Shea butter protects and soothes the skin, nourishes it and moisturizes, acts as a natural UV filter.", 
            "Beeswax seals epidermis against the waist of water and the pearl extract accelerates healing, protects and smoothes by decreasing ageing process.", 
            "This wonderful cosmetic contains also lychee fruit extract rich in vitamins, especially in vitamin C. Goat's milk proteins are the royal dose of youth recovery."
        ]
    },
]; 

