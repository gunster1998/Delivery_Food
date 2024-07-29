const modalFunc =() =>{

const modal = document.querySelector(".cart-modal_overlay")
const cartBtn = document.querySelector("#cart-button")
console.log(cartBtn)

const openModal = ()=>{
    modal.classList.add("open")
}

const closeModal = ()=>{
    modal.classList.remove("open")
}
cartBtn.addEventListener("click", ()=> {
    openModal()
})



modal.addEventListener("click", (event) => {
    console.log("Что выводит Event", event)
    if (
        event.target.classList.contains("cart-modal_overlay") || 
        event.target.closest(".cart-modal-header-close")
    ){
        closeModal()
    }
})
}

const restsFunc =() =>{
    const container = document.querySelector("#rests-container")

    const restArray = [
        {
            id:0,
            title: "Пицца плюс",
            time:50,
            rating:4.5,
            price:900,
            type:"Пицца",
            image:"pizza_plus.jpg"
        },
        {
            id:1,
            title: "Тануки",
            time:50,
            rating:4.5,
            price:900,
            type:"Пицца",
            image:"tanuki.jpg"
        },
        {
            id:2,
            title: "FoodBand",
            time:50,
            rating:4.5,
            price:900,
            type:"Пицца",
            image:"foodband.jpg"
        },
        {
            id:3,
            title: "Жадина-пицца",
            time:50,
            rating:4.5,
            price:900,
            type:"Пицца",
            image:"zhadina-pizza.jpg"
        },
        {
            id:4,
            title: "Точка еды",
            time:50,
            rating:4.5,
            price:900,
            type:"Пицца",
            image:"tochka-eat.jpg"
        },
        {
            id:5,
            title: "PizzaBurger",
            time:50,
            rating:4.5,
            price:900,
            type:"Пицца",
            image:"pizza_burger.jpg"
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style = "width: 100%; text-align:center;">Загрузка</p>'
    }

    const randerResrs = (array) => {
        container.innerHTML = ''
        array.forEach((card) => {
            container.insertAdjacentHTML("beforeend", `
                <a  href="page/pizza_plus.html?шв=${card.id}" class="products-cart">
                        <div class="products-cart_image">
                            <img src="./img/restaurant/${card.image}" alt="${card.image}">
                        </div>
                        <div class="products-cart_description">
                            <div class="products-cart_description-row">
                                <h4 class="products-cart_description-title">${card.title}</h4>
                                <div class="products-cart_description-bage">${card.time} мин</div>
                            </div>
                            <div class="products-cart_description-row">
                                <div class="products-cart_description-info">
                                    <div class="products-cart_description-raiting">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                            <path d="M14.6515 6.24221C14.5553 5.94476 14.2915 5.73349 13.9793 5.70536L9.73947 5.32038L8.06292 1.39623C7.9393 1.10864 7.65776 0.922485 7.34495 0.922485C7.03215 0.922485 6.75061 1.10864 6.62699 1.39691L4.95043 5.32038L0.709893 5.70536C0.398319 5.73417 0.135163 5.94476 0.0384405 6.24221C-0.0582818 6.53966 0.0310434 6.86592 0.266741 7.07158L3.47158 9.88224L2.52655 14.0451C2.45739 14.3512 2.5762 14.6676 2.83016 14.8512C2.96667 14.9498 3.12638 15 3.28744 15C3.4263 15 3.56404 14.9626 3.68766 14.8886L7.34495 12.7028L11.0009 14.8886C11.2684 15.0495 11.6057 15.0349 11.8591 14.8512C12.1131 14.667 12.2318 14.3505 12.1627 14.0451L11.2177 9.88224L14.4225 7.07214C14.6582 6.86592 14.7482 6.54022 14.6515 6.24221Z" fill="#FFC107"/>
                                          </svg>
                                          ${card.rating}
                                    </div>
                                    <div class="products-cart_description-price">
                                        От ${card.price} ₽
                                    </div>
                                    <div class="products-cart_description-group">
                                    ${card.type}
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </a>
                `)
        })
    }


if (container){
    loading()
    setTimeout(() => {
        randerResrs(restArray)
    }, 300)
}
}
modalFunc()
restsFunc()