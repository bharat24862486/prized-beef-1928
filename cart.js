let CART = JSON.parse(localStorage.getItem('cart')) || []
let refresh = true;

// sidebar code


let forward = document.getElementById('forward')
let backword = document.getElementById('backword')

let i = 0;

let mainAppend = document.getElementById('Main_Insert')



let itemData = [
    [
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/prs/AF-2100/image/2/',
            title: 'Prestone Antifreeze/Coolant Universal 50/50 PREMIXED',
            starImg: 'images/icons8-star-50.png',

            rating: '4.9',
            people: '(907)',
            dollarSign: '$ ',

            dollar: 15.49,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPHME5W305Q/image/2/',
            title: 'STP Engine Oil High Mileage Conventional 5W-30 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(993)',
            dollarSign: '$ ',

            dollar: 24.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/sxl/S7317XL/image/2/',
            title: 'STP Extended Life Oil Filter S7317XL',
            starImg: 'images/icons8-star-50.png',

            rating: '4.7',
            people: '(274)',
            dollarSign: '$ ',

            dollar: 9.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPHME5W205Q/image/2/',
            title: 'STP Engine Oil High Mileage Conventional 5W-20 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(720)',
            dollarSign: '$ ',

            dollar: 24.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        }

    ],


    [


        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPHME5W305Q/image/2/',
            title: 'STP Engine Oil High Mileage Conventional 5W-30 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(993)',
            dollarSign: '$ ',

            dollar: 24.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/sxl/S7317XL/image/2/',
            title: 'STP Extended Life Oil Filter S7317XL',
            starImg: 'images/icons8-star-50.png',

            rating: '4.7',
            people: '(274)',
            dollarSign: '$ ',

            dollar: 9.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPHME5W205Q/image/2/',
            title: 'STP Engine Oil High Mileage Conventional 5W-20 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(720)',
            dollarSign: '$ ',

            dollar: 24.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPSYN0W205Q/image/2/',
            title: ' STP Dexos Engine Oil Full Synthetic 0W-20 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(437)',
            dollarSign: '$ ',

            dollar: 28.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        }
    ],


    [



        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/sxl/S7317XL/image/2/',
            title: 'STP Extended Life Oil Filter S7317XL',
            starImg: 'images/icons8-star-50.png',

            rating: '4.7',
            people: '(274)',
            dollarSign: '$ ',

            dollar: 9.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPHME5W205Q/image/2/',
            title: 'STP Engine Oil High Mileage Conventional 5W-20 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(720)',
            dollarSign: '$ ',

            dollar: 24.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPSYN0W205Q/image/2/',
            title: ' STP Dexos Engine Oil Full Synthetic 0W-20 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(437)',
            dollarSign: '$ ',

            dollar: 28.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/syl/H11XV-2/image/2/',
            title: ' XtraVision Headlight and Fog Light Bulb H11XV-2',
            starImg: 'images/icons8-star-50.png',

            rating: '4.5',
            people: '(421)',
            dollarSign: '$ ',

            dollar: 37.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        }
    ],



    [




        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPHME5W205Q/image/2/',
            title: 'STP Engine Oil High Mileage Conventional 5W-20 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(720)',
            dollarSign: '$ ',

            dollar: 24.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPSYN0W205Q/image/2/',
            title: ' STP Dexos Engine Oil Full Synthetic 0W-20 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(437)',
            dollarSign: '$ ',

            dollar: 28.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/syl/H11XV-2/image/2/',
            title: ' XtraVision Headlight and Fog Light Bulb H11XV-2',
            starImg: 'images/icons8-star-50.png',

            rating: '4.5',
            people: '(421)',
            dollarSign: '$ ',

            dollar: 37.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ags/BK-1/image/2/',
            title: 'AGS Sil-Glyde Brake Lubricant 0.14oz',
            starImg: 'images/icons8-star-50.png',

            rating: '4.7',
            people: '(848)',
            dollarSign: '$ ',

            dollar: 1.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        }
    ],



    [





        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ctl/STPSYN0W205Q/image/2/',
            title: ' STP Dexos Engine Oil Full Synthetic 0W-20 5 Quart',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(437)',
            dollarSign: '$ ',

            dollar: 28.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/syl/H11XV-2/image/2/',
            title: ' XtraVision Headlight and Fog Light Bulb H11XV-2',
            starImg: 'images/icons8-star-50.png',

            rating: '4.5',
            people: '(421)',
            dollarSign: '$ ',

            dollar: 37.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/ags/BK-1/image/2/',
            title: 'AGS Sil-Glyde Brake Lubricant 0.14oz',
            starImg: 'images/icons8-star-50.png',

            rating: '4.7',
            people: '(848)',
            dollarSign: '$ ',

            dollar: 1.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        },
        {
            img: 'https://contentinfo.autozone.com/znetcs/product-info/en/US/sxl/S6607XL/image/2/',
            title: ' STP Extended Life Oil Filter S6607XL',
            starImg: 'images/icons8-star-50.png',

            rating: '4.8',
            people: '(455)',
            dollarSign: '$ ',

            dollar: 9.99,
            btnImg: 'https://www.autozone.com/images/addcart.svg',
            btnText: 'ADD'

        }
    ]
]




