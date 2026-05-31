javascript:(function(){
    var style = document.createElement('style');
    style.innerHTML = `
        @keyframes cartoonWaddle { 
            0%, 100% { transform: rotate(-12deg) scale(1); } 
            50% { transform: rotate(12deg) scale(1.1, 0.9) translateY(-10px); } 
        }
        .goose-bubble { 
            position:fixed; background:white; border:4px solid black; 
            border-radius:20px; padding:8px 12px; font-family:'Arial Black'; 
            font-size:16px; z-index:1000001; box-shadow: 6px 6px 0 rgba(0,0,0,0.1);
        }
    `;
    document.head.appendChild(style);

    var goose = document.createElement('div');
    goose.style = 'position:fixed;width:70px;height:50px;background:#fff;border:5px solid #000;border-radius:30px 40px 25px 25px;z-index:999999;top:50%;left:50%;transition:all 1.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);pointer-events:none;animation:cartoonWaddle 1.2s infinite;box-shadow: 10px 10px 0 rgba(0,0,0,0.05);';
    
    /* Body and Head with Birthday Hat */
    goose.innerHTML = `
        <div style="width:25px;height:55px;background:#fff;border:5px solid #000;border-bottom:none;position:absolute;right:-15px;top:-40px;border-radius:15px 15px 0 0;">
            <!-- The Birthday Hat -->
            <div style="position:absolute; top:-35px; left:-5px; width:0; height:0; border-left:15px solid transparent; border-right:15px solid transparent; border-bottom:35px solid #ff4081; transform:rotate(-10deg);">
                <!-- Stripes -->
                <div style="position:absolute; top:10px; left:-8px; width:16px; height:4px; background:#fff; transform:rotate(10deg);"></div>
                <div style="position:absolute; top:20px; left:-12px; width:24px; height:4px; background:#fff; transform:rotate(10deg);"></div>
                <!-- Pom-Pom -->
                <div style="position:absolute; top:-8px; left:-6px; width:12px; height:12px; background:#ffd54f; border-radius:50%; border:2px solid black;"></div>
            </div>
            <!-- Face -->
            <div style="width:10px;height:10px;background:#000;border-radius:50%;position:absolute;right:6px;top:10px;"></div>
            <div style="width:28px;height:18px;background:#ffcc00;border:4px solid #000;position:absolute;right:-24px;top:15px;border-radius:8px;"></div>
        </div>
    `;
    document.body.appendChild(goose);

    function honk(x, y) {
        var b = document.createElement('div');
        b.className = 'goose-bubble';
        b.innerText = 'HONK! (Happy B-Day)';
        b.style.left = (x + 80) + 'px';
        b.style.top = (y - 50) + 'px';
        document.body.appendChild(b);
        setTimeout(() => b.remove(), 1500);
    }

    function move() {
        var x = Math.random() * (window.innerWidth - 120);
        var y = Math.random() * (window.innerHeight - 120);
        goose.style.left = x + 'px';
        goose.style.top = y + 'px';
        
        setTimeout(() => {
            if(Math.random() > 0.7) honk(x, y);
        }, 1800);
    }

    setInterval(move, 6000);

    window.addEventListener('touchstart', (e) => {
        goose.style.left = e.touches.clientX + 'px';
        goose.style.top = e.touches.clientY + 'px';
        honk(e.touches.clientX, e.touches.clientY);
    });
})();
