export const isElementScrolledPast = (element: HTMLElement | Element) => {
    return element.getBoundingClientRect().top <= window.innerHeight && element.getBoundingClientRect().bottom <= 0;
}

export const isScrollBarAtTopOfPage = () => {
    return window.scrollY === 0;
}