let textHover = [];
textHover = document.querySelectorAll('.js_hover');
let body = document.getElementsByTagName('body');

for( let i = 0;  i < textHover.length; i++) {
    // hover
    let d = textHover[i].getAttribute('data-num');
    let target_l = '_c'+d;
    let target_d = 'd'+d;
    textHover[i].addEventListener('mouseenter', () => {
        textHover[i].classList.add('hover');
        // 連動先
        textHover[i].parentNode.classList.add('hover');
        document.getElementById(target_l).classList.add('hover');
    }, false);
    textHover[i].addEventListener('mouseleave', () => {
        textHover[i].classList.remove('hover');
        // 連動先
        textHover[i].parentNode.classList.remove('hover');
        document.getElementById(target_l).classList.remove('hover');
    }, false);

    // モーダル
    textHover[i].onclick = function () {
        document.getElementById(target_d).classList.add('show');
        body[0].setAttribute('class','overlay');
        document.getElementById(target_l).classList.add('now');
    };
}

// 逆向きhover
let lineHover = [];
lineHover = document.querySelectorAll('.js_hover_line');

for( let i = 0;  i < lineHover.length; i++) {
    let ld = lineHover[i].getAttribute('data-name');
    let target_ld = ld.replace('c','');
    lineHover[i].addEventListener('mouseenter', () => {
        lineHover[i].classList.add('hover');
        // 連動先
        document.getElementById(target_ld).classList.add('hover');
        document.getElementById(target_ld).parentNode.classList.add('hover');
    }, false);
    lineHover[i].addEventListener('mouseleave', () => {
        lineHover[i].classList.remove('hover');
        // 連動先
        document.getElementById(target_ld).classList.remove('hover');
        document.getElementById(target_ld).parentNode.classList.remove('hover');
    }, false);
}

// モーダルクローズ
let modalClose = [];
modalClose = document.getElementsByClassName('close');
for (i = 0; i < modalClose.length; i++ ) {
    let modal_c = "dd_0"+(i+1);
    let moal_l = "_cd_0"+(i+1);
    modalClose[i].onclick = function(){
        body[0].removeAttribute('class');
        document.getElementById(modal_c).classList.remove('show');
        document.getElementById(moal_l).classList.remove('now');
    };
}

// タブ
function tabOpen(tab) {
    let t = tab;
    let p = [];
    p = document.querySelectorAll('.js_tab');
    for(i=0; i<p.length; i++) {
        if (p[i].classList.contains('page_show')){
            p[i].classList.remove('page_show');
        }
    }
    document.getElementById(t).classList.add('page_show');
}

// 初期画面遷移
let pageDown = document.getElementById('open_btn');
let mainVisual = document.getElementsByClassName('main_visual');
pageDown.onclick = function(){
    mainVisual[0].classList.add('pageDown');
    mainVisual[0].parentNode.classList.add('bg_white'); 
};
