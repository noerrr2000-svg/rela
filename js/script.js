


document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); // يمنع تحديث الصفحة التلقائي

      // جمع بيانات المستخدم
      const data = {
        username: document.getElementById("username").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim()
      };

      // التحقق من الحقول
      if (!data.username || !data.email || !data.password) {
        alert("Please fill in all fields.");
        return;
      }

      // حفظ بيانات الدخول (مثلاً لتجربة فقط)
      sessionStorage.setItem('auth', '1');
      sessionStorage.setItem('username', data.username);

      // عرض البيانات في الكونسول (تقدرين تشوفينها في المتصفح)
      console.log("Form data:", data);

      // تحويل المستخدم للصفحة الرئيسية
      window.location.href = 'home.html';
    });
