
let forward = document.getElementById('forward')
let backword = document.getElementById('backword')

let i=0;

let mainAppend = document.getElementById('Main_Insert')



let itemData = [
    [
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/B71749/image/2/',
            title:'Continental Upper Radiator Hose B71749',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(3)',
            dollarSign:'$',
            dollar:'15',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/crp/CHR0406R/image/2/',
            title:'Rein Upper Radiator Hose CHR0406R',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(13)',
            dollarSign:'$',
            dollar:'43',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E71989/image/2/',
            title:'Continental Upper Radiator Hose E71989',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.9',
            people:'(32)',
            dollarSign:'$',
            dollar:'25',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72628/image/2/',
            title:'Continental Upper Radiator Hose E72628',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
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
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7 ',
            people:'(3)',
            dollarSign:'$',
            dollar:'45',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72484/image/2/',
            title:'Continental Upper Radiator Hose E72484',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(5)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        }
    ],


    [
        
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/crp/CHR0406R/image/2/',
            title:'Rein Upper Radiator Hose CHR0406R',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(13)',
            dollarSign:'$',
            dollar:'43',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E71989/image/2/',
            title:'Continental Upper Radiator Hose E71989',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.9',
            people:'(32)',
            dollarSign:'$',
            dollar:'25',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72628/image/2/',
            title:'Continental Upper Radiator Hose E72628',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
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
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7 ',
            people:'(3)',
            dollarSign:'$',
            dollar:'45',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72484/image/2/',
            title:'Continental Upper Radiator Hose E72484',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(5)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/crp/CHR0405R/image/2/',
            title:'Rein Upper Radiator Hose CHR0405R',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.1',
            people:'(9)',
            dollarSign:'$',
            dollar:'61',
            dollarCents:'99'
        }
    ],


    [
        
        
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E71989/image/2/',
            title:'Continental Upper Radiator Hose E71989',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.9',
            people:'(32)',
            dollarSign:'$',
            dollar:'25',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72628/image/2/',
            title:'Continental Upper Radiator Hose E72628',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
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
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7 ',
            people:'(3)',
            dollarSign:'$',
            dollar:'45',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72484/image/2/',
            title:'Continental Upper Radiator Hose E72484',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(5)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/crp/CHR0405R/image/2/',
            title:'Rein Upper Radiator Hose CHR0405R',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.1',
            people:'(9)',
            dollarSign:'$',
            dollar:'61',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72633/image/2/',
            title:'Continental Upper Radiator Hose E72633',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(13)',
            dollarSign:'$',
            dollar:'99',
            dollarCents:'99'
        }
    ],



    [
        
        
        
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72628/image/2/',
            title:'Continental Upper Radiator Hose E72628',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
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
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7 ',
            people:'(3)',
            dollarSign:'$',
            dollar:'45',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72484/image/2/',
            title:'Continental Upper Radiator Hose E72484',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(5)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/crp/CHR0405R/image/2/',
            title:'Rein Upper Radiator Hose CHR0405R',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.1',
            people:'(9)',
            dollarSign:'$',
            dollar:'61',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72633/image/2/',
            title:'Continental Upper Radiator Hose E72633',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(13)',
            dollarSign:'$',
            dollar:'99',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/D72227/image/2/',
            title:'Continental Upper Radiator Hose D72227',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.4',
            people:'(32)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        }
    ],



    [
        
        
        
        
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72484/image/2/',
            title:'Continental Radiator Hose E72714',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.7 ',
            people:'(3)',
            dollarSign:'$',
            dollar:'45',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72484/image/2/',
            title:'Continental Upper Radiator Hose E72484',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(5)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/crp/CHR0405R/image/2/',
            title:'Rein Upper Radiator Hose CHR0405R',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.1',
            people:'(9)',
            dollarSign:'$',
            dollar:'61',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/E72633/image/2/',
            title:'Continental Upper Radiator Hose E72633',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'5.0',
            people:'(13)',
            dollarSign:'$',
            dollar:'99',
            dollarCents:'99'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/dyc/D72227/image/2/',
            title:'Continental Upper Radiator Hose D72227',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.4',
            people:'(32)',
            dollarSign:'$',
            dollar:'23',
            dollarCents:'49'
        },
        {
            img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/drm/626-541/image/2/',
            title:'Dorman Hose 626-541',
            starImg:['/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png','/day-2/icons8-star-50.png'],
            space:'&nbsp;&nbsp;',
            rating:'4.2',
            people:'(11)',
            dollarSign:'$',
            dollar:'79',
            dollarCents:'99'
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