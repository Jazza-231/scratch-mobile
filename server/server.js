const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/projects/:projectId", async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const response = await fetch(
      `https://api.scratch.mit.edu/projects/${projectId}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
