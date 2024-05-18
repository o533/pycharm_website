alert('hi')
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password match
    if (username === 'عمر' && password === '123') {
        alert('تم تسجيل الدخول بنجاح!');
        // يمكنك هنا توجيه المستخدم إلى صفحة أخرى بعد تسجيل الدخول
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة. الرجاء المحاولة مرة أخرى.');
    }
});
