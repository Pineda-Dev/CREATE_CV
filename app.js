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

function loadPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById("photoPreview").src = reader.result;
  };
  reader.readAsDataURL(file);
}
