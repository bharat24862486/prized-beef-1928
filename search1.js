
let p = document.getElementById("m")
let one=document.getElementById("onebtn")
let two = document.getElementById("twobtn")
let three = document.getElementById('threebtn')
let left = document.getElementById('left')



function onclickmenu() {

    document.getElementById("manu").classList.toggle("icon");
//    body.style=position"fixed"

   


    document.getElementById("sidebar").classList.toggle("change")
    // document.getElementById("m").classList.t("c")
    // c.InnerText="c";
    // document.body.style.backgroundColor="blue"

}










let itemObj = [
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m13670005_Prod_Battery.jpg',
     title:'Battery',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490381_prd-Fuse-and-Accessories.jpg',
     title:'Fuse and Accessories',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m13600028_Prod_Jump_Starter.jpg',
     title:'Jumper Starter',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490477_prd-Code-Reader.jpg',
     title:'Code Reader',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m14540013_Prod_Battery_Charger.jpg',
     title:'Battery Charger',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m13950001_Prod_Battery_Terminal.jpg',
     title:'Battery Terminal',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490551_prd-Battery-Cable.jpg',
     title:'Battery Cable',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490490_prd-Motorcycle-and-Power-Sport-Battery.jpg',
     title:'Power Sport Battery',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m7910004_prd-Lubricant-Grease.jpg',
     title:'Lubricant Grease',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490346_prd-Electrical-Wire-Connector.jpg',
     title:'Electrical Wire Connector',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/jci/AUX12/image/2/',
     title:'Auxiliary Battery',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/eqp/3802/image/2/',
     title:'Professional Code Reader',
    }
]


let universal = [
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490381_prd-Fuse-and-Accessories.jpg',
     title:'Fuse and Accessories',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m13600028_Prod_Jump_Starter.jpg',
     title:'Jump Starter',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490477_prd-Code-Reader.jpg',
     title:'Code Reader',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m12600025_Prod_Marine_Battery.jpg',
     title:'Marine Battery',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m14540013_Prod_Battery_Charger.jpg',
     title:'Battery Charger',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m13950001_Prod_Battery_Terminal.jpg',
     title:'Battery Terminal',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490551_prd-Battery-Cable.jpg',
     title:'Battery Cable',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490490_prd-Motorcycle-and-Power-Sport-Battery.jpg',
     title:'Power Sport Battery',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m7910004_prd-Lubricant-Grease.jpg',
     title:'Lubricant Grease',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490346_prd-Electrical-Wire-Connector.jpg',
     title:'Electrical Wire Connector',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490565_prd-Fluid-Pump.jpg',
     title:'Fluid Pump',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/eqp/3802/image/2/',
     title:'Professional Code Reader',
    }
]



let Vihicle = [
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m13670005_Prod_Battery.jpg',
    title:'Battery',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m13950001_Prod_Battery_Terminal.jpg',
    title:'Battery Terminal',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/jci/AUX12/image/2/',
    title:'Auxiliary Battery',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m12840001_prod-Battery_Fuse.jpg',
     title:'Battery Fuse',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/uro/URO-008653/image/2/',
     title:'Battery Terminal Bolt',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m13700014_Prod_Battery_Hold_Down.jpg',
     title:'Battery Hold Down',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/wl2/SU10372/image/2/',
     title:'Battery Current Sensor',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/uro/URO-009789/image/2/',
     title:'Battery Tray-OE Exact Fit',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/drm/60213/image/2/',
     title:'Ground Strap',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/drm/926-877/image/2/',
     title:'Battery Cable Terminal',
    },
    {img:'https://contentinfo.autozone.com/znetcs/product-info/en/US/drm/924-252/image/2/',
     title:'Battery Vent Tube',
    },
    {img:'https://www.autozone.com/images/MEDIA_ProductCatalog/m3490551_prd-Battery-Cable.jpg',
     title:'Battery Cable',
    }
]


let firstCheckbox = document.getElementById('firstCheckbox')
let count1 = 0

firstCheckbox.addEventListener('change',()=>{
    count1++
    if(count1 % 2 == 0){
        create(itemObj)
    } else{
        create(universal)
    }
})

let secondCheckbox = document.getElementById('secondCheckbox')
let count2 = 0
secondCheckbox.addEventListener('change',()=>{
    count2++
    if(count2 % 2 == 0){
        create(itemObj)
    } else{
        create(Vihicle)
    }
})


let grid = document.getElementById('grid')



function create(arr){
    grid.innerHTML = ''
    arr.forEach((e,i)=>{
        let div1 = document.createElement('div')
        let img1 = document.createElement('img')
        img1.setAttribute('src',`${e.img}`)
        let p1 = document.createElement('p')
        p1.innerText = e.title

        div1.append(img1,p1)
        grid.append(div1)
    })

}