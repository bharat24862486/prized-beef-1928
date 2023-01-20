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



    document.getElementById("sidebar").classList.toggle("change")
    // document.getElementById("m").classList.t("c")
    // c.InnerText="c";




}