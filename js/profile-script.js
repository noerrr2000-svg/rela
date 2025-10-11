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

  // جلب العناصر
  const passField = document.getElementById("empPassword");
  const toggleBtn = document.getElementById("togglePass");

  // تحقق إذا كان الحقل من النوع password أو text
  toggleBtn.addEventListener("click", () => {
    if (passField.type === "password") {
      passField.type = "text";  // عرض كلمة المرور
      toggleBtn.textContent = "🙈";  // تغيير الأيقونة
    } else {
      passField.type = "password";  // إخفاء كلمة المرور
      toggleBtn.textContent = "👁";  // إعادة الأيقونة
    }
  });
});

// زر تسجيل الخروج
function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";
}

