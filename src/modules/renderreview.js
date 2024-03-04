export const renderReview = (data, urlImg) => {
    const reviewsBlock = document.querySelector('.reviews_area')

    let messages = data.text_message.split('. ');
    let fragmentStars = document.createDocumentFragment()
    let fragmentParagraph = document.createDocumentFragment()
    let stringFragmentStars = ''
    let stringFragmentParag = ''

    for(let i = 0; i <= data.starActive - 1; i++){
        const newSpan = document.createElement('span')
        newSpan.classList.add('star_cst')
        fragmentStars.append(newSpan)
    }

    for(let i = 0; i < messages.length - 1; i++){
        const curentString = messages[i]
        const nextString = messages[i + 1]
        if(curentString.length < 320 && nextString.length < 270){
            messages[i] = curentString + ' ' + nextString;
            messages.splice(i + 1, 1)
        }
    }
    // ! Поиграть с величиныами, может получится нормаль склеивать строку

    for(let i = 0; i < messages.length; i++){
        const newP = document.createElement('p')
        newP.textContent = messages[i]
        newP.classList.add('text_stock')
        
        fragmentParagraph.append(newP)
    }

    stringFragmentStars = new XMLSerializer().serializeToString(fragmentStars)
    stringFragmentParag = new XMLSerializer().serializeToString(fragmentParagraph)


    reviewsBlock.insertAdjacentHTML("beforeend", `
    <div class="reviews_item">
    <div class="user_reviews_states">
        <div class="names_user_tit">
            <p class="name_user_rev">${data.name_user}</p>
            <p class="name_prod">${data.name_product}</p>
        </div>

        <div class="user_stats">
            <p class="date_reviews">01.01.2021</p>
            <div class="stars_reviews_wrapper">
                ${stringFragmentStars}
            </div>
        </div>
    </div>

    <div class="block_text_reviews">
        <div class="all_text_reviews">
            ${stringFragmentParag}
        </div>
        <a href="#"  class="review_ext">Развернуть</a>
    </div>

    <div class="reviews_images_user">
        <img src="./img/картинкаотзыв.png" alt="img">
        <img src="./img/картинкаотзыв.png" alt="img">
        <img src="./img/картинкаотзыв.png" alt="img">
    </div>
    <div class="hr_item_review">

    </div>
</div>
    `)
}