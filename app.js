let search = document.getElementById("search");
let ph = document.querySelector(".ph");

let addBtn = document.getElementById("addBtn");
let addNoteSec = document.getElementById("addNoteSec");

addBtn.addEventListener('click',()=>{
    addBtn.classList.toggle('toggleBtn');
    addNoteSec.classList.toggle('toggleDiv');
})

