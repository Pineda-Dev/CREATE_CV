function update(field, value) {
  const map = {
    name: "namePreview",
    title: "titlePreview",
    email: "emailPreview",
    phone: "phonePreview",
    location: "locationPreview",
    summary: "summaryPreview",
    experience: "experiencePreview",
    education: "educationPreview",
    skills: "skillsPreview",
    projects: "projectsPreview"
  };

  const el = document.getElementById(map[field]);
  if (el) el.innerText = value;
}

function setTheme(theme) {
  document.body.className = "theme-" + theme;
}

function setPremiumTemplate(template) {
  const cv = document.getElementById("cv");

  cv.classList.remove(
    "template-modern",
    "template-creative",
    "template-executive"
  );

  cv.classList.add("template-" + template);
}

function downloadPDF() {
  html2pdf().from(document.getElementById("cv")).save("cv.pdf");
}

/* FOTO DE PERFIL */
function loadPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById("photoPreview").src = reader.result;
  };
  reader.readAsDataURL(file);
}


function setLayout(type) {
  const cv = document.getElementById("cv");
  cv.classList.remove("one-column", "two-column");
  cv.classList.add(type + "-column");
}

function setLanguage(lang) {
  document.querySelectorAll("[data-es]").forEach(el => {
    el.innerText = el.dataset[lang];
  });
}
