const popup = document.getElementById("popup");
const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.querySelector(".close-btn");

openPopupButton.addEventListener("click", () => {
    popup.classList.add("active");
});

closePopupButton.addEventListener("click", () => {
    popup.classList.remove("active");
 });
 function openNewPage() {
   // Change 'newpage.html' to your actual HTML file name
   window.location.href = 'project.html';
 }
 function showAlert() {
   var alertBox = document.getElementById("alert-box");
   alertBox.style.display = "block"; // Show the alert box
   setTimeout(function() {
     alertBox.style.display = "none"; // Hide it after 5 seconds
   }, 5000); 
 }