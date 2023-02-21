document.addEventListener('DOMContentLoaded', () => {
        const categories = [ 
            [{src : "../image/categories/1.avif", name: "Холодильники", categories: "10"}, 
             {src : "../image/categories/2.webp", name: "Плиты", categories: "11"}, 
             {src : "../image/categories/3.webp", name: "Чайники", categories: "12"}
            ], 
            [{src : "../image/categories/4.webp", name: "Samsung", categories: "13"}, 
             {src : "../image/categories/5.webp", name: "Xiaomi", categories: "14"}, 
             {src : "../image/categories/6.webp", name: "IPhone", categories: "15"}
            ], 
            [{src : "../image/categories/7.webp", name: "Фотоаппараты", categories: "16"}, 
             {src : "../image/categories/8.webp", name: "Экшн-камеры", categories: "17"}, 
             {src : "../image/categories/9.webp", name: "Штативы", categories: "18"}
           ], 
           [{src : "../image/categories/10.webp", name: "Ноутбуки", categories: "19"}, 
            {src : "../image/categories/11.webp", name: "Macbook", categories: "20"}, 
            {src : "../image/categories/12.webp", name: "Сумки для ноутбуков", categories: "21"}
           ],
           [{src : "../image/categories/13.webp", name: "Офисные ПК", categories: "22"}, 
            {src : "../image/categories/14.webp", name: "Игровые ПК", categories: "23"}, 
            {src : "../image/categories/15.webp", name: "Моноблоки", categories: "24"}
           ],
           [{src : "../image/categories/16.webp", name: "Процессоры", categories: "25"}, 
            {src : "../image/categories/17.webp", name: "Видеокарты", categories: "26"}, 
            {src : "../image/categories/18.webp", name: "Материнские платы", categories: "27"}
           ],
           [{src : "../image/categories/19.webp", name: "FHD Телевизоры", categories: "28"}, 
            {src : "../image/categories/20.webp", name: "QHD Телевизоры", categories: "29"}, 
            {src : "../image/categories/21.webp", name: "4K Телевизоры", categories: "30"}
           ],
           [{src : "../image/categories/22.webp", name: "PlayStation", categories: "31"}, 
            {src : "../image/categories/23.webp", name: "XBOX", categories: "32"}, 
            {src : "../image/categories/24.webp", name: "Nintendo", categories: "33"}
           ]
        ];
        let love_towars_array = [],
            cart = [];

           
        const menu = document.querySelectorAll(".element_list_hover_menu"),
              script = document.querySelector(".script");

        menu.forEach(e => {
            e.addEventListener('click', event => {
                renderRasdels(event.currentTarget.dataset.categories);
            });
        });
        
let db = '';
XHR();

    function XHR() {
        const response = new XMLHttpRequest();
        response.open("GET", "../json/Data_base.json");
        response.setRequestHeader("Content-type", "application/json; charset=utf-8");
        response.send();
        response.addEventListener('load', () => {
            if(response.status === 200) {
                db = JSON.parse(response.response);
            } else {
                console.error('Ошибка XHR');
            }
        });
    };

    let holod_min = 0,
        holod_max = 0,
        plita_min = 0,
        plita_max = 0,
        tea_min = 0,
        tea_max = 0,
        samsung_min = 0,
        samsung_max = 0,
        xiaomi_min = 0,
        xiaomi_max = 0,
        iphone_min = 0,
        iphone_max = 0,
        foto_min = 0,
        foto_max = 0,
        echs_min = 0,
        echs_max = 0,
        shtativ_min = 0,
        shtativ_max = 0,
        notebook_min = 0,
        notebook_max = 0,
        macbook_min = 0,
        macbook_max = 0,
        bags_min = 0,
        bags_max = 0,
        officePC_min = 0,
        officePC_max = 0,
        gamePC_min = 0,
        gamePC_max = 0,
        monobloks_min = 0,
        monobloks_max = 0,
        CPU_min = 0,
        CPU_max = 0,
        videocard_min = 0,
        videocard_max = 0,
        matherboard_min = 0,
        matherboard_max = 0,
        FHDTV_min = 0,
        FHDTV_max = 0,
        QHDTV_min = 0,
        QHDTV_max = 0,
        UHDTV_min = 0,
        UHDTV_max = 0,
        PS_min = 0,
        PS_max = 0,
        XBOX_min = 0,
        XBOX_max = 0,
        Nintendo_min = 0,
        Nintendo_max = 0; 
    
    
setTimeout(() => {

    db = Object.values(db);

    function sortMinCat(categories, db) {
        let arr = [];
        db.forEach(e => {
            if(e.categories == categories){
                arr.push(e.price);
            }
        });
        return Math.min(...arr);
    }
   
    function sortMaxCat(categories, db) {
        let arr = [];
        db.forEach(e => {
            if(e.categories == categories){
                arr.push(e.price);
            }
        });
        return Math.max(...arr);
    }


        holod_min = sortMinCat(10, db),
        holod_max = sortMaxCat(10, db),
        plita_min = sortMinCat(11, db),
        plita_max = sortMaxCat(11, db),
        tea_min = sortMinCat(12, db),
        tea_max = sortMaxCat(12, db),
        samsung_min = sortMinCat(13, db),
        samsung_max = sortMaxCat(13, db),
        xiaomi_min = sortMinCat(14, db),
        xiaomi_max = sortMaxCat(14, db),
        iphone_min = sortMinCat(15, db),
        iphone_max = sortMaxCat(15, db),
        foto_min = sortMinCat(16, db),
        foto_max = sortMaxCat(16, db),
        echs_min = sortMinCat(17, db),
        echs_max = sortMaxCat(17, db),
        shtativ_min = sortMinCat(18, db),
        shtativ_max = sortMaxCat(18, db),
        notebook_min = sortMinCat(19, db),
        notebook_max = sortMaxCat(19, db),
        macbook_min = sortMinCat(20, db),
        macbook_max = sortMaxCat(20, db),
        bags_min = sortMinCat(21, db),
        bags_max = sortMaxCat(21, db),
        officePC_min = sortMinCat(11, db),
        officePC_max = 0,
        gamePC_min = sortMinCat(11, db),
        gamePC_max = 0,
        monobloks_min = sortMinCat(11, db),
        monobloks_max = 0,
        CPU_min = sortMinCat(11, db),
        CPU_max = 0,
        videocard_min = sortMinCat(11, db),
        videocard_max = 0,
        matherboard_min = sortMinCat(11, db),
        matherboard_max = 0,
        FHDTV_min = sortMinCat(11, db),
        FHDTV_max = 0,
        QHDTV_min = sortMinCat(11, db),
        QHDTV_max = 0,
        UHDTV_min = sortMinCat(11, db),
        UHDTV_max = 0,
        PS_min = sortMinCat(11, db),
        PS_max = 0,
        XBOX_min = sortMinCat(11, db),
        XBOX_max = 0,
        Nintendo_min = sortMinCat(11, db),
        Nintendo_max = 0; 
    
}, 500);

    
        


       

        function renderRasdels(element) {
            script.classList.add("script_animation_100_to_0");
            setTimeout(()=>{
                script.classList.remove("script_animation_100_to_0");
                script.classList.add("script_animation_0_to_100");
                    script.innerHTML = `<div class="categories_div"></div>`;
                    const categories_div = document.querySelector('.categories_div');
                    categories[element].forEach(e => {
                        categories_div.innerHTML += `<div class="cart_categories" data-cat="${e.categories}"> 
                        <img src="${e.src}" class="categories_img">
                                <div class="categories_span">${e.name}</div>
                            </div>
                        </div>`;
                        
                    });
                    setTimeout(()=>{ 
                        script.classList.remove("script_animation_0_to_100");
                        let cart_categories = document.querySelectorAll(".cart_categories");
                        cart_categories.forEach(e => {
                            e.addEventListener("click", event => {
                                let cat = event.currentTarget.dataset.cat
                                script.classList.add("script_animation_100_to_0");
                                setTimeout(() => {
                                    script.classList.remove("script_animation_100_to_0");
                                    script.classList.add("script_animation_0_to_100");
                                    setTimeout(() => {
                                        script.classList.remove("script_animation_0_to_100");
                                    }, 600);
                                    script.innerHTML = '';
                                    switch(cat) {
                                        case '10' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI" >Минимальная цена: </label><input type="number" class="minI" placeholder = "${holod_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${holod_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '11' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${plita_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${plita_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '12' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${tea_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${tea_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '13' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${samsung_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${samsung_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '14' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${xiaomi_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${xiaomi_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '15' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${iphone_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${iphone_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '16' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${foto_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${foto_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '17' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${echs_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${echs_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '18' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${shtativ_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${shtativ_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '19' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${notebook_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${notebook_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '20' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${macbook_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${macbook_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '21' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${bags_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${bags_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '22' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${officePC_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${officePC_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '23' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${gamePC_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${gamePC_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '24' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${monobloks_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${monobloks_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '25' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${CPU_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${CPU_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '26' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${videocard_min}"></div><div class="IminI" class="white_label"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${videocard_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '27' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${matherboard_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${matherboard_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '28' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${FHDTV_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${FHDTV_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '29' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${QHDTV_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${QHDTV_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '30' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${UHDTV_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${UHDTV_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '31' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${PS_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${PS_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '32' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${XBOX_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${XBOX_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '33' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${Nintendo_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${Nintendo_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                }
                                let buy_button = document.querySelectorAll('.buy_button');
                                db.forEach(e => {
                                    if(e.categories == cat) {
                                        script.innerHTML += `
                                        <div class="towars_cart_a_lot_off">
                                            <div class="towars_img">
                                                <img src="${e.src}" alt="${e}">
                                            </div>
                                            <div class="towars_name">
                                                <span class="towars_name_span">${e.decription}</span>
                                            </div>
                                            <div class="buy">
                                                <span class="price">${e.price}&#8381;</span>
                                                <div data-name="${e.id}" data-price="${e.price}" data-src="${e.src}" data-description="${e.decription}" data-active="0" class="in_cartttt"><button class="buy_button img_subscribe" data-src="${e.src}" data-description="${e.decription}" data-price="${e.price}">Добавить в корзину</button></div>
                                                <div data-name="${e.id}" data-active="0" class="love_towars"><img src="./image/love.png" alt="love" class="love"></div>
                                            </div>
                                       </div>`;
                                    }
                                    let towars_cart_a_lot_off = document.querySelectorAll('.towars_cart_a_lot_off');
                                        towars_cart_a_lot_off.forEach(e => {
                                            e.classList.add("animation_margin")
                                        })
                                    setTimeout(() => {
                                        towars_cart_a_lot_off.forEach(e => {
                                            e.classList.remove("animation_margin")
                                        })
                                    }, 1800);
                                });
                                setTimeout(() => { 
                                    function filter() {
                                document.querySelector('.fil').addEventListener('click', () => {
                                    let minI = +document.querySelector(".minI").value,
                                        maxI = +document.querySelector(".maxI").value;
                                    if(minI > maxI) {
                                        document.querySelector('.fil').innerHTML = `Цена ниже минимальной!`
                                        setTimeout(() => {
                                            document.querySelector('.fil').innerHTML = `Отфильтровать`
                                        }, 1000);
                                    } else {
                                        let result = [];
                                        db.forEach(e => {
                                            if(e.categories == cat && e.price < maxI && e.price > minI) {
                                                result.push(e)
                                            }});
                                            if(result.length > 0) {
                                                script.innerHTML = ``;
                                                switch(cat) {
                                        case '10' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI" >Минимальная цена: </label><input type="number" class="minI" placeholder = "${holod_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${holod_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '11' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${plita_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${plita_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '12' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${tea_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${tea_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '13' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${samsung_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${samsung_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '14' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${xiaomi_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${xiaomi_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '15' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${iphone_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${iphone_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '16' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${foto_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${foto_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '17' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${echs_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${echs_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '18' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${shtativ_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${shtativ_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '19' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${notebook_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${notebook_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '20' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${macbook_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${macbook_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '21' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${bags_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${bags_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '22' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${officePC_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${officePC_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '23' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${gamePC_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${gamePC_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '24' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${monobloks_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${monobloks_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '25' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${CPU_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${CPU_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '26' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${videocard_min}"></div><div class="IminI" class="white_label"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${videocard_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '27' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${matherboard_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${matherboard_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '28' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${FHDTV_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${FHDTV_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '29' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${QHDTV_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${QHDTV_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '30' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${UHDTV_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${UHDTV_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '31' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${PS_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${PS_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '32' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${XBOX_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${XBOX_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                        case '33' :
                                            script.innerHTML += `<div class="text_align_center"><div class="max_minI"><div class="ImaxI"><label for="minI">Минимальная цена: </label><input type="number" class="minI" placeholder = "${Nintendo_min}"></div><div class="IminI"><label for="maxI" class="white_label max_price">Максимальная цена: </label><input type="number" class="maxI" placeholder = "${Nintendo_max}"></div><div class="max_min_button"><button class="img_subscribe fil">Отфильтровать</button></div></div><div class="line"><div class="black"></div><div class="white"></div></div>`;
                                        break;
                                }
                                                result.forEach(e => {
                                                    script.innerHTML += `
                                                    <div class="towars_cart_a_lot_off">
                                                        <div class="towars_img">
                                                            <img src="${e.src}" alt="${e}">
                                                        </div>
                                                        <div class="towars_name">
                                                            <span class="towars_name_span">${e.decription}</span>
                                                        </div>
                                                        <div class="buy">
                                                            <span class="price">${e.price}&#8381;</span>
                                                            <div data-name="${e.id}" data-price="${e.price}" data-src="${e.src}" data-description="${e.decription}" data-active="0" class="in_cartttt"><button class="buy_button img_subscribe" data-src="${e.src}" data-description="${e.decription}" data-price="${e.price}">Добавить в корзину</button></div>
                                                            <div data-name="${e.id}" data-active="0" class="love_towars"><img src="./image/love.png" alt="love" class="love"></div>
                                                        </div>
                                                    </div>`;
                                                });
                                                    buy_button = document.querySelectorAll('.buy_button');
                                                    let towars_cart_a_lot_off = document.querySelectorAll('.towars_cart_a_lot_off');
                                                    towars_cart_a_lot_off.forEach(e => {
                                                    e.classList.add("animation_margin")
                                                })
                                                setTimeout(() => {
                                                    towars_cart_a_lot_off.forEach(e => {
                                                    e.classList.remove("animation_margin")
                                                    })
                                                }, 1800);
                                            } else {
                                                script.innerHTML = `<span class="towars_no">Товары подходящие под запрос не найдены!</span> <br> <img class="smail" src="../image/logo/smail.png"> `; 
                                            }
                                        
                                    }
                                    filter();
                                    setTimeout(() => {
                                        love_heart()
                                        inCart()
                                    }, 100); 
                                }); }  
                                filter();
                            }, 1000);
                            setTimeout(() => {
                                love_heart();
                                inCart();
                            }, 100);                   
                            }, 600);     

                            });
                        });
                    }, 600);      
            }, 650);
            let render_cart = () => {
                document.querySelector(".cart").addEventListener("click", () => {
                    script.innerHTML = ``;
                if(cart.length == 0) {
                    script.innerHTML = `<span class="towars_no">Здесь пока ничего нет!</span> <br> <img class="smail" src="../image/logo/smail.png"> `;
                } else {
                cart.forEach(e => {
                    script.innerHTML += `
                                <div class="towars_cart_a_lot_off">
                                    <div class="towars_img">
                                        <img src="${e.src}" alt="${e}">
                                    </div>
                                    <div class="towars_name">
                                        <span class="towars_name_span">${e.description}</span>
                                    </div>
                                    <div class="buy">
                                        <span class="price">${e.price}&#8381;</span>
                                    </div>
                                </div>`;
                });
            }
                });  
            };
            render_cart();       
function love_heart() {
    let love_heart = document.querySelectorAll(".love_towars");
    love_heart.forEach(e => {
        e.addEventListener('click', event => {
            if(event.currentTarget.dataset.active == 0) {
                event.currentTarget.dataset.active = 1;
                love_towars_array.push(event.currentTarget.dataset.name);
                event.currentTarget.innerHTML = `<img src="./image/love_red.png" alt="love" class="love">`;
                console.log(event.currentTarget.dataset.name);
                console.log(love_towars_array);
            } else {
                event.currentTarget.dataset.active = 0;
                love_towars_array.splice(love_towars_array.indexOf(event.currentTarget.dataset.name), 1);
                event.currentTarget.innerHTML = `<img src="./image/love.png" alt="love" class="love">`;
                console.log(love_towars_array);
            }
        });
    });
}
function inCart() {
    let buy_button = document.querySelectorAll(".in_cartttt");
    buy_button.forEach(e => {
        e.addEventListener('click', event => {
            if(event.currentTarget.dataset.active == 0) {
                event.currentTarget.dataset.active = 1;
                cart.push({
                    src: event.currentTarget.dataset.src,
                    description: event.currentTarget.dataset.description,
                    id : event.currentTarget.dataset.id,
                    price : event.currentTarget.dataset.price
                });
                event.currentTarget.innerHTML = `<span>Убрать из корзины</span>`;
                console.log(cart);
            } else {
                event.currentTarget.dataset.active = 0;
                cart.splice(cart.indexOf({
                    src: event.currentTarget.dataset.src,
                    decription: event.currentTarget.dataset.decription,
                    id : event.currentTarget.dataset.id,
                    price : event.currentTarget.dataset.price}), 1);
                event.currentTarget.innerHTML = `<button class="buy_button img_subscribe" data-src="${e.src}" data-description="${e.decription}" data-price="${e.price}">Добавить в корзину</button>`;
                console.log(cart);
            }
        });
    });
}


   
        } 
});