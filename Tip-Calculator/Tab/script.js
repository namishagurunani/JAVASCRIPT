document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const contentItems = document.querySelectorAll(".content-item");


    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const step = button.getAttribute("data-step");

            tabButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            contentItems.forEach((item) => {
                item.classList.remove("active");
                if (item.getAttribute("data-step") === step) {
                    item.classList.add("active");
                }
            });

            if (step === "1") {
                document.querySelector(".content").style.background = "pink";
                
            } else if (step === "2") {
                document.querySelector(".content").style.background = "pink";
                
            } else if (step === "3") {
                document.querySelector(".content").style.background = "pink";
               
            }

           
        });
    });
});
