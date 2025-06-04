import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Log startup information
console.log("Starting server...");
console.log("Environment:", process.env.NODE_ENV);
console.log("Current directory:", __dirname);

// Serve static files from the dist directory
app.use(express.static(join(__dirname, "dist")));

// Add basic health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Handle all routes by serving index.html
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

// Try different port configurations
const port =
  process.env.WEBSITES_PORT ||
  process.env.PORT ||
  process.env.HTTP_PLATFORM_PORT ||
  process.env.SERVER_PORT ||
  8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Serving files from: ${join(__dirname, "dist")}`);
  console.log("Available environment variables:", Object.keys(process.env));
});
