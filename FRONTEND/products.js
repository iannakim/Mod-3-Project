


// --------- FETCH ALL PRODUCTS   ------------

const categories_url = "http://localhost:3000/categories"
const mainBody = document.querySelector("div.row.row-cols-1.row-cols-md-2.row-cols-lg-3")


//  fetch("http:localhost:3000/categories")
//     .then(res => res.json())
//     .then(catPOJO => {
//     // const products_array = 
//     catPOJO.forEach(function (category) {
//         let category_name = category.name;
//         // console.log(category_name);
//         let products = category.products;
//         // console.log(products);
//         products.forEach(function (prod) {
//             prodPojo = prod

//             cardOfProduct(prodPojo) //showAllProductsByCat???
            
//         })
        
//     })
    
// })


// // ---------HELPER METHOD ---------------

// let cardOfProduct = (product) => {

//     let productDiv = document.createElement('div')
//     productDiv.className = "col mb-4"
//     mainBody.append(productDiv)

//     let cardHolder = document.createElement("div")
//     cardHolder.className = 'card'

//     let proName = document.createElement("h5")
//     proName.className = 'card-title'
//     proName.innerText = product.name


//     let proImage = document.createElement('img')
//     proImage.className = 'card-img-top'
//     proImage.alt = product.name
//     proImage.src = product.image


//     let proPrice = document.createElement('p')
//     proPrice.className = 'card-text'
//     proPrice.innerText = `Price: $${product.price}.00`
//     productDiv.append(cardHolder, proImage, proName, proPrice)


//     // // ----EVENTLISTENER----- // //
//     productDiv.addEventListener('click', (evt) => {
//     showTheProductPage(product)
//     })

    
// }


