const inp = document.getElementsByTagName("input")[0];
const btn = document.getElementsByTagName("button")[0];
const img = document.getElementsByTagName("img")[0];
const pass = "12345";
btn.addEventListener("click",
    function () {
        if (inp.value === pass) {
            img.src = "assets/images/non-blured.jpg";
        }else {
            alert("Wrong Password");
        }
});