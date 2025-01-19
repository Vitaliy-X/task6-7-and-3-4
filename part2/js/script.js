'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.selection-button');
    const menuState = new Map();

    menuButtons.forEach(menuButton => {
        const dropdownMenu = document.querySelector(`.dropdown-menu[data-menu="${menuButton.id}"]`);
        menuState.set(menuButton.id, menuButton.checked);

        menuButton.addEventListener('click', () => {
            const isActive = menuState.get(menuButton.id);

            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
            menuButtons.forEach(button => {
                menuState.set(button.id, false);
                button.classList.remove('active');
            });

            if (!isActive) {
                dropdownMenu.style.display = 'grid';
                dropdownMenu.style.gridTemplateColumns = '30% 70%';
                dropdownMenu.style.borderRadius = '10px';
                dropdownMenu.style.backgroundColor = 'white';
                dropdownMenu.style.marginTop = '20px';

                menuState.set(menuButton.id, true);
                menuButton.classList.add('active');
            }
        });
    });

    const productLists = document.querySelectorAll(".mws-product-list");
    const productButtons = document.querySelectorAll(".product-button");
    const productState = new Map();

    productButtons.forEach(productButton => {
        const currentContentList = document.querySelector(`.mws-${productButton.id}-list`);
        productState.set(productButton.id, productButton.checked);

        if (productButton.checked) {
            currentContentList.style.display = 'block';
        }

        productButton.addEventListener('click', () => {
            productLists.forEach(list => list.style.display = 'none');
            currentContentList.style.display = 'block';

            productButtons.forEach(button => {
                productState.set(button.id, false);
            });
            productState.set(productButton.id, true);
        });
    });
});
