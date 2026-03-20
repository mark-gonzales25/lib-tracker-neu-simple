// Hardcoded students
const students = [
  { email: "student1@neu.edu.ph", name: "Juan Dela Cruz", studentNo: "2021001", college: "Engineering" },
  { email: "student2@neu.edu.ph", name: "Maria Santos", studentNo: "2021002", college: "Arts & Sciences" },
  { email: "student3@neu.edu.ph", name: "Pedro Reyes", studentNo: "2021003", college: "Education" },
  { email: "student4@neu.edu.ph", name: "Ana Cruz", studentNo: "2021004", college: "Business" },
  { email: "student5@neu.edu.ph", name: "Mark Villanueva", studentNo: "2021005", college: "Engineering" },
  { email: "student6@neu.edu.ph", name: "Liza Manalo", studentNo: "2021006", college: "Arts & Sciences" },
  { email: "student7@neu.edu.ph", name: "Carlos Tan", studentNo: "2021007", college: "Education" },
  { email: "student8@neu.edu.ph", name: "Sofia Lim", studentNo: "2021008", college: "Business" },
  { email: "student9@neu.edu.ph", name: "Miguel Ramos", studentNo: "2021009", college: "Engineering" },
  { email: "student10@neu.edu.ph", name: "Andrea Bautista", studentNo: "2021010", college: "Arts & Sciences" },
  { email: "student11@neu.edu.ph", name: "Jose Garcia", studentNo: "2021011", college: "Education" },
  { email: "student12@neu.edu.ph", name: "Patricia Ong", studentNo: "2021012", college: "Business" },
  { email: "student13@neu.edu.ph", name: "Rafael Cruz", studentNo: "2021013", college: "Engineering" },
  { email: "student14@neu.edu.ph", name: "Isabella Flores", studentNo: "2021014", college: "Arts & Sciences" },
  { email: "student15@neu.edu.ph", name: "Daniel Mendoza", studentNo: "2021015", college: "Education" },
  { email: "student16@neu.edu.ph", name: "Clarisse Uy", studentNo: "2021016", college: "Business" },
  { email: "student17@neu.edu.ph", name: "Victor Lee", studentNo: "2021017", college: "Engineering" },
  { email: "student18@neu.edu.ph", name: "Angela Reyes", studentNo: "2021018", college: "Arts & Sciences" },
  { email: "student19@neu.edu.ph", name: "Francis Cruz", studentNo: "2021019", college: "Education" },
  { email: "student20@neu.edu.ph", name: "Monica Tan", studentNo: "2021020", college: "Business" }
];

const adminUser = { email: "jcesperanza@neu.edu.ph", role: "admin" };

// Hardcoded visitor logs (mix of purposes)
const visitors = [
  { name: "Juan Dela Cruz", email: "student1@neu.edu.ph", studentNo: "2021001", college: "Engineering", purpose: "Research", date: "2026-03-20" },
  { name: "Maria Santos", email: "student2@neu.edu.ph", studentNo: "2021002", college: "Arts & Sciences", purpose: "Borrow Books", date: "2026-03-19" },
  { name: "Pedro Reyes", email: "student3@neu.edu.ph", studentNo: "2021003", college: "Education", purpose: "Study", date: "2026-03-18" },
  { name: "Ana Cruz", email: "student4@neu.edu.ph", studentNo: "2021004", college: "Business", purpose: "Group Work", date: "2026-03-17" },
  { name: "Mark Villanueva", email: "student5@neu.edu.ph", studentNo: "2021005", college: "Engineering", purpose: "Borrow Books", date: "2026-03-16" },
  { name: "Liza Manalo", email: "student6@neu.edu.ph", studentNo: "2021006", college: "Arts & Sciences", purpose: "Research", date: "2026-03-15" },
  { name: "Carlos Tan", email: "student7@neu.edu.ph", studentNo: "2021007", college: "Education", purpose: "Study", date: "2026-03-14" },
  { name: "Sofia Lim", email: "student8@neu.edu.ph", studentNo: "2021008", college: "Business", purpose: "Borrow Books", date: "2026-03-13" },
  { name: "Miguel Ramos", email: "student9@neu.edu.ph", studentNo: "2021009", college: "Engineering", purpose: "Group Work", date: "2026-03-12" },
  { name: "Andrea Bautista", email: "student10@neu.edu.ph", studentNo: "2021010", college: "Arts & Sciences", purpose: "Research", date: "2026-03-11" },
  { name: "Jose Garcia", email: "student11@neu.edu.ph", studentNo: "2021011", college: "Education", purpose: "Borrow Books", date: "2026-03-10" },
  { name: "Patricia Ong", email: "student12@neu.edu.ph", studentNo: "2021012", college: "Business", purpose: "Study", date: "2026-03-09" },
  { name: "Rafael Cruz", email: "student13@neu.edu.ph", studentNo: "2021013", college: "Engineering", purpose: "Research", date: "2026-03-08" },
  { name: "Isabella Flores", email: "student14@neu.edu.ph", studentNo: "2021014", college: "Arts & Sciences", purpose: "Group Work", date: "2026-03-07" },
  { name: "Daniel Mendoza", email: "student15@neu.edu.ph", studentNo: "2021015", college: "Education", purpose: "Borrow Books", date: "2026-03-06" },
  { name: "Clarisse Uy", email: "student16@neu.edu.ph", studentNo: "2021016", college: "Business", purpose: "Research", date: "2026-03-05" },
  { name: "Victor Lee", email: "student17@neu.edu.ph", studentNo: "2021017", college: "Engineering", purpose: "Study", date: "2026-03-04" },
  { name: "Angela Reyes", email: "student18@neu.edu.ph", studentNo: "2021018", college: "Arts & Sciences", purpose: "Borrow Books", date: "2026-03-03" },
  { name: "Francis Cruz", email: "student19@neu.edu.ph", studentNo: "2021019", college: "Education", purpose: "Group Work", date: "2026-03-02" },
  { name: "Monica Tan", email: "student20@neu.edu.ph", studentNo: "2021020", college: "Business", purpose: "Research", date: "2026-03-01" }
];

