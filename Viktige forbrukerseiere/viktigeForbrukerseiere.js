document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".smlTimeLineTimeLine").forEach((line) => {
        line.addEventListener("scroll", (e) => {
            const scroll = e.target.closest(".smlTimeLineTimeLine").scrollLeft;
            const targets = e.target
                .closest(".smlTimeLineTimeLine")
                .querySelectorAll(".smlTimeLineTimeLineItem");
            const current = Math.round(scroll / ((window.screen.width < 1441 ? 150 : 200) + 10));
            const boxes = targets[0]
                .closest(".smlTimeline")
                .querySelector(".smlTimelineInfoWrap")
                .querySelectorAll(".smlTimelineInfoItem");

            targets.forEach((i) => {
                i.querySelector(".smlTimeLineTimeLineItemSymbol").classList =
                    "smlTimeLineTimeLineItemSymbol";
            });

            boxes.forEach((b) => {
                b.classList = "smlTimelineInfoItem";
            });

            boxes[current].classList = "smlTimelineInfoItem smlTimelineInfoItemActive";

            targets[current].querySelector(".smlTimeLineTimeLineItemSymbol").classList =
                "smlTimeLineTimeLineItemSymbol smlTimeLineTimeLineItemSymbolActive";
        });
    });
    document.querySelectorAll(".smlTimeLineTimeLineItem").forEach((item) => {
        item.addEventListener("click", (e) => {
            const target = e.target.closest(".smlTimeLineTimeLineItem");
            const targetSibings = target
                .closest(".smlTimeLineTimeLine")
                .querySelectorAll(".smlTimeLineTimeLineItem");
            const indexOfTarget = Array.prototype.findIndex.call(
                targetSibings,
                (sibling) => sibling === target
            );
            target.closest(".smlTimeLineTimeLine").scrollLeft =
                indexOfTarget * ((window.screen.width < 1441 ? 150 : 200) + 10);
        });
    });
});
