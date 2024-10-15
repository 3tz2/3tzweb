document.addEventListener('DOMContentLoaded', () => {
    const copyIcon = document.getElementById('copyIcon');
    const tooltip = document.getElementById('tooltip');
    const popup = document.getElementById('popup');
    let circle = document.getElementById('circle');

    // لعرض التلميح عند تمرير الفأرة على الأيقونة
    copyIcon.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    copyIcon.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // لنسخ النص إلى الحافظة عند النقر على الأيقونة
    copyIcon.addEventListener('click', () => {
        navigator.clipboard.writeText("3tz.")
            .then(() => {
                popup.style.display = 'block';
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 2000);
            })
            .catch(err => {
                console.error('فشل النسخ إلى الحافظة:', err);
            });
    });

    // تأثير الفأرة
    document.addEventListener('mousemove', (event) => {
        const mousePosition = { x: event.pageX, y: event.pageY };

        circle.style.display = 'block';
        circle.style.left = `${mousePosition.x}px`;
        circle.style.top = `${mousePosition.y}px`;
    });

    setInterval(() => {
        // يمكن إضافة أي تعديل لتأخير الحركة إذا لزم
    }, 6);
});
// 

// 

document.addEventListener('DOMContentLoaded', function() {
    const gameElements = document.querySelectorAll('.game'); // استخدام querySelectorAll للحصول على جميع العناصر

    gameElements.forEach(function(gameElement) {
        gameElement.addEventListener('mouseenter', function() {
            gameElement.classList.add('hovered'); // إضافة الفئة عند دخول الماوس
        });

        gameElement.addEventListener('mouseleave', function() {
            gameElement.classList.remove('hovered'); // إزالة الفئة عند مغادرة الماوس
        });
    });
});
// 
// 
// 
document.addEventListener('DOMContentLoaded', function() {
    const roleNames = document.querySelectorAll('.roleName'); // الحصول على جميع العناصر

    roleNames.forEach(function(roleName) {
        roleName.addEventListener('mouseenter', function() {
            // إضافة تأثير الـ hover للجميع
            roleNames.forEach(function(item) {
                item.classList.add('hovered'); // إضافة الفئة عند دخول الماوس
            });
        });

        roleName.addEventListener('mouseleave', function() {
            // إزالة تأثير الـ hover للجميع
            roleNames.forEach(function(item) {
                item.classList.remove('hovered'); // إزالة الفئة عند مغادرة الماوس
            });
        });
    });
});
// 
// 

// 

document.addEventListener('DOMContentLoaded', function() {
    const statusButtons = document.querySelectorAll('.status-button'); // الحصول على جميع الأزرار

    statusButtons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            // إضافة تأثير hover للجميع
            statusButtons.forEach(function(item) {
                item.classList.add('hovered'); // إضافة الفئة عند دخول الماوس
            });
        });

        button.addEventListener('mouseleave', function() {
            // إزالة تأثير hover للجميع
            statusButtons.forEach(function(item) {
                item.classList.remove('hovered'); // إزالة الفئة عند مغادرة الماوس
            });
        });
    });
});
