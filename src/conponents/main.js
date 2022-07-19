const editorButton = document.querySelectorAll('.block__button');
const editorImg = document.querySelectorAll('.block__img');

editorButton[0].addEventListener('click',()=>
{
   editorImg[0].style.display='initial';
   editorImg[1].style.display='none';
   editorButton[0].style.backgroundColor='#E7E9EB';
   editorButton[1].style.backgroundColor='transparent';
});
editorButton[1].addEventListener('click',()=>
{
   editorImg[1].style.display='initial';
   editorImg[0].style.display='none';
   editorButton[1].style.backgroundColor='#E7E9EB';
   editorButton[0].style.backgroundColor='transparent';
});