btn_arr = document.querySelectorAll(".main");
para_arr = document.querySelectorAll("p");
function collapse() {
    for (var i = 0; i < document.querySelectorAll("p").length; i++){
        btn_arr[i].addEventListener("click", function () {
            if (para_arr[i].style.display === "none") {
                para_arr[i].style.display = "block";
            } else {
                para_arr[i].style.display = "none";
            }
        })
        
    }

}