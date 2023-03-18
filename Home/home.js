const modal = document.querySelector(".my-modal")
const openModal = document.querySelector(".login-button")
const closeModal = document.querySelector(".close-button")

openModal.addEventListener('click', () => {
   console.log("dialog opened")
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    console.log("dialog closed")
    modal.close();
})
//changes made to exisiting js file below....
var dialog = document.getElementById('dialog');

document.addEventListener('click', function(event) {
  if (!dialog.contains(event.target)) {
    //dialog.close();
    console.log("dialog closed because of chatgpt")
  }
});
//div popup and close
/*
function showPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }
  */
  function showPopup() {
    document.getElementById("popup").style.display = "block";
    window.addEventListener("click", hidePopupOutside);
  }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
    window.removeEventListener("click", hidePopupOutside);
  }
  
  function hidePopupOutside(event) {
    const popup = document.getElementById("popup");
    if (!popup.contains(event.target)) {
      //popup.style.display = "none";
      window.removeEventListener("click", hidePopupOutside);
    }
  }
  