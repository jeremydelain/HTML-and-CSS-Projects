//alert form validation
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}

//pop-up form
function openForm() {
    document.getElementById("myPopupForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myPopupForm").style.display = "none";
}

//slideshow
document.addEventListener('DOMContentLoaded', (event) => {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
        $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);
})
