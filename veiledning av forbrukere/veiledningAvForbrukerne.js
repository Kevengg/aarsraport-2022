// makes shure document has laded before ading lintener
document.addEventListener("DOMContentLoaded", function () {
    // selsects all the arrows
    document.querySelectorAll(".lgTimelineScroll").forEach((arrow) => {
        // adds listener to all the arrows
        arrow.addEventListener("mousedown", (e) => {
            const timeline = e.target.closest(".lgTimeline").querySelector(".lgTimelineItemWrap");

            // if ists the left arrow scroll left, else scroll right
            if (e.target.closest(".lgTimelineScroll").id == "left") {
                // if its already scroled max to the left set it to max right
                if (timeline.scrollLeft == 0) {
                    timeline.scrollLeft = timeline.scrollWidth - timeline.clientWidth;
                } else {
                    timeline.scrollBy(-timeline.clientWidth, 0);
                }
            } else {
                // if its already scroled max to the right set it to max left
                if (timeline.scrollLeft >= timeline.scrollWidth - timeline.clientWidth) {
                    timeline.scrollLeft = 0;
                } else {
                    timeline.scrollBy(timeline.clientWidth, 0);
                }
            }
        });
    });
});
