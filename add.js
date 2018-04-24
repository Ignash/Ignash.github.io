window.onload=function(){
  "use strict"

  var requests = new XMLHttpRequest();
  requests.open('GET', '/request.json', true);
  requests.onreadystatechange = function() {
    if (requests.readyState == 4) {
      if(requests.status == 200) {
        alert(requests.responseText);
      } else {
        alert('requests.status='+requests.status+' There was a problem with the request.\n');
      }

    }
  };
  requests.send(null);

  var seachResults=requests.responseText;


  function createHeader(url,title){
    var newHeader = document.createElement('header');
    var newA=document.createElement('a');
    newA.setAttribute('href', url);
    newA.innerText=title;
    newHeader.appendChild(document.createElement('h1')).appendChild(newA);

    return newHeader;
  };


  function creatDescription(picture,description,actors){
    var newDivDescription = document.createElement('div');
    newDivDescription.setAttribute('class', 'description');

    var flex2 = document.createElement('div');
    flex2.setAttribute('class', 'flex-2');

    var newFigure = document.createElement('figure');
    newFigure.appendChild(document.createElement('img')).setAttribute('src', picture);
    newFigure.appendChild(document.createElement('figcaption')).innerText='Обложка фильма';

    var newDivSection = document.createElement('div');
    newDivSection.setAttribute('class', 'section-article')

    var newSection = document.createElement('section');
    newSection.appendChild(document.createElement('header')).appendChild(document.createElement('h1')).innerText='Описание';
    newSection.appendChild(document.createElement('p')).innerText = description;

    var newSection2 = newSection.cloneNode(true);
    newSection2.getElementsByTagName('h1')[0].innerText = 'Актеры';
    newSection2.getElementsByTagName('p')[0].innerText = actors;

    newDivSection.appendChild(newSection);
    newDivSection.appendChild(newSection2);

    flex2.appendChild(newFigure);
    flex2.appendChild(newDivSection);

    newDivDescription.appendChild(flex2);

    return newDivDescription;
  };

  function createFooter(year, imbd1, imbd2, budget, country){
    var newFooter = document.createElement('footer');
    newFooter.appendChild(document.createElement('p')).innerHTML = '<b>Год: </b>' + year + ', ' + '<b>Оценка IMDb: </b>' + imbd1 + '<small>' + imbd2 + '</small>' + ', ' + '<b>Бюджет: </b>' + budget + ', ' + '<b>Страна: </b>' + country;
    return newFooter;
  }


  function createArticle(film){
    var Article=document.createElement('article');
    Article.appendChild(createHeader(film.url, film.title));
    Article.appendChild(creatDescription(film.picture,film.description,film.actors));
    Article.appendChild(createFooter(film.footer.year, film.footer.imbd1, film.footer.imbd2, film.footer.budget, film.footer.country));

    return Article;

  }
  for (var i = 0; i< seachResults.length; i++){

  document.getElementsByTagName('main')[0].appendChild(createArticle(seachResults[i]));

  }
}
