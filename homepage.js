let p = document.getElementById("m")
let one=document.getElementById("onebtn")
let two = document.getElementById("twobtn")
let three = document.getElementById('threebtn')
let left = document.getElementById('left')

one.addEventListener('change',()=>{
    let URL = "https://www.autozone.com/cdn/images/B2C/US/media/FY23/P0506/Heroes/_fy23p0506-superhero-battery-d.jpg"
    left.style.backgroundImage =  `url(${URL})`
})
two.addEventListener('change',()=>{
    let URL = "https://www.autozone.com/cdn/images/B2C/US/media/FY23/P0506/Heroes/_fy23p0506-superhero-rewards-d.jpg"
    left.style.backgroundImage =  `url(${URL})`
})
three.addEventListener('change',()=>{
    let URL = "https://www.autozone.com/cdn/images/B2C/US/media/FY23/P0506/Heroes/_fy23p0506-superhero-gumout-d.jpg"
    left.style.backgroundImage =  `url(${URL})`
})









function onclickmenu() {

    document.getElementById("manu").classList.toggle("icon");
//    body.style=position"fixed"

   


    document.getElementById("sidebar").classList.toggle("change")
    // document.getElementById("m").classList.t("c")
    // c.InnerText="c";
    // document.body.style.backgroundColor="blue"

}

let forward = document.getElementById('forward')
let backword = document.getElementById('backword')

let i=0;

let mainAppend = document.getElementById('Main_Insert')



let itemData = [
    [
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/prs/AF-2100/image/2/',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/ags/BK-1/image/2/',
            title:'Prestone Antifreeze/Coolant Universal CONCENTRATE *10 Year/300K Mile Protection* 1 Gallon',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(634)',
            dollarSign:'$',
            dollar:'15',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/flo/10713BLK132/image/2/',
            title:'Turtle Wax Rubbing Compound Paste 10.5oz',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.6',
            people:'(32)',
            dollarSign:'$',
            dollar:'6',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/prs/AF-2000/image/2/',
            title:'Duralast 800 Amp Portable Battery Jump Starter ',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.5',
            people:'(316)',
            dollarSign:'$',
            dollar:'84',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/twx/T-230A/image/2/',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/prs/AF-2100/image/2/',
            title:'Continental Upper Radiator Hose E72484',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(5)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        }
    ],

// 
    [
        
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/scm/DL-800/image/2/',
            title:'Rein Upper Radiator Hose CHR0406R',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(13)',
            dollarSign:'$',
            dollar:'43',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/flo/10713BLK132/image/2/',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/prs/AF-2000/image/2/',
            title:'Continental Upper Radiator Hose E72628',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.4',
            people:'(5)',
            dollarSign:'$',
            dollar:'53',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/twx/T-230A/image/2/',
            title:'Continental Radiator Hose E72714',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7 ',
            people:'(3)',
            dollarSign:'$',
            dollar:'45',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/prs/AF-2100/image/2/',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/flo/OP-1/image/2/',
            title:'AGS Sil-Glyde Brake Lubricant 0.14oz',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(853)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'99'
        }
    ],


    [
        
   
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREB0aZAeUyPfqYz9Ox1KHL64F2s9zx5kIXNQ&usqp=CAU',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6La79iPyj93PPuevA0EERJKcap9cXIIYqA&usqp=CAU',
            title:'Continental Upper Radiator Hose E72628',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.4',
            people:'(5)',
            dollarSign:'$',
            dollar:'53',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72484/image/2/',
            title:'Continental Radiator Hose E72714',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7 ',
            people:'(3)',
            dollarSign:'$',
            dollar:'45',
            dollarCents:'49'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDheT9gDcC9XL0LzIrvA1HwXrfMPa8nOrg6g&usqp=CAU',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/crp/CHR0405R/image/2/',
            title:'Rein Upper Radiator Hose CHR0405R',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.1',
            people:'(9)',
            dollarSign:'$',
            dollar:'61',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/B71749/image/2/',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        }
    ],

// 

    [
        
        
        
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjY25OrnpGtX9WNsvssnFwqk84pQtKPRFMw&usqp=CAU',
            title:'Continental Upper Radiator Hose E72628',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.4',
            people:'(5)',
            dollarSign:'$',
            dollar:'53',
            dollarCents:'99'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m0ioVKFgyop2CyiyZVvYYJYByz5OTQeG6w&usqp=CAU',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnARx79YoK-YnC8uw9eP6mGcshOvKRFMwzw&usqp=CAU',
            title:'Continental Upper Radiator Hose E72484',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(5)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/flo/10713BLK132/image/2/',
            title:'Rein Upper Radiator Hose CHR0405R',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.1',
            people:'(9)',
            dollarSign:'$',
            dollar:'61',
            dollarCents:'99'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-4zpvqpRIbJuYayzATK-cwB2oTDmxLDz_AqYKd8MH-IrNpr22dt8YljESWkOh8mKTuA&usqp=CAU',
            title:'Continental Upper Radiator Hose E72633',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(13)',
            dollarSign:'$',
            dollar:'99',
            dollarCents:'99'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn491TaMG4JrSyrHzMIAA9EBl4S2nBC4N0rQ&usqp=CAU',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        }
    ],


