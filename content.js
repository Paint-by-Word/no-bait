setInterval(() => {
  document
    .querySelector("img[alt='Ugnius Malūkas']")
    .parentElement.parentElement.parentElement.parentElement.parentElement.setAttribute(
      "style",
      "display: none !important;"
    );
}, 1000);
