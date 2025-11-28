// ==UserScript==
// @name         DUC LOI - Clone Voice (Đang Bảo Trì)
// @namespace    mmx-secure
// @version      36.1
// @description  Thông báo bảo trì hệ thống.
// @author       HUỲNH ĐỨC LỢI ( Zalo: 0835795597)
// @match        https://www.minimax.io/audio*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=minimax.io
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Hàm tạo màn hình bảo trì
    function showMaintenanceScreen() {
        // Tạo phần tử overlay bao phủ toàn màn hình
        const overlay = document.createElement('div');
        overlay.id = 'mmx-maintenance-overlay';
        
        // CSS trực tiếp cho overlay
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(15, 23, 42, 0.98); /* Màu nền tối */
            z-index: 2147483647; /* Z-index cao nhất có thể */
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            backdrop-filter: blur(10px);
        `;

        // Nội dung HTML của thông báo (Đã bỏ dòng tên Dev)
        overlay.innerHTML = `
            <div style="
                background: #1e293b; 
                padding: 40px; 
                border-radius: 20px; 
                border: 1px solid #334155; 
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); 
                max-width: 500px; 
                width: 90%;
                text-align: center;
                animation: popIn 0.5s ease-out;
            ">
                <div style="font-size: 64px; margin-bottom: 20px; animation: bounce 2s infinite;">🚧</div>
                
                <h1 style="
                    margin: 0 0 15px 0; 
                    color: #38bdf8; 
                    font-size: 28px; 
                    font-weight: 800; 
                    text-transform: uppercase;
                    letter-spacing: 1px;
                ">Hệ Thống Đang Bảo Trì</h1>
                
                <p style="
                    font-size: 16px; 
                    color: #e2e8f0; 
                    line-height: 1.6; 
                    margin-bottom: 25px;
                ">
                    Tool đang được cập nhật tính năng mới và nâng cấp hiệu suất để phục vụ bạn tốt hơn.
                </p>
                
                <div style="
                    background: rgba(251, 191, 36, 0.1); 
                    border: 1px solid rgba(251, 191, 36, 0.3);
                    color: #fbbf24; 
                    padding: 12px; 
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 14px;
                ">
                    ⏳ Chúng tôi sẽ quay lại ngay sau ít phút!
                </div>
            </div>
            
            <style>
                @keyframes popIn {
                    0% { transform: scale(0.8); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            </style>
        `;

        // Chèn vào body
        if (document.body) {
            document.body.appendChild(overlay);
            // Khóa cuộn trang web gốc
            document.body.style.overflow = 'hidden'; 
        }
    }

    // Chờ một chút để đảm bảo trang web load xong rồi mới hiện thông báo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showMaintenanceScreen);
    } else {
        showMaintenanceScreen();
    }

    // Đảm bảo thông báo luôn nằm trên cùng ngay cả khi web tải thêm nội dung dynamic
    setInterval(() => {
        const overlay = document.getElementById('mmx-maintenance-overlay');
        if (!overlay) {
            showMaintenanceScreen();
        }
    }, 2000);

})();
