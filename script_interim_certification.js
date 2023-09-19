// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach((elem) =>{
    elem.classList.add('super-dropdown');
})


// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const testBtn = document.querySelectorAll('.btn');
testBtn.forEach((elem) =>{
    if (elem.classList.contains('btn-secondary')){
        elem.classList.remove('btn-secondary');
    }
    else{
        elem.classList.add('btn-secondary');
    }
})

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const kickFromMenu = document.querySelectorAll('.menu');
kickFromMenu.forEach((elem)=>{
    elem.classList.remove('dropdown-menu');
})

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const getClassDropdown = document.querySelectorAll('.dropdown');
getClassDropdown.forEach((elem) =>{
    if (elem.tagName.toLowerCase() === 'div'){
        const linkForDiv = '<a href="#">link</a>';
        elem.insertAdjacentHTML("afterbegin", linkForDiv);
    }
})

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const getDropdownMenuButton = document.querySelector('#dropdownMenuButton');
if (getDropdownMenuButton) {
    getDropdownMenuButton.id = 'superDropdown';
}

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const elemAriaLabelledby = document.querySelectorAll('[aria-labelledby = "dropdownMenuButton"]');
elemAriaLabelledby.forEach((elem)=>{
    elem.dataset.dd = '3';
});

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const getDropdownToggle = document.querySelectorAll('.dropdown-toggle');
getDropdownToggle.forEach((elem)=>{
    elem.removeAttribute('type');
});
