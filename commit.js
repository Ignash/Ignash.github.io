window.onload = function(){
  "use strict"

  $('.form').before($('<div>').attr('class', 'all-comments'))



  // var date={
  //   mail:$('input[name="email"]').val(),
  //   name:$('input[name="NameFamile"]').val(),
  //   text:$('textarea[name="comment"]').val()
  // };
  $('button[name="add"]').click(
  $('.all-comments:first-child')
  .before(
    $('<div>')
      .attr('class', 'next-comment')
      .append(
        $('header')
          .append(
            $('<p>')
            .append(
              $('<a>')
                .attr('href', 'mailto:'+'date.mail')
                .html('<strong>'+'date.name'+'</strong>')
              ),
            $('<div>')
              .attr('class', 'button')
              .append(
                $('<button>')
                  .attr('type','button')
                  .attr('name','remove')
                    .text('Удалить'),
                $('<button>')
                  .attr('type','button')
                  .attr('name','add_changes')
                  .attr('disabled','disabled')
                    .text('Редактировать')
                )
            )
          ),
        $('<p>').text('date.text')
      )
  );


// $('button[name="add"]').click(addCommet());

document.querySelector('.all-comments').onclick=function (event){
  if (event.target.name==='remove')
    if (confirm('Вы действительно хотите удалить комментарий?'))
    {
      var rem = event.target.parentNode.parentNode.parentNode;
      rem.parentNode.removeChild(rem);
    }