create(itemData)


function create(arr) {
    mainAppend.innerHTML = ''



    arr[i].forEach((e, i) => {
        let mainDiv = document.createElement('div')
        let div1 = document.createElement('div')
        let img1 = document.createElement('img')
        img1.setAttribute('src', `${e.img}`)
        img1.setAttribute('class', 'Between_One_And_Two_Img1')
        div1.append(img1)

        let div2 = document.createElement('div')
        div2.setAttribute('class', 'Between_One_And_Two_Cont2')
        let div3 = document.createElement('div')
        div3.setAttribute('class', 'big_dollar2')
        div3.innerText = `${e.dollarSign}${e.dollar}`
        let p1 = document.createElement('p')
        p1.innerText = e.rating







        let img2 = document.createElement('img')
        img2.setAttribute('src', `${e.starImg}`)
        img2.setAttribute('class', 'stras_Img')

        let p2 = document.createElement('p')
        p2.innerText = e.people

        div2.append(div3, p1, img2, p2)






        let div4 = document.createElement('div')
        let p3 = document.createElement('p')
        p3.setAttribute('class', 'p_Inside_Between_One_And_Two')
        p3.innerText = e.title

        let btn = document.createElement('button')
        btn.setAttribute('class', 'Between_One_And_Two_Cont_Btn')
        let img3 = document.createElement('img')
        img3.setAttribute('src', `${e.btnImg}`)
        let span1 = document.createElement('span')
        span1.innerText = e.btnText

        div4.append(p3)
        btn.append(img3, span1)

        btn.addEventListener('click', () => {
            refresh = false

            CART.push(e)
            localStorage.setItem('cart', JSON.stringify(CART))
            if(refresh == false){
                refresh = true
                addItemsCart(CART)
        
            }
        })


        mainDiv.append(div1, div2, div4, btn)


        mainAppend.append(mainDiv)




    })

    

}



forward.addEventListener('click', () => {
    ForForward(itemData)
})

backword.addEventListener('click', () => {
    ForBackword(itemData)
})



function ForBackword(arr) {
    mainAppend.innerHTML = ''
    if (i == 0) {
        i = arr.length - 1
    } else {
        i--
    }


    arr[i].forEach((e, i) => {
        let mainDiv = document.createElement('div')
        let div1 = document.createElement('div')
        let img1 = document.createElement('img')
        img1.setAttribute('src', `${e.img}`)
        img1.setAttribute('class', 'Between_One_And_Two_Img1')
        div1.append(img1)

        let div2 = document.createElement('div')
        div2.setAttribute('class', 'Between_One_And_Two_Cont2')
        let div3 = document.createElement('div')
        div3.setAttribute('class', 'big_dollar2')
        div3.innerText = `${e.dollarSign}${e.dollar}`
        let p1 = document.createElement('p')
        p1.innerText = e.rating







        let img2 = document.createElement('img')
        img2.setAttribute('src', `${e.starImg}`)
        img2.setAttribute('class', 'stras_Img')

        let p2 = document.createElement('p')
        p2.innerText = e.people

        div2.append(div3, p1, img2, p2)






        let div4 = document.createElement('div')
        let p3 = document.createElement('p')
        p3.setAttribute('class', 'p_Inside_Between_One_And_Two')
        p3.innerText = e.title

        let btn = document.createElement('button')
        btn.setAttribute('class', 'Between_One_And_Two_Cont_Btn')
        let img3 = document.createElement('img')
        img3.setAttribute('src', `${e.btnImg}`)
        let span1 = document.createElement('span')
        span1.innerText = e.btnText

        div4.append(p3)
        btn.append(img3, span1)

        btn.addEventListener('click', () => {
            refresh = false
            CART.push(e)
            localStorage.setItem('cart', JSON.stringify(CART))
            if(refresh == false){
                refresh = true
                addItemsCart(CART)
        
            }
        })


        mainDiv.append(div1, div2, div4, btn)


        mainAppend.append(mainDiv)




    })
    if(refresh == false){
        refresh = true
        addItemsCart(CART)

    }

}












