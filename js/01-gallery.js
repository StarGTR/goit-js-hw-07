import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// Виконуй це завдання у файлах 01 - gallery.html і
// 01 - gallery.js.Розбий його на декілька підзавдань:

// #1------------
// Створення і рендер розмітки на підставі масиву 
// даних galleryItems і наданого шаблону елемента галереї.

// ДЖС мап  
// створення лі з контейном
// підвантаження в ДОМ дерево 


const photoGrid = document.querySelector(".gallery");

galleryItems.map(({ preview, original, description }) => {
  const htmlText = `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  photoGrid.innerHTML += htmlText;
})


 
// #2------------
// Реалізація делегування на ul.gallery і 
// отримання url великого зображення.

 
photoGrid.addEventListener('click', onClickImg);


    
// #3------------
// Підключення скрипту і стилів бібліотеки модального 
// вікна basicLightbox.Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.


// #4------------
// Відкриття модального вікна по кліку на елементі
// галереї.Для цього ознайомся з документацією і прикладами.


// #5------------
    
// Заміна значення атрибута src елемента < img > в 
// модальному вікні перед відкриттям.Використовуй 
// готову розмітку модального вікна із зображенням 
// з прикладів бібліотеки basicLightbox.


function onClickImg(event) {
  event.preventDefault()
  if (event.target.nodeName !== 'IMG') {
    return
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="1600">
`);
    instance.show();
    
  photoGrid.addEventListener('keydown', onClickModalClose);
  
  function onClickModalClose(event) {
    if (event.code === "Escape") {
      instance.close()
    } 
  };
};

 