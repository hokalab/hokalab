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
    
    // モバイルメニューのスタイル
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary-color);
            cursor: pointer;
            padding: 0.5rem;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
            }
            
            .main-nav {
                display: none;
                width: 100%;
                margin-top: 1rem;
            }
            
            .main-nav.active {
                display: block;
            }
            
            header .container {
                flex-wrap: wrap;
            }
        }
    `;
    document.head.appendChild(style);
    
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
                
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
                }
                
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// フェードインアニメーションの設定
function setupFadeInAnimation() {
    // アニメーション対象の要素
    const fadeElements = document.querySelectorAll('.service-card, .about-content, .cta-buttons, .footer-content');
    
    // Intersection Observerの設定
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
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

// アクセシビリティのためのキーボードナビゲーション
document.addEventListener('keydown', function(e) {
    // Escキーでモバイルメニューを閉じる
    if (e.key === 'Escape') {
        const nav = document.querySelector('.main-nav');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
        }
    }
});

// ページ読み込み完了時のローディングアニメーション
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // ページ読み込み完了時のスタイル
    const style = document.createElement('style');
    style.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});