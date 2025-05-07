export const getElementHeightWithMargin = (element) => {
  const computedStyle = window.getComputedStyle(element);
  const height = element.offsetHeight;
  const marginTop = parseInt(computedStyle.marginTop, 10) || 0;
  const marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;

  return height + marginTop + marginBottom;
}

export const getElementYPosition = (element, topOffset) => {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //const elementHeight = getElementHeightWithMargin(element);
  return rect.top + scrollTop - topOffset; // - 147
}