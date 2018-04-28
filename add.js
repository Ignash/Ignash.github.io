$(document).ready(function(){
  "use strict"

   $.getJSON('/request.json', function(requests){

        var seachResults=JSON.parse(requests.responseText);
        $.each(seachResults, function (index, value) {
        $('main').append(createArticle(value))
      })
  });

  function createHeader(url,title){

    var newHeader = $('<header>').
    newHeader.append($('<h1>')
                .append($('<a>')
                  .attr('href', url)
                  .text(title)
                )
              );
    return newHeader;
  };


  function creatDescription(picture,description,actors){
    var newDivDescription = $('<div>').attr('class', 'description');
    newDivDescription.append(
                      $('<div>').attr('class', 'flex-2').
                          append(
                          $('<figure>').
                              append(
                              $('<img>').attr('src', picture),
                              $('<figcaption>').text('Обложка фильма')
                              )
                            ),
                          $('<div>').attr('class', 'section-article').
                              append(
                              $('section').
                                append(
                                $('<header>').
                                  append(
                                  $('<h1>').text('Описание')
                                  ),
                                $('<p>').text(description)
                                  ),
                              $('section').
                                append(
                                $('<header>').
                                  append(
                                  $('<h1>').text('Актеры')
                                  ),
                                $('<p>').text(actors)
                                )
                              )
                          )
    return newDivDescription;
  };

  function createFooter(year, imbd1, imbd2, budget, country){


   var newFooter = $('<footer>').
                    append(
                    $('<p>').html('<b>Год: </b>' + year + ', ' + '<b>Оценка IMDb: </b>' + imbd1 + '<small>' + imbd2 + '</small>' + ', ' + '<b>Бюджет: </b>' + budget + ', ' + '<b>Страна: </b>' + country)
                  );
    return newFooter;
  }


  function createArticle(film){

    var Article=$('<article>').
                  append(
                    createHeader(film.url, film.title),
                    creatDescription(film.picture,film.description,film.actors),
                    createFooter(film.footer.year, film.footer.imbd1, film.footer.imbd2, film.footer.budget, film.footer.country)
                  )
    return Article;

  }
})
