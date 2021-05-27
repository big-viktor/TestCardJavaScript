const search = document.querySelector('.card_btn1');
const inputCard = document.querySelector('.input_card');
const btnDetail = document.querySelector('.btn_detail');
const textCard = document.querySelector('.text3_card');
const btnSlid = document.querySelector('.container_btn_slid');
const menu = document.querySelector('.card_btn2');
const menuContent = document.querySelector('.menu_content');
const btnBack = document.querySelector('.btn_back');
const btnNext = document.querySelector('.btn_next');
const widthVideo = document.querySelector(".menu_content"); 
const slider = document.querySelector('.slid_card');
const cardBackground = document.querySelector(".card_background"); 
const contentMenuLogo = document.querySelector(".content_menu_logo"); 
const menuLogo = document.querySelector(".menu_logo"); 
const contentLogo = document.querySelector(".content_logo");
const contentBtn = document.querySelector(".content_btn");
const textCardContent = document.querySelector(".text_card_content")
 

let searchs = false;

const addSelect = () =>{
    if(searchs){
        inputCard.classList.add("delet");
        searchs = false;
    }else {
        searchs = true;
        inputCard.classList.remove("delet");
    }
};



const addMenu = () =>{
    if(searchs){
        menuContent.classList.remove("delet");
        searchs = false;
    }else {
        searchs = true;
        menuContent.classList.add("delet");
    }
};

const widthWindow = () => {
    console.log('resize');
    console.log(screen.width);
  
}
widthWindow;

const addMenuLogo = () => {
    contentLogo.classList.add("delet_div")
    contentBtn.classList.remove("delet_div")
}

btnSlid.style.paddingTop="190px";
const addText = () =>{
    if(screen.width <= (705)){
        if(searchs){
            cardBackground.style.top="80px";
            slider.style.top="80px"
            cardBackground.style.bottom="30px";
            btnSlid.style.bottom="30px";
            textCard.style.height="0px";
            searchs = false;
        }else {
            searchs = true;
            cardBackground.style.top="0px";
            slider.style.top="0px"
            btnSlid.style.top="0px";
            textCard.style.height="80px";
        }
    }
    if(screen.width >(705)){
        if(searchs){
            btnSlid.style.paddingTop="190px";
            textCard.style.height="0px";
            searchs = false;
        }else {
            searchs = true;
            btnSlid.style.paddingTop="70px";
            textCard.style.height="140px";
        }
    }
   
};

if(screen.width <= (705)){

      textCardContent.addEventListener("swipe", function() {
        contentBtn.classList.add("delet_div");
        contentLogo.classList.remove("delet_div")
      });
      textCardContent.addEventListener("click", function() {
        contentBtn.classList.add("delet_div");
        contentLogo.classList.remove("delet_div")
      });
    contentMenuLogo.classList.remove("delet")
    contentBtn.classList.add("delet_div");
    btnSlid.style.paddingTop="0px";
    slider.style.top="80px"
    cardBackground.style.top="80px";
}

if(screen.width >+(705)){
    contentMenuLogo.classList.add("delet")
}



const sliderBox = [];

 for (let i = 0; i < slider.children.length; i++) {
      let sliders = slider.children[i];
        sliderBox.push(sliders);
    }
  
    let index = 0;

   sliderBox[index];
  
    const btnNexts = () =>{
        index;
        if(screen.width <= (705)){
            if(index === (sliderBox.length -1)){
                index;
                sliderBox[index++].classList.add("delet_div");
                index--;
                btnNext.setAttribute("disabled", "disabled");
            }else{
                index;
                sliderBox[index++].classList.add("delet_div");
                btnBack.removeAttribute("disabled");
            }
        }
        if(screen.width > (705)){
        if(index === (sliderBox.length -1)){
            index;
            sliderBox[index++].classList.add("border_car");
            index--;
            btnNext.setAttribute("disabled", "disabled");

        }else{
            index;
            sliderBox[index++].classList.add("border_car");
            btnBack.removeAttribute("disabled");
            console.log(index)
           
        }
        }
    }
    const btnBacks = () =>{
        index;
        if(screen.width <= (705)){
            if(index === 0){
                index;
                sliderBox[index--].classList.remove("delet_div");
                index++;
                btnBack.setAttribute("disabled", "disabled");
            }else{
                index;
                btnNext.removeAttribute("disabled");
                sliderBox[index--].classList.remove("delet_div");
            }
        }
        if(screen.width > (705)){
           if(index === 0){
                index;
                sliderBox[index--].classList.remove("border_car");
                index++;
                console.log(index)
                btnBack.setAttribute("disabled", "disabled");
            }else{
                index;
                btnNext.removeAttribute("disabled");
                sliderBox[index--].classList.remove("border_car");
                console.log(index)
           
            }
        }
        index;
    };

    

    menuLogo.addEventListener("click",addMenuLogo);
    search.addEventListener("click",addSelect);
    btnDetail.addEventListener("click",addText);
    menu.addEventListener("click",addMenu);
   btnBack.addEventListener("click",btnBacks);
   btnNext.addEventListener("click",btnNexts);

