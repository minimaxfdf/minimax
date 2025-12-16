// =======================================================
// == THÔNG BÁO BẢO TRÌ ==
// =======================================================

(function() {
    'use strict';
    
    // Tạo overlay để hiển thị thông báo bảo trì
    const maintenanceOverlay = document.createElement('div');
    maintenanceOverlay.id = 'maintenance-overlay';
    maintenanceOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 999999;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
    `;
    
    // Tạo container cho nội dung thông báo
    const maintenanceContent = document.createElement('div');
    maintenanceContent.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        text-align: center;
        max-width: 600px;
        color: #ffffff;
        animation: pulse 2s ease-in-out infinite;
    `;
    
    // Thêm animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .maintenance-icon {
            animation: spin 2s linear infinite;
            font-size: 64px;
            margin-bottom: 20px;
        }
    `;
    document.head.appendChild(style);
    
    // Nội dung thông báo
    maintenanceContent.innerHTML = `
        <div class="maintenance-icon">🔧</div>
        <h1 style="margin: 0 0 20px 0; font-size: 32px; font-weight: bold;">
            Tool Đang Bảo Trì
        </h1>
        <p style="margin: 0 0 30px 0; font-size: 18px; line-height: 1.6;">
            Chúng tôi đang thực hiện bảo trì và nâng cấp hệ thống để mang lại trải nghiệm tốt hơn cho bạn.
        </p>
        <div style="background: rgba(255, 255, 255, 0.2); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 16px; font-weight: bold;">
                ⏰ Thời gian dự kiến: Sẽ hoàn thành trong thời gian sớm nhất
            </p>
        </div>
        <p style="margin: 0; font-size: 14px; opacity: 0.9;">
            Cảm ơn bạn đã kiên nhẫn chờ đợi!
        </p>
    `;
    
    maintenanceOverlay.appendChild(maintenanceContent);
    
    // Thêm vào body
    document.body.appendChild(maintenanceOverlay);
    
    // Ngăn chặn mọi tương tác với trang web
    maintenanceOverlay.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Ngăn chặn scroll
    document.body.style.overflow = 'hidden';
    
    console.log('🔧 Tool đang trong chế độ bảo trì');
})();


