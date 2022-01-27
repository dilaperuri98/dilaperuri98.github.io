document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        let menu = document.getElementById("menu")
        let content = document.getElementById("content")
        content.addEventListener('click', function(){
            if (menu.style.display == 'none' || menu.style.display == "" || menu.style.display == null) {
                menu.style.display = 'block'
            } else {
                menu.style.display = 'none'
            }
        });
    }
}