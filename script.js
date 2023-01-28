const productContainers = [...document.querySelectorAll('.product-container')];
console.log(productContainers)
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
console.log(nxtBtn)
const preBtn = [...document.querySelectorAll('.pre-btn')];
console.log(preBtn)

productContainers.forEach((item, i) => {
    console.log(item , i)
    
    let containerDimensions = item.getBoundingClientRect();


    console.log("d",containerDimensions)


    let containerWidth = containerDimensions.width;

    console.log(nxtBtn[i])

    nxtBtn[i].addEventListener('click', () => {

        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})