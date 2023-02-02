document.addEventListener('DOMContentLoaded', () => {
    let categories_counter = 0,
        HTML_categories,
        this_categories = '',
        min_costs = 100000,
        max_costs = 0,
        filter = `
        <div class="filter">
            <div class="filter_input"> 
                <div class="input_filter_subscription">ОТ</div>
                <input type="number" class="min input_filter"> 
                <div class="input_filter_subscription">ДО</div>
                <input type="number" class="max input_filter">
            </div>
            <div class="filter_button">Отфильтровать</div>
        </div>
        <div class="script_one"></div>`;

        const categories = [ 
            [{src : "https://img.freepik.com/free-vector/opened-wider-empty-refrigerator_1284-23309.jpg?size=338&ext=jpg", name: "Холодильники", categories: "10"}, 
             {src : "https://avatars.mds.yandex.net/i?id=f90a808b628c4237e4fcb46fa7873b8e-4933643-images-thumbs&n=13", name: "Плиты", categories: "11"}, 
             {src : "https://avatars.mds.yandex.net/i?id=2a0000017a0cb4d92abc30043882d64d0e01-4788476-images-thumbs&n=13", name: "Чайники", categories: "12"}
            ], 
            [{src : "https://avatars.mds.yandex.net/i?id=e76324d10dbd76f8d162374fcaf9fb8d_sr-5709310-images-thumbs&n=13", name: "Samsung", categories: "13"}, 
             {src : "https://avatars.mds.yandex.net/i?id=f47886f6c3680b40ef048ae32adedd6d-5434197-images-thumbs&n=13", name: "Xiaomi", categories: "14"}, 
             {src : "https://avatars.mds.yandex.net/i?id=688fa2df51ac16766ae4fdfc34e02607-5177922-images-thumbs&n=13", name: "IPhone", categories: "15"}
            ], 
            [{src : "https://avatars.mds.yandex.net/i?id=e7f15db93f3dfe6056571ae8446240f1-5241954-images-thumbs&n=13", name: "Фотоаппараты", categories: "16"}, 
             {src : "https://avatars.mds.yandex.net/i?id=0852ffffe841d36219a95838a8aff9f1-5217977-images-thumbs&n=13", name: "Экшн-камеры", categories: "17"}, 
             {src : "https://avatars.mds.yandex.net/i?id=3032dbef67f5c26b4cd4efe71d6e8ef0_sr-5859245-images-thumbs&n=13", name: "Штативы", categories: "18"}
           ], 
           [{src : "https://avatars.mds.yandex.net/i?id=cc621fb254e88a107763f6dd5b61e73c-5159711-images-thumbs&n=13", name: "Ноутбуки", categories: "19"}, 
            {src : "https://avatars.mds.yandex.net/i?id=11992a0dcaed607f765cf04bdfade59e-4570384-images-thumbs&n=13", name: "Macbook", categories: "20"}, 
            {src : "https://avatars.mds.yandex.net/i?id=5f79e8a9ab376f5aeca06fbf82d79842-4818076-images-thumbs&n=13", name: "Сумки для ноутбуков", categories: "21"}
           ],
           [{src : "https://avatars.mds.yandex.net/i?id=05d175cc1a7bbb8c444216f50060ab24-4120605-images-thumbs&n=13", name: "Офисные ПК", categories: "22"}, 
            {src : "https://avatars.mds.yandex.net/i?id=e1e4100054f26c09de0f2781b45923ed_sr-5284852-images-thumbs&n=13", name: "Игровые ПК", categories: "23"}, 
            {src : "https://avatars.mds.yandex.net/i?id=7cfa0621682b0d552f240a7c9561b9ea-2952140-images-thumbs&n=13", name: "Моноблоки", categories: "24"}
           ],
           [{src : "https://avatars.mds.yandex.net/i?id=2a0000017a0a9929ee5e5d76438b4d98818a-4012071-images-thumbs&n=13", name: "Процессоры", categories: "25"}, 
            {src : "https://avatars.mds.yandex.net/i?id=1fea524555209da5a7861ffdf564bb6e_sr-7084983-images-thumbs&n=13", name: "Видеокарты", categories: "26"}, 
            {src : "https://avatars.mds.yandex.net/i?id=a97d152836f9a7acc5eb907492b1e72b-4935648-images-thumbs&n=13", name: "Материнские платы", categories: "27"}
           ],
           [{src : "https://avatars.mds.yandex.net/i?id=1917e7aec3abde52bd02669113ef0944-4593651-images-thumbs&n=13", name: "FHD Телевизоры", categories: "28"}, 
            {src : "https://avatars.mds.yandex.net/i?id=3ea2f08d84671ac957f60c163e0c1b8f_sr-3927965-images-thumbs&n=13", name: "QHD Телевизоры", categories: "29"}, 
            {src : "https://avatars.mds.yandex.net/i?id=2a00000179febee84a2d8ec57940877211a4-4117687-images-thumbs&n=13", name: "4K Телевизоры", categories: "30"}
           ],
           [{src : "https://avatars.mds.yandex.net/i?id=77816993a369163baab00d61782bd86f-4351356-images-thumbs&n=13", name: "PlayStation", categories: "31"}, 
            {src : "https://avatars.mds.yandex.net/i?id=f2c2f5f11b0f05fd7d998257b15b97e0-5083477-images-thumbs&n=13", name: "XBOX", categories: "32"}, 
            {src : "https://avatars.mds.yandex.net/i?id=39ac78bc82c0e12b156b7bcb64bfec44-4571987-images-thumbs&n=13", name: "Nintendo", categories: "33"}
           ]
        ];
   
        const hoverMenu = document.querySelectorAll('.element_list_hover_menu');

        hoverMenu.forEach(e => e.addEventListener('click', event => {
            categories_counter = event.currentTarget.dataset.categories;
            document.querySelector('.script').innerHTML = `
            <div class="categories_div"> 
            </div>`;
            HTML_categories = document.querySelector('.categories_div');
            categories[categories_counter].forEach(e =>  {
                HTML_categories.innerHTML += `
                <div class="cart_categories" data-cat="${e.categories}"> 
                    <img src="${e.src}" class="categories_img">
                    <div class="categories_span">${e.name}</div>
                </div>
            </div>`;
            const cart_categories = document.querySelectorAll('.cart_categories');
            cart_categories.forEach(e => e.addEventListener('click', event => {
            this_categories = event.currentTarget.dataset.cat; 
            document.querySelector('.script').innerHTML = '';
            fetch('../json/Data_base.json')
            .then((response) => response.json())
            .then((data) => {
                document.querySelector('.script').innerHTML = filter;
                for (let key in data) {
                    if (data[key].categories == this_categories) {
                        document.querySelector('.script_one').innerHTML += `
                        <div class="element_cart_list">
                            <img src="${data[key].src}" alt="a" class="element_cart_list_img">
                            <div class="description_element_cart_list">${data[key].decription}</div>
                            <div class="price">
                                <div class="price_price">${data[key].price} &#8381;</div> <br> 
                                    <div class="add_to_cart">
                                        <div class="button_to_cart" data="${data[key]}">Добавить в корзину</div>
                                    </div>
                                    <div class="love_icon" data="${data[key]}"><img src="./image/love.png" alt="love" class="love_cart"></div>
                                </div>
                        </div>`;
                    } if(data[key].price <= min_costs) {
                        min_costs = data[key].price;
                        document.querySelector('.min').placeholder = min_costs;
                    } if(data[key].price >= max_costs) {
                        max_costs = data[key].price;
                        document.querySelector('.max').placeholder = max_costs;
                    }
                }
                document.querySelector('.filter_button').addEventListener('click', () => {
                min_costs = +document.querySelector('.min').value;
                max_costs = +document.querySelector('.max').value;
                document.querySelector('.script_one').innerHTML = '';
                for (let key in data) {
                    if (data[key].categories == this_categories && data[key].price < max_costs && data[key].price > min_costs) {
                        document.querySelector('.script_one').innerHTML += `
                        <div class="element_cart_list">
                            <img src="${data[key].src}" alt="a" class="element_cart_list_img">
                            <div class="description_element_cart_list">${data[key].decription}</div>
                            <div class="price">
                                <div class="price_price">${data[key].price} &#8381;</div> <br> 
                                    <div class="add_to_cart">
                                        <div class="button_to_cart" data="${data[key]}">Добавить в корзину</div>
                                    </div>
                                    <div class="love_icon" data="${data[key]}"><img src="./image/love.png" alt="love" class="love_cart"></div>
                                </div>
                        </div>`;
                    }}});
            });
        }));
        });
        
        }));
    
});