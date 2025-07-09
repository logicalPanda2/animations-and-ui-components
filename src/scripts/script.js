const title1 = document.getElementById("ui-ux-components-title");
const link1 = document.getElementById("ui-ux-components-link");
const title2 = document.getElementById("general-animations-title");
const link2 = document.getElementById("general-animations-link");
const title3 = document.getElementById("microinteractions-title");
const link3 = document.getElementById("microinteractions-link");
const titleMarginConstant = 60;
let isScrolling = false;

link1.onclick = () => {
    if(!isScrolling) {
        scrollToTitle(title1);
    }
}

link2.onclick = () => {
    if(!isScrolling) {
        scrollToTitle(title2);
    }
}

link3.onclick = () => {
    if(!isScrolling) {
        scrollToTitle(title3);
    }
}

function scrollToTitle(titleElement, currentPosition = window.pageYOffset) {
    isScrolling = true;
    let newPosition;
    let elementPosition = titleElement.getBoundingClientRect().top - titleMarginConstant;
    let targetPosition = currentPosition + elementPosition;
    let scrollSpeed = elementPosition / 50;
    newPosition = currentPosition + scrollSpeed;
    window.scrollTo(0, newPosition);
    if(currentPosition < targetPosition) {
        if(newPosition >= targetPosition) {
            isScrolling = false;
            return 0;
        } else {
            setTimeout(() => {
                scrollToTitle(titleElement, newPosition);
            }, 4);
        }
    } else {
        if(newPosition <= targetPosition) {
            isScrolling = false;
            return 0;
        } else {
            setTimeout(() => {
                scrollToTitle(titleElement, newPosition);
            }, 4);
        }
    }
}