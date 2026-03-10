// Menambahkan Event Listener

// btn Plus
document.getElementById("btnPlus").addEventListener("click", increaseCount);

// btn Minus
document.getElementById("btnMinus").addEventListener("click", decreaseCount);

// btn Reset
document.getElementById("btnReset").addEventListener("click", resetCount);

// btn Save
document.getElementById("btnSave").addEventListener("click", saveCount);

// btn Load
document.getElementById("btnLoad").addEventListener("click", loadCount  );

// -------------------------------- algoritma ----------------------------------

// deklarasi count
let count = 0;

// memenggil load count function pada saat file pertama kali dibuka
loadCount();

// function display
function updateCount() {
    document.getElementById("count").innerHTML = count;
}

// function increase count
function increaseCount() {
    count++;
    updateCount();
}

// function decrease count
function decreaseCount() {
    if (count > 0) {
        count--;
        updateCount();
    }
}

// function reset count
function resetCount() {
    count = 0;
    updateCount();
}

// function save count to local storage
function saveCount() {
    localStorage.setItem("count", count);
}

// function load count dari local storage
function loadCount() {
    let saved = localStorage.getItem("count");
    if (saved !== null) {
        count = Number(saved);
    }
    updateCount();
}
