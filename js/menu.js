// アコーディオンメニュー
$(function () {
    //通常時はコンテンツを非表示
    $(".accordion-content").css("display", "none");

    //js-accordion-titleをクリックしたとき
    $(".js-accordion-title").click(function () {
        // クリックしたjs-accordion-title以外からopenクラスをとる
        $(".js-accordion-title").not(this).removeClass("open");
        //クリックしたjs-accordion-title以外のcontentを閉じる
        $(".js-accordion-title").not(this).next().slideUp(300);
        //thisにopenクラスを付与する
        $(this).toggleClass("open");
        //thisのcontentを展開し開いているcontentは閉じる
        $(this).next().slideToggle(300);
    });
});

// ハンバーガーメニュー
$(function () {
    $(".btn-hamburger").on('click', function () {
        // btn-hamburgerとham-menuにshowクラスを付与する
        $(".btn-hamburger , .ham-menu").toggleClass('show');
    });

    // // マイページ用ハンバーガーメニュー
    $(".btn-ham-mp").on('click', function () {
        // btn-ham-mpとmp-menu-mbにshowクラスを付与する
        $(".btn-ham-mp, .mp-menu--mb").toggleClass('show');
        // showクラスがあるか見る
        if ($(".btn-ham-mp").hasClass('show')) {
            // あるときはbtn-ham-sのテキストを「とじる」にする
            $(".btn-ham-s").html('とじる');
            // ないときはbtn-ham-sのテキストを「メニュー」にする
        } else {
            $(".btn-ham-s").html('メニュー');
        }
    });
});

// TOPへもどるボタン
$(function () {
    const pagetop = $('#btn-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

// 下スクロール時非表示
$(function () {
    let pos = 0;
    let nav = $('.header-nav-scroll');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < pos) {
            //上スクロールしたらfadeIn
            nav.fadeIn();
        } else {
            //下スクロールしたらfadeOut
            nav.fadeOut();
        }
        pos = $(this).scrollTop();
    });
});