// 
    [
        
        
        
        
        {  img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/B71749/image/2/',
            title:'Hopkins Black Big Mouth with No-Mess Splash Guard Funnel',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7',
            people:'(106)',
            dollarSign:'$',
            dollar:'1',
            dollarCents:'49'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG30TisPlyRHqNmtA3gkE5RHbJiSW2axRciA&usqp=CAU',
            title:'Continental Upper Radiator Hose E72484',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(5)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWP_KYrg5Jn30S4Z2xtFsNDYQ-n-mCmeXYOQ&usqp=CAU',
            title:'Rein Upper Radiator Hose CHR0405R',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.1',
            people:'(9)',
            dollarSign:'$',
            dollar:'61',
            dollarCents:'99'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBPq-usZcpoZUu7XZolWQDvmtXeZEQDa0Nw&usqp=CAU',
            title:'Continental Upper Radiator Hose E72633',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(13)',
            dollarSign:'$',
            dollar:'99',
            dollarCents:'99'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAf8ea8R3GFeJd1IXqTR3m8sDB1OAEBBlrDw&usqp=CAU',
            title:'Continental Upper Radiator Hose D72227',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.4',
            people:'(32)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBVe-JoTJR_HHP6Jn5ehv2k9AZ4_UhHUVeQ&usqp=CAU',
            title:'Dorman Hose 626-541',
            starImg:['images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png','images/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.2',
            people:'(116)',
            dollarSign:'$',
            dollar:'3',
            dollarCents:'29'
        }
    ]
]



forward.addEventListener('click',()=>{
    ForForward(itemData)
})

backword.addEventListener('click',()=>{
    ForBackword(itemData)
})



function ForBackword(arr){
    mainAppend.innerHTML = ''
    if(i==0){
        i=arr.length-1
    } else{
        i--
    }
    

    arr[i].forEach((e,i)=>{
        let mainDiv = document.createElement('div')
        let div1 = document.createElement('div')
        let img1 = document.createElement('img')
        img1.setAttribute('src',`${e.img}`)
        img1.setAttribute('class','Between_One_And_Two_Img1')
        div1.append(img1)

        let div2 = document.createElement('div')
        let p1 = document.createElement('p')
        p1.innerText = e.title
        div2.append(p1)

        let div3 = document.createElement('div')
        let div4 = document.createElement('div')
        div4.setAttribute('class','Between_One_And_Two_Cont1')

        for(let j=0; j<e.starImg.length; j++){
            let img2 = document.createElement('img')
            img2.setAttribute('src',`${e.starImg[j]}`)
            div4.append(img2)
        }
        // let spaces = e.space
        // div4.append(spaces)
        // div4.append('&nbsp;&nbsp;')

        let span1 = document.createElement('span')
        span1.setAttribute('class','Span_Inside_Between_One_And_Two_Cont1')
        span1.innerText = e.rating

        let span2 = document.createElement('span')
        span2.innerText = e.people

        div4.append(span1,span2)

        


        let div5 = document.createElement('div')
        div5.setAttribute('class','Between_One_And_Two_Cont2')

        let div6 = document.createElement('div')
        let span3 = document.createElement('span')
        span3.setAttribute('class','little_dollar2')
        span3.innerText = e.dollarSign
        let span4 = document.createElement('span')
        span4.setAttribute('class','big_dollar2')
        span4.innerText = e.dollar
        let span5 = document.createElement('span')
        span5.setAttribute('class','little_dollar2')
        span5.innerText = e.dollarCents

        div6.append(span3,span4,span5)
        div5.append(div6)
        div3.append(div4,div5)


        mainDiv.append(div1,div2,div3)


        mainAppend.append(mainDiv)




    })

}











function ForForward(){
    mainAppend.innerHTML = ''
    if(i==4){
        i=0
    } else{
        i++
    }
    

    itemData[i].forEach((e,i)=>{
        let mainDiv = document.createElement('div')
        let div1 = document.createElement('div')
        let img1 = document.createElement('img')
        img1.setAttribute('src',`${e.img}`)
        img1.setAttribute('class','Between_One_And_Two_Img1')
        div1.append(img1)

        let div2 = document.createElement('div')
        let p1 = document.createElement('p')
        p1.innerText = e.title
        div2.append(p1)

        let div3 = document.createElement('div')
        let div4 = document.createElement('div')
        div4.setAttribute('class','Between_One_And_Two_Cont1')

        for(let j=0; j<e.starImg.length; j++){
            let img2 = document.createElement('img')
            img2.setAttribute('src',`${e.starImg[j]}`)
            div4.append(img2)
        }
        // let spaces = e.space
        // div4.append(spaces)

        let span1 = document.createElement('span')
        span1.setAttribute('class','Span_Inside_Between_One_And_Two_Cont1')
        span1.innerText = e.rating

        let span2 = document.createElement('span')
        span2.innerText = e.people

        div4.append(span1,span2)

        


        let div5 = document.createElement('div')
        div5.setAttribute('class','Between_One_And_Two_Cont2')

        let div6 = document.createElement('div')
        let span3 = document.createElement('span')
        span3.setAttribute('class','little_dollar2')
        span3.innerText = e.dollarSign
        let span4 = document.createElement('span')
        span4.setAttribute('class','big_dollar2')
        span4.innerText = e.dollar
        let span5 = document.createElement('span')
        span5.setAttribute('class','little_dollar2')
        span5.innerText = e.dollarCents

        div6.append(span3,span4,span5)
        div5.append(div6)
        div3.append(div4,div5)


        mainDiv.append(div1,div2,div3)


        mainAppend.append(mainDiv)




    })

}

