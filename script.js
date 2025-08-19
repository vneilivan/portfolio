// 🌙 Dark mode toggle
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkModeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// 🎯 Project Data (easy to expand!)
const projects = [
  {
    key: "todo",
    title: "To-Do List App",
    short: "A simple app to manage tasks.",
    description: "A simple app to add, remove, and track daily tasks. Built using HTML, CSS, and JavaScript."
  },
  {
    key: "quiz",
    title: "Quiz App",
    short: "A fun interactive quiz using JavaScript.",
    description: "An interactive quiz with multiple-choice questions and a score tracker."
  },
  {
    key: "weather",
    title: "Weather App",
    short: "Check the weather of any city.",
    description: "Fetches live weather data from an API and displays temperature, condition, and icons."
  }
];

// 🎨 Render Projects Dynamically
const projectList = document.getElementById("projectList");
projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.setAttribute("data-project", project.key);
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.short}</p>
  `;
  projectList.appendChild(card);
});

// ⚡ Modal functionality
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

// Open modal when project is clicked
document.addEventListener("click", (e) => {
  if (e.target.closest(".project-card")) {
    const projectKey = e.target.closest(".project-card").getAttribute("data-project");
    const project = projects.find(p => p.key === projectKey);
    if (project) {
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modal.style.display = "flex";
    }
  }
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// Reveal sections on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
});