// ---------- helper method for category filter  ---------------------
let showAllProductsByCat = (product) => {
    mainBody.className = 'row row-cols-1 row-cols-md-2 row-cols-lg-3'

    let productDiv = document.createElement('div')
    productDiv.className = "col mb-4"
    mainBody.append(productDiv)

    let cardHolder = document.createElement("div")
    cardHolder.className = 'card'

    let proName = document.createElement("h5")
    proName.className = 'card-title'
    proName.innerText = product.name


    let proImage = document.createElement('img')
    proImage.className = 'card-img-top'
    proImage.alt = product.name
    proImage.src = product.image


    let proPrice = document.createElement('p')
    proPrice.className = 'card-text'
    proPrice.innerText = `Price: $${product.price}.00`
    productDiv.append(cardHolder, proImage, proName, proPrice)

    // // ----EVENTLISTENER----- // //
    productDiv.addEventListener('click', (evt) => {
    showTheProductPage(product)
    })


}


    let showTheProductPage = (product) => {
        mainBody.className = 'none'
        mainBody.innerText = ''

        
    
        // ------Outthere div card-deck ---------------
        let productDiv = document.createElement('div')
        productDiv.className = "card-deck"
        mainBody.append(productDiv)
    
        // ------card div to hold just the image ---------
        let cardHolder = document.createElement("div")
            cardHolder.className = 'card'

        let proImage = document.createElement('img')
            proImage.alt = product.name
            proImage.src = product.image

        // ---card div to hold all the info regarding the product----
        let reviewContHolder = document.createElement('div')
            reviewContHolder.className = 'reviewContainer'

        let cardOfProductInfo = document.createElement('div')
            cardOfProductInfo.className = 'card'  

        let reviewProduct = document.createElement('div')
            reviewProduct.className = 'card-body'

        let rating = document.createElement('p')
            rating.className = 'card-title'
            rating.innerText = 'Rating stars'

        let nameOfProduct = document.createElement('h5')
            nameOfProduct.className = 'card-title'
            nameOfProduct.innerText = product.name

        let price = document.createElement('p')
            price.className = 'card-title'

        let priceContent = document.createElement('small')
            priceContent.className = 'text-small'
            priceContent.innerText = `$ ${product.price}.00`

        let quantity = document.createElement('p')
            quantity.className = 'card-title'
            quantity.innerText = 'qty: _____'

        let buttonHolder = document.createElement('div')
            buttonHolder.className = 'mx-auto'

        let button = document.createElement('button')
            button.className = '.btn btn-secondary btn-lg'
            button.type = 'button'
            button.innerText = 'Add to Cart'

        let description = document.createElement('h5')
            description.className = 'card-title'
            description.innerText = 'Product Description:'

        let contentDescription = document.createElement('p')
            contentDescription.className = 'card-text'

        let productDescription = document.createElement('small')
            productDescription.className = 'text-muted'
            productDescription.innerText = product.description      
            // productDescription.innerText = "blah blah"

        buttonHolder.append(button)
        price.append(priceContent)
        cardHolder.append(proImage)
        contentDescription.append(productDescription)
        cardOfProductInfo.append(reviewProduct)
        reviewContHolder.append(cardOfProductInfo)
        reviewProduct.append(rating, nameOfProduct, price, quantity, buttonHolder, description, contentDescription)
        productDiv.append( cardHolder, reviewContHolder)
    
        // ---------------- REVIEW -------------------
    
        let allProReviews = document.createElement('div')
        allProReviews.className = 'reviews'
        allProReviews.innerText = "Ratings & Reviews"
        // mainBody.append(reviewForm, allProReviews)
    
        console.log(product)

        const formContainer = document.querySelector('div#form-container')

    let reviewForm = document.createElement('form')
        reviewForm.id = 'new-review'

    let reviewDiv = document.createElement('div')
        reviewDiv.className = 'form-group'

    let nickNameArea = document.createElement('input')
        nickNameArea.className = 'form-control'
        nickNameArea.id = 'review-nickname'
        nickNameArea.setAttribute("placeholder", "Create a nickname");

    let userArea = document.createElement('input')
        userArea.className = 'form-control'
        userArea.id = 'review-user'
        userArea.setAttribute("placeholder", "Create a user_id");

    let productArea = document.createElement('input')
        productArea.className = 'form-control'
        productArea.id = 'review-product'
        productArea.setAttribute("placeholder", "Create a product_id");
    
    let star_ratingVar = document.createElement('input')
        star_ratingVar.className = 'form-control'
        star_ratingVar.id = 'review-rating'
        star_ratingVar.setAttribute("placeholder", "Create start");

    let reviewArea = document.createElement('textarea')
        reviewArea.className = 'form-control'
        reviewArea.id = 'review-content'
        reviewArea.setAttribute("placeholder", "Write your comment here...");

    let reviewInput = document.createElement('input')
    reviewInput.type = 'submit'
    reviewInput.className = 'btn btn-primary'
    formContainer.innerHTML = ''
    formContainer.append(reviewForm)
    reviewForm.append(reviewDiv)
    reviewDiv.append(nickNameArea)
    reviewDiv.append(reviewArea)
    reviewDiv.append(star_ratingVar)
    reviewDiv.append(productArea)
    reviewDiv.append(userArea)



    reviewDiv.append(reviewInput)
    mainBody.append(formContainer)
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newNickName = event.target['review-nickname'].value
        let newReviewContent = event.target['review-content'].value
        let newuser = parseInt(event.target['review-user'].value)
        let newproduct = parseInt(event.target['review-product'].value)
        let newRating = parseInt(event.target['review-rating'].value)



        console.log(`Nickname: ${newNickName}`)
        console.log(`Content: ${newReviewContent}`)
        console.log(typeof newuser)
        console.log(newuser, newproduct, newRating)



    fetch(`http://localhost:3000/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: newReviewContent,
                nickname: newNickName,
                user_id: newuser,
                product_id: newproduct,
                star_rating: newRating

            })
        })
        .then(res => res.json())
        .then((productPOJO) => {
            showTheProductPage(productPOJO)
        })
        event.target.reset()
    })

    
        
    
    
        // ------------------ Single reviews ---------------
        let proReview = document.createElement('div')
        proReview.className = 'single-review'
    
        console.log(product.reviews)
    
        product.reviews.forEach((review)=>{
    
        let reviewNickname = document.createElement('h5')
        reviewNickname.className = 'nickname'
        reviewNickname.innerText = `Username: ${review.nickname}`
        
    
        let reviewContent = document.createElement('p')
        reviewContent.className = 'content'
        reviewContent.innerText = `Comment: ${review.content}`
    
        let starRating = document.createElement('span')
        starRating.className = 'stars'
        starRating.innerText = `No. of stars: ${review.star_rating}`
    
        
    
        proReview.append(reviewNickname, reviewContent, starRating)
        allProReviews.append(proReview)
    
        
    
        })
      
    }
    




























