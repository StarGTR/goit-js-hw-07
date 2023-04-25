import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const photoGrid = document.querySelector(".gallery");

const htmlText = galleryItems.map((galleryItem) => { 
    return `<li> <img src="${galleryItem.original}" alt="${galleryItem.description}" width = 150 px  height = auto></li>`
}).join("")
console.log("🚀 ~ file: 01-gallery.js:9 ~ temp:", htmlText)

photoGrid.insertAdjacentHTML("afterend", htmlText);



// Виконуй це завдання у файлах 01 - gallery.html і
// 01 - gallery.js.Розбий його на декілька підзавдань:

// ------------
// Створення і рендер розмітки на підставі масиву 
// даних galleryItems і наданого шаблону елемента галереї.

// ДЖС мап + джойн
// створення лі з контейном
// текст контейн чек
// підвантаження в ДОМ дерево 

// ------------
// Реалізація делегування на ul.gallery і 
// отримання url великого зображення.

// 1. повістит евентлістер на УЛ
// 2. 

// ------------
// Підключення скрипту і стилів бібліотеки модального 
// вікна basicLightbox.Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.


// ------------
// Відкриття модального вікна по кліку на елементі
// галереї.Для цього ознайомся з документацією і прикладами.


// ------------
    
// Заміна значення атрибута src елемента < img > в 
// модальному вікні перед відкриттям.Використовуй 
// готову розмітку модального вікна із зображенням 
// з прикладів бібліотеки basicLightbox.
