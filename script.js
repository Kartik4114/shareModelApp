const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');

// modal open function

const openModal= ()=>{
    console.log("Modal is active");
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
}

// modal close function

const closeModal= ()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
}