function ForForward() {
    mainAppend.innerHTML = ''
    if (i == 4) {
        i = 0
    } else {
        i++
    }


    itemData[i].forEach((e, i) => {
        let mainDiv = document.createElement('div')
        let div1 = document.createElement('div')
        let img1 = document.createElement('img')
        img1.setAttribute('src', `${e.img}`)
        img1.setAttribute('class', 'Between_One_And_Two_Img1')
        div1.append(img1)

        let div2 = document.createElement('div')
        div2.setAttribute('class', 'Between_One_And_Two_Cont2')
        let div3 = document.createElement('div')
        div3.setAttribute('class', 'big_dollar2')
        div3.innerText = `${e.dollarSign}${e.dollar}`
        let p1 = document.createElement('p')
        p1.innerText = e.rating







        let img2 = document.createElement('img')
        img2.setAttribute('src', `${e.starImg}`)
        img2.setAttribute('class', 'stras_Img')

        let p2 = document.createElement('p')
        p2.innerText = e.people

        div2.append(div3, p1, img2, p2)






        let div4 = document.createElement('div')
        let p3 = document.createElement('p')
        p3.setAttribute('class', 'p_Inside_Between_One_And_Two')
        p3.innerText = e.title

        let btn = document.createElement('button')
        btn.setAttribute('class', 'Between_One_And_Two_Cont_Btn')
        let img3 = document.createElement('img')
        img3.setAttribute('src', `${e.btnImg}`)
        let span1 = document.createElement('span')
        span1.innerText = e.btnText

        div4.append(p3)
        btn.append(img3, span1)
        btn.addEventListener('click', () => {
            refresh = false
            CART.push(e)
            localStorage.setItem('cart', JSON.stringify(CART))
            if(refresh == false){
                refresh = true
                addItemsCart(CART)
        
            }
        })


        mainDiv.append(div1, div2, div4, btn)


        mainAppend.append(mainDiv)




    })
    if(refresh == false){
        refresh = true
        addItemsCart(CART)

    }

}



// sidebar code end


// item added cart code

let addItemCartSection = document.getElementById('Free_In_Store')

let Do_Empty_Container = document.getElementById('Three_Cont1_One')





let PriceShow = document.getElementById('firstPrice')
let PriceShow2 = document.getElementById('firstPrice2')

PriceShow.innerText = 0
PriceShow2.innerText = 0

let cont = document.getElementById('Three_Id_Cont1')


addItemsCart(CART)




