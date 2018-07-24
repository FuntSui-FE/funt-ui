export default {
  getScrollEventTarget(element, rootParent = window) {
    let currentNode = element;
    while (
      currentNode &&
      currentNode.tagName !== 'HTML' &&
      currentNode.tagName !== 'BODY' &&
      currentNode.nodeType === 1 &&
      currentNode !== rootParent
    ) {
      const overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }
      currentNode = currentNode.parentNode;
    }
    return rootParent;
  },
  getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  }
};
