const projectIframe = document.querySelector(".projectIframe");
const idInput = document.querySelector(".projectIdInput");
const idButton = document.querySelector(".submitId");

function setId() {
  const id = idInput.value;

  if (id) projectIframe.src = `https://turbowarp.org/${id}/embed`;
}

idInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    setId();
    e.target.blur();
  }
});

idButton.addEventListener("click", setId);

console.log(
  fetch(`https://api.scratch.mit.edu/projects/1234`, { mode: "no-cors" })
);
