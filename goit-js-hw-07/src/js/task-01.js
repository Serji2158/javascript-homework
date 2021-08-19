// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в 
// ul#categories, то есть элементов li.item. Получится 
// 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2)
//  и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const totalCategories = document.querySelector('#categories')
const totalItems = totalCategories.querySelectorAll('.item');

totalItems.forEach(item => {
    console.log(`В списке ${totalItems.length} категории`);
});

totalItems.forEach(item => {
    const head = item.querySelector('h2');
    const quantity = item.querySelectorAll('li');
    console.log(`Категория: ${head.textContent} Количество элементов: ${quantity.length}`);
});




