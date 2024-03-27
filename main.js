window.onload = () => {
    const headerElement = document.querySelector("header");
    const dropdownElement = document.querySelector(".dropdown");
    const dropdownStatus = dropdownElement.dataset.enable;

    headerElement.addEventListener("click", (event) =>{
        const target = event.target;
        if(target.classList.contains("hamburger-icon") || target.classList.contains("menu")){
            if(dropdownElement.classList.contains("ui-show")){
                dropdownElement.classList.remove("ui-show");
                dropdownElement.classList.add("ui-hidden");
            } else{
                dropdownElement.classList.remove("ui-hidden");
                dropdownElement.classList.add("ui-show");
            }
        }
    })
}