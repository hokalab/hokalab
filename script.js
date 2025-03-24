// DOM要素が読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーのスクロール処理
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // モバイルメニューの設定
    setupMobileMenu();

    // スムーススクロール
    setupSmoothScroll();

    // 要素のフェードインアニメーション
    setupFadeInAnimation();
    
    // 手書き風のコメントをランダムに表示
    setupHandwrittenNotes();
    
    // 勉強中バッジの動き
    setupLearningBadge();
});

// モバイルメニューの設定
function setupMobileMenu() {
    const header = document.querySelector('header');
    const nav = document.querySelector('.main-nav');
    
    // モバイルメニューボタンの作成
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
    
    // ヘッダーにモバイルメニューボタンを追加
    header.querySelector('.container').appendChild(mobileMenuBtn);
    
    // モバイルメニューボタンのクリックイベント
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        if (nav.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            mobileMenuBtn.setAttribute('aria-label', 'メニューを閉じる');
        } else {
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
        }
    });
    
    // ウィンドウサイズが変更されたときの処理
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
        }
    });
}

// スムーススクロールの設定
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // モバイルメニューが開いている場合は閉じる
                const nav = document.querySelector('.main-nav');
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
                    }
                }
                
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // ちょっとずれた位置にスクロール（手作り感を出すため）
                const randomOffset = Math.floor(Math.random() * 20) - 10;
                
                window.scrollTo({
                    top: targetPosition + randomOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// フェードインアニメーションの設定
function setupFadeInAnimation() {
    // アニメーション対象の要素
    const fadeElements = document.querySelectorAll('.service-card, .about-content, .cta-note, .footer-content');
    
    // Intersection Observerの設定
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ランダムな遅延を追加（手作り感を出すため）
                const delay = Math.random() * 0.5;
                entry.target.style.transitionDelay = `${delay}s`;
                
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // 各要素にフェードエレメントクラスを追加し、監視を開始
    fadeElements.forEach(element => {
        element.classList.add('fade-element');
        fadeInObserver.observe(element);
    });
}

// 手書き風のコメントをランダムに表示
function setupHandwrittenNotes() {
    const comments = [
        "まだ勉強中です...",
        "バグがあったらごめんなさい！",
        "コードは日々改善中！",
        "初心者ですが頑張ってます！",
        "アドバイスください！"
    ];
    
    // 手書きコメントを追加する場所
    const serviceSection = document.querySelector('.services .section-header');
    const aboutSection = document.querySelector('.about .section-header');
    
    if (serviceSection && !serviceSection.querySelector('.handwritten-note')) {
        const randomComment = comments[Math.floor(Math.random() * comments.length)];
        const noteElement = document.createElement('div');
        noteElement.className = 'handwritten-note';
        noteElement.textContent = randomComment;
        
        // ランダムな回転角度を設定
        const rotation = Math.floor(Math.random() * 6) - 3;
        noteElement.style.transform = `rotate(${rotation}deg)`;
        
        serviceSection.appendChild(noteElement);
    }
    
    if (aboutSection && !aboutSection.querySelector('.handwritten-note')) {
        const randomComment = comments[Math.floor(Math.random() * comments.length)];
        const noteElement = document.createElement('div');
        noteElement.className = 'handwritten-note';
        noteElement.textContent = randomComment;
        
        // ランダムな回転角度を設定
        const rotation = Math.floor(Math.random() * 6) - 3;
        noteElement.style.transform = `rotate(${rotation}deg)`;
        
        aboutSection.appendChild(noteElement);
    }
}

// 勉強中バッジの動き
function setupLearningBadge() {
    const badge = document.querySelector('.learning-badge');
    if (!badge) return;
    
    // マウスが近づいたときに少し動く
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const badgeRect = badge.getBoundingClientRect();
        const badgeCenterX = badgeRect.left + badgeRect.width / 2;
        const badgeCenterY = badgeRect.top + badgeRect.height / 2;
        
        const distanceX = mouseX - badgeCenterX;
        const distanceY = mouseY - badgeCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // マウスが近い場合のみ反応
        if (distance < 200) {
            const moveX = distanceX * 0.05;
            const moveY = distanceY * 0.05;
            const rotation = (distanceX * 0.02) + 5; // 基本の回転角度は5度
            
            badge.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotation}deg)`;
        } else {
            badge.style.transform = 'rotate(5deg)';
        }
    });
}

// アクセシビリティのためのキーボードナビゲーション
document.addEventListener('keydown', function(e) {
    // Escキーでモバイルメニューを閉じる
    if (e.key === 'Escape') {
        const nav = document.querySelector('.main-nav');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
            }
        }
    }
});

// ページ読み込み完了時のローディングアニメーション
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // ちょっとした「バグ」を演出（初心者感を出すため）
    setTimeout(function() {
        const doodles = document.querySelectorAll('.doodle');
        if (doodles.length > 0) {
            const randomDoodle = doodles[Math.floor(Math.random() * doodles.length)];
            randomDoodle.style.animation = 'none';
            
            // 少し待ってから「修正」
            setTimeout(function() {
                randomDoodle.style.animation = 'float 3s ease-in-out infinite';
            }, 2000);
        }
    }, 5000);
});