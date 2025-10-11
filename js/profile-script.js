// عرض البيانات من sessionStorage أو بيانات تجريبية
document.addEventListener("DOMContentLoaded", () => {
  const nameField = document.getElementById("empName");
  const emailField = document.getElementById("empEmail");
  const passField = document.getElementById("empPassword");

  // جلب بيانات من التسجيل إن وجدت
  nameField.value = sessionStorage.getItem("username") || "Employee Name";
  emailField.value = sessionStorage.getItem("email") || "example@amanah.gov.sa";
  passField.value = sessionStorage.getItem("password") || "";

  // زر إظهار / إخفاء الباسوورد
  const toggleBtn = document.getElementById("togglePass");
  toggleBtn.addEventListener("click", () => {
    if (passField.type === "password") {
      passField.type = "text";
      toggleBtn.textContent = "🙈";
    } else {
      passField.type = "password";
      toggleBtn.textContent = "👁";
    }
  });
});

// زر تسجيل الخروج
function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";
}
