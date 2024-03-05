export const renderReview = (data, urlImg) => {
    const reviewsBlock = document.querySelector('.reviews_area')

    const dataReview = new Date().toISOString().slice(0, 10).split('-')
    const reverseDataArr = dataReview.reverse().join('.')

    let messages = data.text_message.split('. ');
    let fragmentStars = document.createDocumentFragment()
    let fragmentParagraph = document.createDocumentFragment()
    let fragmentImg = document.createDocumentFragment()
    let linkString = '<a href="#" class="review_ext">Развернуть</a>'
    let resultStringLink = `${messages.join('. ').length < 225 ? '' : linkString}`
    let stringFragmentStars = ''
    let stringFragmentParag = ''
    let stringFragmentImage = ''

    for(let i = 0; i <= data.starActive - 1; i++){
        const newSpan = document.createElement('span')
        newSpan.classList.add('star_cst')
        fragmentStars.append(newSpan)
    }

    for(let i = 0; i < messages.length - 1; i++){
        const curentString = messages[i]
        const nextString = messages[i + 1]
        if(curentString.length < 257 && nextString.length < 257){
            messages[i] = curentString + ' ' + nextString;
            messages.splice(i + 1, 1)
        }
    }
 
    for(let i = 0; i < messages.length; i++){
        const newP = document.createElement('p')
        newP.textContent = messages[i]
        newP.classList.add('text_stock')
        
        fragmentParagraph.append(newP)
    }

    for(let i = 0; i <= urlImg.length - 1; i++){
        const newImg = document.createElement('img')

        newImg.alt = "img"
        newImg.src = urlImg[i]

        fragmentImg.append(newImg)
    }

    stringFragmentStars = new XMLSerializer().serializeToString(fragmentStars)
    stringFragmentParag = new XMLSerializer().serializeToString(fragmentParagraph)
    stringFragmentImage = new XMLSerializer().serializeToString(fragmentImg)

    reviewsBlock.insertAdjacentHTML("beforeend", `
    <div class="reviews_item">
    <div class="user_reviews_states">
        <div class="names_user_tit">
            <p class="name_user_rev">${data.name_user}</p>
            <p class="name_prod">${data.name_product}</p>
        </div>

        <div class="user_stats">
            <p class="date_reviews">${reverseDataArr}</p>
            <div class="stars_reviews_wrapper">
                ${stringFragmentStars}
            </div>
        </div>
    </div>

    <div class="block_text_reviews">
        <div class="all_text_reviews">
            ${stringFragmentParag}
        </div>
        ${resultStringLink}
    </div>

    <div class="reviews_images_user">
            ${stringFragmentImage}
    </div>
    <div class="hr_item_review">

    </div>
</div>
    `)
}