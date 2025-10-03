const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const profileDiv = document.getElementById("profileDiv");
const loginDiv = document.getElementById("loginDiv");
const logoutBtn = document.getElementById("logoutBtn");

loginForm.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // إرسال البيانات للباك اند للتحقق من البريد وكلمة المرور
  fetch("/login", {  // رابط الباك اند (تعدليه حسب السيرفر)
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    if(data.success){
      // عرض البروفايل بعد نجاح تسجيل الدخول
      document.getElementById("profileName").textContent = data.name;
      document.getElementById("profileEmail").textContent = data.email;
      document.getElementById("profileDept").textContent = data.department;

      loginDiv.style.display = "none";
      profileDiv.style.display = "block";
      errorMsg.textContent = "";
    } else {
      errorMsg.textContent = "Invalid email or password.";
    }
  })
  .catch(err => {
    console.error("Error:", err);
    errorMsg.textContent = "Server error. Please try again later.";
  });
});

logoutBtn.addEventListener("click", function(){
  loginDiv.style.display = "block";
  profileDiv.style.display = "none";
  loginForm.reset();
  errorMsg.textContent = "";
});
