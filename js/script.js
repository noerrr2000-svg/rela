document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // منع التحديث التلقائي للصفحة

  // جمع بيانات المستخدم
  const data = {
    username: document.getElementById("username").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim(),
  };

  // التحقق من البيانات
  if (!data.username || !data.email || !data.password) {
    alert("Please fill in all fields.");
    return;
  }

  // حفظ البيانات في sessionStorage
  sessionStorage.setItem('auth', '1');
  sessionStorage.setItem('username', data.username);
  sessionStorage.setItem('email', data.email); // إذا أردت تخزين الإيميل أيضًا

  // عرض البيانات في الكونسول (للتأكد)
  console.log("Form data:", data);

  // تحويل الصفحة إلى home.html
  window.location.href = 'home.html'; 
});
