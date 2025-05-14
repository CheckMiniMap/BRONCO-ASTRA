export function scrollAndHighlight({ query, targetId }) {
  if (!query || !targetId) return;

  const container = document.getElementById(targetId);
  if (!container) {
    console.warn(`No element found with id "${targetId}"`);
    return;
  }

  container.scrollIntoView({ behavior: 'smooth' });

  const walkAndHighlight = (node) => {
    if (node.nodeType === 3) {
      const regex = new RegExp(`(${query})`, 'gi');
      if (regex.test(node.nodeValue)) {
        const span = document.createElement('span');
        span.innerHTML = node.nodeValue.replace(regex, '<mark>$1</mark>');
        node.replaceWith(span);
      }
    } else if (node.nodeType === 1 && node.childNodes) {
      [...node.childNodes].forEach(walkAndHighlight);
    }
  };

  walkAndHighlight(container);
}
