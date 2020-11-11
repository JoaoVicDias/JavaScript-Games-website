const btnResponsive = document.querySelector(".main__btn--hamburguer")
const responsiveTable = document.querySelector(".hamburguer_Table")







btnResponsive.addEventListener('click',function(){

    if(responsiveTable.style.display == "flex"){
        responsiveTable.style.transform = " translateX(-100vw)"
        responsiveTable.style.opacity = "0"
        setTimeout(function(){
        responsiveTable.style.display = "none"
        },140)
        
    }else{
         responsiveTable.style.display = "flex"
        setTimeout(function(){
        responsiveTable.style.transform = " translateX(0)"
        responsiveTable.style.opacity = "1"
    },100)
    }
})