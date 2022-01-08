# diploma-layout
Дипломная работа по блоку "Разработка веб-страниц на языке разметки HTML5 с использованием каскадных таблиц стилей CSS3"

Создала на сайте [https://github.com] новый репозиторий. Назвала его diploma-layout. Скопировала ссылку [https://github.com/Yanochka09/diploma-layout].
Для реализации моей дипломной рабы, я на рабочем столе компьютера создала папку в которой присутствовал файл со структура проекта(index.html), папка с названием css и в ней файлы style.css - каскадная таблица стилей, normalize.css - нормализация стилей браузера, fonts.css - подрубание шрифтов). Клонировала репозиторий в папку проекта с помощью команды $clone [https://github.com/Yanochka09/diploma-layout.git]. С помощью программы Fork закомментировала изменения в главной ветке проекта main, произвела команду push. 

От главной ветке main, создала ветку branch-9.01, и в ней вела основную работу по дипломному проекту. 

В файле index.html с помощью тега link в head - подрубила ранее созданные файлы -fonts.css, normalize.css, style.css. Создала папку fonts и скачала шрифты (Playfair Display, Open Sans, Roboto, Avenir Next), подрубила каждый шрифт с помощью @font-face. Создала папку с названием img. Скачала изображения по ссылке [https://www.figma.com/file/jUeUUK20F1brrLerBuDspQ/design-design-furniture?node-id=0%3A1], на сайте [https://www.figma.com].  Проработала основную структуру проекта. 

В файле style.css стилизовала свой проект.

Для создания слайдеров, я зашла на сайт [https://kenwheeler.github.io/slick/], и скачала slick.css и slick-theme.css. Добавила эти файлы в папку css. Подрубила их с помощью тега link в head. Так же для работы со слайдером, я скачала slick.min.js, jquery.min.js, jquery-migrate.min.js. Создала папку slick и добавила эти файлы в папку. Подключила их с помощью тега script после закрывающегося тега body. 

Для того, что бы кастомизировать  slide и burgermenu, я создала папку js и в ней файл index.js. Эту папку поместила внутрь папки slick.

Последним этапом моей работы было создание файла media.css. Подключила его с помощью тега link в head, после всех файлов. С помощью @media я адаптировала свой проект под экраны с шириной viewport : 1920px, 1440px, 1024px, 768px, 425px, 375px, 320px.