// Navigation
function showLogin(role) {
  document.getElementById("main-page").classList.add("hidden");
  if (role === "student") document.getElementById("student-login").classList.remove("hidden");
  else document.getElementById("admin-login").classList.remove("hidden");
}

function goBack() {
  document.getElementById("student-login").classList.add("hidden");
  document.getElementById("admin-login").classList.add("hidden");
  document.getElementById("main-page").classList.remove("hidden");
}

function studentLogin() {
  const email = document.getElementById("student-email").value;
  const student = students.find(s => s.email === email);
  if (!student) {
    alert("Invalid student email");
    return;
  }
  document.getElementById("student-login").classList.add("hidden");
  document.getElementById("student-screen").classList.remove("hidden");
  document.getElementById("student-msg").innerText = "Welcome to NEU Library!";
}

function adminLogin() {
  const email = document.getElementById("admin-email").value;
  if (email !== adminUser.email) {
    alert("Invalid admin email");
    return;
  }
  document.getElementById("admin-login").classList.add("hidden");
  document.getElementById("admin-screen").classList.remove("hidden");
}

function logout() {
  document.getElementById("student-screen").classList.add("hidden");
  document.getElementById("admin-screen").classList.add("hidden");
  document.getElementById("main-page").classList.remove("hidden");
}

// Admin Dashboard Functions
function renderStats() {
  const statsDiv = document.getElementById("stats-cards");
  statsDiv.innerHTML = "";

  const totalVisitors = visitors.length;
  const byCollege = {};
  const byPurpose = {};

  visitors.forEach(v => {
    byCollege[v.college] = (byCollege[v.college] || 0) + 1;
    byPurpose[v.purpose] = (byPurpose[v.purpose] || 0) + 1;
  });

  statsDiv.innerHTML += `<div class="card">Total Visitors: ${totalVisitors}</div>`;
  for (let college in byCollege) {
    statsDiv.innerHTML += `<div class="card">${college}: ${byCollege[college]}</div>`;
  }
  for (let purpose in byPurpose) {
    statsDiv.innerHTML += `<div class="card">${purpose}: ${byPurpose[purpose]}</div>`;
  }
}

function renderVisitorLogs(filtered = visitors) {
  const table = document.getElementById("visitor-table");
  table.innerHTML = "<tr><th>Name</th><th>Email</th><th>Student No</th><th>College</th><th>Purpose</th><th>Date</th></tr>";
  filtered.forEach(v => {
    table.innerHTML += `<tr>
      <td>${v.name}</td>
      <td>${v.email}</td>
      <td>${v.studentNo}</td>
      <td>${v.college}</td>
      <td>${v.purpose}</td>
      <td>${v.date}</td>
    </tr>`;
  });
}

function renderUsers() {
  const table = document.getElementById("user-table");
  table.innerHTML = "<tr><th>Name</th><th>Email</th><th>Student No</th><th>College</th></tr>";
  students.forEach(s => {
    table.innerHTML += `<tr>
      <td>${s.name}</td>
      <td>${s.email}</td>
      <td>${s.studentNo}</td>
      <td>${s.college}</td>
    </tr>`;
  });
}

function searchLogs() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = visitors.filter(v =>
    v.name.toLowerCase().includes(query) ||
    v.email.toLowerCase().includes(query) ||
    v.studentNo.toLowerCase().includes(query) ||
    v.college.toLowerCase().includes(query) ||
    v.purpose.toLowerCase().includes(query)
  );
  renderVisitorLogs(filtered);
}

// Simple date filtering (today/week/month/year)
function filterLogs(range) {
  const today = new Date("2026-03-20"); // fixed reference date for demo
  let filtered = visitors;

  if (range !== "all") {
    filtered = visitors.filter(v => {
      const visitDate = new Date(v.date);
      const diffDays = (today - visitDate) / (1000 * 60 * 60 * 24);

      if (range === "today") return diffDays === 0;
      if (range === "week") return diffDays <= 7;
      if (range === "month") return diffDays <= 30;
      if (range === "year") return diffDays <= 365;
    });
  }
  renderVisitorLogs(filtered);
}

function filterStats(range) {
  // For demo purposes, just re-render stats (could be extended with date filtering)
  renderStats();
}
