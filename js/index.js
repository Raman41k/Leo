const products_list = [
    {
        "id": 1,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 1",
        "price": 500,
        "description": "Some random text for description"
    },
    {
        "id": 2,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 2",
        "price": 600,
        "description": "Some random text for description"
    },
    {
        "id": 3,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 3",
        "price": 750,
        "description": "Some random text for description"
    }, {
        "id": 4,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 4",
        "price": 300,
        "description": "Some random text for description"
    }, {
        "id": 5,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 5",
        "price": 800,
        "description": "Some random text for description"
    },
    {
        "id": 6,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 6",
        "price": 1200,
        "description": "Some random text for description"
    },
    {
        "id": 7,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 7",
        "price": 1500,
        "description": "Some random text for description"
    },
    {
        "id": 8,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 8",
        "price": 900,
        "description": "Some random text for description"
    },
    {
        "id": 9,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 9",
        "price": 100,
        "description": "Some random text for description"
    },
    {
        "id": 10,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 10",
        "price": 300,
        "description": "Some random text for description"
    },  {
        "id": 10,
        "logo": "https://cdn.albero.com.ua/products/225472ae/b33c/11e7/8931/000c2987a3fe/100x100/3dd06-askania-grande.webp",
        "title": "Product 10",
        "price": 300,
        "description": "Some random text for description"
    }
];

const product = document.querySelector('.row');
const pagination = document.querySelector('.pagination');

let current_page = 2;
let items = 3;

function displayEl(items, wrapper, items_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let loop_start = items_per_page * page;
    let loop_end = loop_start + items_per_page;
    let paginatedItems = items.slice(loop_start, loop_end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        const col = document.createElement('div');
        col.classList.add('col-4', 'card-item')
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-success')
        button.setAttribute("data-bs-toggle","modal")
        button.setAttribute("data-bs-target","#exampleModal")

        button.onclick = () => {
            const img = document.querySelector('.card-img-top');
            const title = document.querySelector('.card-title');
            const text = document.querySelector('.card-text');

            title.innerHTML = item.title;
            text.innerHTML = item.description;
            img.src = item.logo;
        }

        button.innerText = 'Buy';
        p.innerHTML = item.price + '$';
        img.src = item.logo;
        img.alt = item.title;
        h3.innerHTML = item.title;
        col.append(img, h3, p, button);

        wrapper.appendChild(col);
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




