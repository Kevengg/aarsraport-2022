document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".verticalLineItem").forEach((i) => {
        if (i.querySelector(".verticalLineItemText")) {
            i.addEventListener("click", (e) => {
                const target = e.target.closest(".verticalLineItem");
                target
                    .querySelector(".verticalLineItemText")
                    .classList.toggle("verticalLineItemTextShow");
                const targets = target
                    .closest(".verticalLine")
                    .querySelectorAll(".verticalLineItem");

                const indexOfTarget = Array.prototype.findIndex.call(
                    targets,
                    (sibling) => sibling === target
                );
            });
        }
    });
});
