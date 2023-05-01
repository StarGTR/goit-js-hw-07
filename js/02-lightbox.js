import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1
// Створення і рендер розмітки на підставі масиву 
// даних galleryItems і наданого шаблону елемента галереї.

 
const photoGrid = document.querySelector(".gallery");

galleryItems.map(({ preview, original, description }) => {
    const htmlText = 
  `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img 
      class="gallery__image"
      src="${preview}" 
      alt="${description}" 
      />
   </a>
</li>`
  

  photoGrid.innerHTML += htmlText;
})


// 3
//     Ініціалізація бібліотеки після створення і 
//     додання елементів галереї у ul.gallery.Для 
//     цього ознайомся з документацією SimpleLightbox - насамперед
// секції «Usage» і «Markup».

 
const galleryLightBox = new SimpleLightbox('.gallery__link', {captionsData: "src", captionsDelay: 1250, spinner:true, enableKeyboard:true, close:true});
 
// 4
//     Подивися в документації секцію «Options» і 
//     додай відображення підписів до зображень з 
//     атрибута alt.Нехай підпис буде знизу і з'являється 
//     через 250 мілісекунд після відкриття зображення.