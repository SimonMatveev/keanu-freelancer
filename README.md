# ReCap 

## Работа для конкурса

В процессе разработки использовались языки:

* **HTML**
* **CSS**
* **JS**

Постарался сделать сайт настолько адаптивным, насколько хватило ~~сил~~ знаний без использования медиа запросов. До ~600 пикселей выглядит приемлемо, если не считать первую секцию и футер - так и не придумал, как лучше реализовать выравнивание по центру после срабатывания **flex:wrap**. Скорее всего можно сделать намного лучше через **grid**, но решил оставить это до более подробного изучения темы с адаптивностью. Остальные секции более менее подстраиваются под размер экрана.

Анимации и хаверы добавил на свое усмотрение, надеюсь не переборщил.

В галлерее сделал видео и через **iframe**, и через **video** - не совсем по макету, но, думаю, лишняя тренировка не помешает.

***

## Скрипты

Отдельно хочу упомянуть скрипты, использованные для верстки. JS изучал самостоятельно и немного, так что извиняюсь, если что то где то реализовано не слишком качественно.

### **ibg.js**

_Применяется в секции ***portfolio***_

Скрипт задает поведение для микса **".ibg"**. Честно подсмотрен у одного верстальщика с ютуба и немного допилен мной. Его предназначение - помещение дочернего изображения на фон родительского элемента. Это позволяет решить сразу две задачи:

* Позволяет более гибко работать с адаптивностью блоков, в которых используются неконтекстные изображения, но при работе с которыми неудобно задавать отдельные классы/использовать псевдоэлементы (например,большое количество одинаковых карточек. Секция, в которой он используется, как раз из таких).
* Позволяет удобно работать с изображениями на сайте на удаленном сервере - ведь для бэкендера изменять src проще для HTML элемента, нежели лезть в CSS.

Применение

1. Родительскому элементу задается класс **".ibg"**.
2. Внутрь помещается изображение.
3. Само изображение скрывается, например вот так:
```
.portfolio__image {
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
}
```
4. Положение бэкграунда задается для самого класса ".ibg".

### **gallery.js**

_Применяется в секции ***gallery***_

Скрипт реализует две функции:

* **Первая часть** - простенький кастомный интерфейс для проигрывания видео, при нажатии на карточку скрывает кнопку проигрывателя и продолжительность видео, при повторном нажатии - возвращает их.

* **Вторая часть** - отображение продолжительности видео в секции как на макете. По загрузке страницы/метадаты (подробнее в комментарии в самом скрипте) принимает продолжительность видео и по формуле приводит ее к формату "00:00".

***

## Планы на будущее

В процессе учебы, ри наличии времени и сил, можно:

- [ ] довести до ума адаптивность;
- [ ] оптимизировать скрипт для галлереи (Видео загружаются дольше, чем хотелось бы).