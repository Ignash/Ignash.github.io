"use strict";
window.onload=function(){
  var comments=document.createElement('div');
  comments.setAttribute('class', 'all-comments');
  var form=document.querySelector('.form');
  var parents=form.parentNode;
  parents.insertBefore(comments, form);



function addCommet(){

  var date={
    mail:document.querySelector('input[name="email"]').value,
    name:document.querySelector('input[name="NameFamile"]').value,
    text:document.querySelector('textarea[name="comment"]').value
  }

  var newCommet=document.createElement('div');
  newCommet.setAttribute('class', 'next-comment');

  var newHeader=document.createElement('header');

  var newP=document.createElement('p');

  var newA=document.createElement('a');
  newA.setAttribute('href', 'mailto:'+date.mail);
  newA.innerHTML='<strong>'+date.name+'</strong>';

  newP.appendChild(newA);

  var newButton1=document.createElement('button');
  newButton1.setAttribute('type','button');
  newButton1.setAttribute('name','remove');
  newButton1.appendChild(document.createTextNode('Удалить'));

  var newButton2=document.createElement('button');
  newButton2.setAttribute('type','button');
  newButton2.setAttribute('name','add_changes');
  newButton2.setAttribute('disabled','disabled');
  newButton2.appendChild(document.createTextNode('Редактировать'));

  var butt=document.createElement('div');
  butt.getAttribute('class', 'button');
  butt.appendChild(newButton1);
  butt.appendChild(newButton2);

  newHeader.appendChild(newP);
  newHeader.appendChild(butt);

  newCommet.appendChild(newHeader);
  newCommet.appendChild(document.createElement('p')).innerText=date.text;

  var child=document.querySelector('.all-comments').firstChild;
  document.querySelector('.all-comments').insertBefore(newCommet, child);
};

var but=document.querySelector('button[name="add"]');
but.addEventListener('click',addCommet);

document.querySelector('.all-comments').onclick=function (event){
  if (event.target.name==='remove')
    if (confirm('Вы действительно хотите удалить комментарий?'))
    {
      var rem = event.target.parentNode.parentNode.parentNode;
      rem.parentNode.removeChild(rem);
    }

};
}
