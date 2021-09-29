function editElement(element, match, replacer) {
  const txt = element.textContent;
  const matcher = new RegExp(match, "g");
  element.textContent = txt.replace(matcher, replacer);
}
