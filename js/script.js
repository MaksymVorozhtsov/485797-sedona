var searchButton = document.querySelector(".hotel-search-button");
var searchPopup = document.querySelector(".modal-search");
var datein = searchPopup.querySelector("[name=date-in]");

searchButton.addEventListener("click", function (evt) {
 evt.preventDefault();
 if (searchPopup.classList.contains("modal-hide")) {
 searchPopup.classList.remove("modal-hide");
     datein.focus();
 } 
else {
    searchPopup.classList.add("modal-hide");
}
});




