window.onload=function(){
  "use strict"
  var seachResults=[{
    url:'film_page_3.html',
    picture: './image/img1.jpg',
    title: 'Властелин колец:Возвращение короля',
    description: 'Последняя часть трилогии о Кольце Всевластия и о героях,взявших на себя бремя спасения Средиземья.Повелитель сил ТьмыСаурон направляет свои безчисленные рати под стены Минас-Тирита, крепости Последней Надежды.',
    actors: 'Элайджа Вуд, Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахен, Билли Бойд, Энди Серкис, Миранда Отто, Бернард Хилл',
    footer:{
      year: '2003',
      budget: '$94 000 000',
      imbd1: '8.90',
      imbd2:'(1 349 172)',
      country: 'США'
    }
  },
  {
    url:'film_page_2.html',
    picture: './image/img2.jpg',
    title: 'Властелин колец:Две крепости',
    description: 'Братство распалось, но Кольцо Всевластья должно быть уничтожено, Фродо и Сэм вынуждены доверить свои жизни Голлуму,  который взялся провести их к вратам Мордора. Громадная Армия Сарумана приближается: члены братства и их союзники готовы принять бой.',
    actors: 'Элайджа Вуд, Шон Эстин, Орландо Блум, Вигго Мортенсен, Иэн МакКеллен, Доминик Монахен, Миранда Отто, Джон Рис-Дэвис, Энди Серкис, Билли Бойд',
    footer:{
      year: '2002',
      budget: '$94 000 000',
      imbd1: '8.70',
      imbd2:'(1 221 214)',
      country: 'США'
    }
  },
  {
    url:'film_page_1.html',
    picture: './image/img3.jpg',
    title: 'Властелин колец:Братство кольца',
    description: 'Сказания о Средиземье - это хроника Великой войны за Кольцо, войны, длившиеся не одну тысячу лет. Тот, кто владел Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу.',
    actors: 'Элайджа Вуд, Иэн МакКеллен, Вигго Мортенсен, Шон Бин, Орландо Блум, Джон Рис-Дэвис, Иэн Холм, Шон Эстин,  Билли Бойд, Доминик Монахен',
    footer:{
      year: '2001',
      budget: '$93 000 000',
      imbd1: '8.80',
      imbd2:'(1 389 831)',
      country: 'США'
    }
  }
  ];

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
