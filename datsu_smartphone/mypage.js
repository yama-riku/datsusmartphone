// const buttonOpen = document.getElementById('modalOpen');
// const modal = document.getElementById('easyModal');
// const buttonClose = document.getElementsByClassName('modalClose')[0];
// const buttonSubmit = document.getElementsByClassName('modalData');
// //ボタンがクリックされた時
// buttonOpen.addEventListener('click', modalOpen);
// function modalOpen() {
//     modal.style.display = 'block';
// };

// // 閉じるがクリックされた時
// buttonClose.addEventListener('click', modalClose);
// function modalClose() {
//     modal.style.display = 'none';
// };


// //モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose);
// function outsideClose(e) {
//     if (e.target == modal) {
//     modal.style.display = 'none';
//     };
// };

// // モーダルに対象日のデータを表示
// $('#inputModal').on('show.bs.modal',function(event) {
//     var button = $(event.relatedTarget)
//     var target_day = button.data('day')
//     console.log(target_day)
// })


// // ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
// const btn = document.querySelector('.btn');
// const modal = document.querySelector('.modal');
// const closeBtn = document.querySelector('.close');
// const overlay = document.querySelector('.overlay');

// // ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
// btn.addEventListener('click', function(e){
//   // aタグのデフォルトの機能を停止する
//   e.preventDefault();
//   // モーダルとオーバーレイにactiveクラスを付与する
//   modal.classList.add('active');
//   overlay.classList.add('active');
// });

// // モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
// closeBtn.addEventListener('click', function(){
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// });

// // オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
// overlay.addEventListener('click', function() {
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// });