function addItemsCart(arr) {
    addItemCartSection.innerHTML = ''
    let total = 0
    if (arr.length == 0) {
        // cont.innerHTML = ''
        
        Do_Empty_Container.innerHTML = `
        <img src="https://www.autozone.com/images/cart_empty_icon.svg" alt="" class="Cart_Icon_Img">
        <p class="Empty_Cart_Text1">LOOKS LIKE YOUR CART IS EMPTY</p>
        <p class="Empty_Cart_Text2">Search for Products Above</p>
        <button id="Empty_Cart_Button">RETURN TO HOME</button>
        `

        





    } else {
        Do_Empty_Container.innerHTML = ''
        arr.forEach((e, i) => {
            total += e.dollar
            PriceShow.innerText = total;
            PriceShow2.innerText = total;
            let maindiv = document.createElement('div')
            let count = 1
            let div1 = document.createElement('div')
            div1.setAttribute('class', 'Free_In_Store_One')
            let p1 = document.createElement('p')
            p1.innerText = e.title
            let p2 = document.createElement('p')
            p2.innerText = 'Remove'

            p2.addEventListener('click', () => {
                CART.splice(i, 1)
                localStorage.setItem('cart', JSON.stringify(CART))
                addItemsCart(CART)
            })

            let p3 = document.createElement('p3')
            p3.innerText = 'OE Recommendation'

            div1.append(p1, p2)


            let div2 = document.createElement('div')
            div2.setAttribute('class', 'Free_In_Store_two')
            let div3 = document.createElement('div')
            let img1 = document.createElement('img')
            img1.setAttribute('src', `${e.img}`)
            img1.setAttribute('class', 'Free_In_Store_two_Img')
            div3.append(img1)


            let div4 = document.createElement('div')
            let div5 = document.createElement('div')
            div5.setAttribute('class', 'One_cont4')
            let div6 = document.createElement('div')
            div6.setAttribute('class', 'One_cont4_One')
            let div7 = document.createElement('div')
            div7.setAttribute('class', 'One_cont4_One_One')

            let input = document.createElement('input')
            input.setAttribute('type', 'radio')
            input.setAttribute('name', 'radio1')
            input.setAttribute('id', 'radio1')
            input.setAttribute('value','classRadio1')

            div7.append(input)

            let div8 = document.createElement('div')
            div8.setAttribute('class', 'One_cont4_One_Two')
            let label = document.createElement('label')
            label.setAttribute('for', 'classRadio1')
            let span1 = document.createElement('span')
            span1.innerText = 'Free In-Store or Curbside Pick Up'
            let br = document.createElement('br')
            let span2 = document.createElement('span')
            span2.setAttribute('class', 'red1')
            span2.innerText = 'Not Available at 4394 Summer Ave'
            let br2 = document.createElement('br')
            let span3 = document.createElement('span')
            span3.setAttribute('class', 'green1')
            span3.innerText = 'Available near you at 23'
            let a1 = document.createElement('a')
            a1.setAttribute('href', '')
            a1.setAttribute('class', 'Cont4_small')
            a1.innerText = 'Nearby Stores'

            label.append(span1, br, span2, br2, span3, a1)
            div8.append(label)

            div6.append(div7, div8)

            let div9 = document.createElement('div')
            div9.setAttribute('class', 'One_cont4_Two')
            let div10 = document.createElement('div')
            div10.setAttribute('class', 'One_cont4_Two_One')
            let input1 = document.createElement('input')
            input1.setAttribute('type', 'radio')
            input1.setAttribute('name', 'radio2')
            input1.setAttribute('id', 'radio1')
            input1.setAttribute('value','classRadio2')
            div10.append(input1)


            let div11 = document.createElement('div')
            div11.setAttribute('class', 'One_cont4_Two_Two')

            let label1 = document.createElement('label')
            label1.setAttribute('for', 'classRadio2')

            label1.innerHTML = `<span>Home Delivery</span> <br> <img src="https://www.autozone.com/images/ndd-icon.svg" alt=""> <span class="Cont4_Delivery_Truck">Free Next Day Delivery Eligible </span> <br><span class="Cont4_Decrease_Font_Weight">Order within </span> <span>19hrs and 47min</span> <span class="Cont4_Decrease_Font_Weight">to arrive </span> <span class="green1">Tomorrow </span><br> <img src="https://www.autozone.com/images/stdDeliveryIcon-16-16.svg" alt=""> <span class="Cont4_Decrease_FontSize">Standard Delivery</span>  <br>  <span class="Cont4_Decrease_FontSize">Est. Delivery </span>  <span class="green1">Jan 18</span>`

            div11.append(label1)

            div9.append(div10, div11)

            div5.append(div6, div9)

            div4.append(div5)




            let div12 = document.createElement('div')
            let div13 = document.createElement('div')
            div13.setAttribute('class', 'One_cont3_two')
            let btn1 = document.createElement('button')
            btn1.innerText = '+'

            let input3 = document.createElement('input')
            input3.setAttribute('type', 'text')
            input3.setAttribute('name', 'count')
            input3.setAttribute('id', 'PlusMinus')
            input3.setAttribute('value', `${count}`)

            let btn2 = document.createElement('button')
            btn2.innerText = '-'




            div13.append(btn1, input3, btn2)

            div12.append(div13)

            let div14 = document.createElement('div')
            let div15 = document.createElement('div')
            div15.setAttribute('class', 'One_cont3_one')
            let span6 = document.createElement('span')

            let span7 = document.createElement('span')
            span7.setAttribute('class', 'medium_dollar')
            span7.innerText = `$${e.dollar}`


            btn1.addEventListener('click', () => {
                total = total - (count * e.dollar)
                count++
                let dollar = count * e.dollar
                // dollar = dollar.toFixed(2)
                total += dollar
                total = total.toFixed(2)
                PriceShow.innerText = total;
                PriceShow2.innerText = total;


                // span7.innerText = `$${dollar}`
                input3.setAttribute('value', `${count}`)


            })

            btn2.addEventListener('click', () => {
                if (count == 1) {

                } else {
                    total = total - (count * e.dollar)
                    count--
                    input3.setAttribute('value', `${count}`)
                    let dollar = count * e.dollar
                    // dollar = dollar.toFixed(2)
                    total += dollar
                    total = total.toFixed(2)
                    PriceShow.innerText = total;
                    PriceShow2.innerText = total;
                    // span7.innerText = `$${dollar}`

                }
            })

            div15.append(span7)
            div14.append(div15)


            div2.append(div3, div4, div12, div14)

            maindiv.append(div1, p3, div2)


            addItemCartSection.append(maindiv)








        })
    }
}

// item added cart code end


// checkout

