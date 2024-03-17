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

const serverUrl = "https://scratch-mobile.vercel.app/";

async function fetchProjectData(projectId) {
  try {
    const response = await fetch(`${serverUrl}/api/projects/${projectId}`);
    const data = await response.json();
    console.log("Project data:", data);
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
}

console.log(fetchProjectData(1234));
