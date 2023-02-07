const products_list = [
    {
        "id": 1,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 1",
        "price": 500
    },
    {
        "id": 2,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 2",
        "price": 600
    },
    {
        "id": 3,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 3",
        "price": 750
    }, {
        "id": 4,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 4",
        "price": 300
    }, {
        "id": 5,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 5",
        "price": 800
    },
    {
        "id": 6,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 6",
        "price": 1200
    },
    {
        "id": 7,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 7",
        "price": 1500
    },
    {
        "id": 8,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 8",
        "price": 900
    },
    {
        "id": 9,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 9",
        "price": 100
    },
    {
        "id": 10,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 10",
        "price": 300
    }
];

const product = document.querySelector('.products');
const pagination = document.querySelector('.pagination');

let current_page = 2;
let items = 4;

function displayEl(items, wrapper, items_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let loop_start = items_per_page * page;
    let loop_end = loop_start + items_per_page;
    let paginatedItems = items.slice(loop_start, loop_end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        const div = document.createElement('div');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        p.innerHTML = item.price;
        img.src = item.logo;
        img.alt = item.title;
        h3.innerHTML = item.title;
        div.append(img, h3, p)

        wrapper.appendChild(div);
    }
}

function setupPagination (items, wrapper, items_per_page) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / items_per_page);

    for (let i = 1; i <= page_count ; i++) {
        let btn = paginationBtn(i, items)
        wrapper.appendChild(btn)
    }

}

function paginationBtn(page, item) {
    let button = document.createElement('button');
    button.classList.add('btn')
    button.innerText = page;

    if (current_page === page) button.classList.add('active');

    button.addEventListener('click', () => {
        current_page = page;
        displayEl(item, product, items, current_page );

        let current_btn = document.querySelector('.pagination button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    })

    return button;
}

displayEl(products_list, product, items, current_page);
setupPagination(products_list, pagination, items)






