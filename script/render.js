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

    let holod_min = sortMinCat(11, db),
        holod_max = sortMaxCat(11, db),
        plita_min = sortMinCat(12, db),
        plita_max = sortMaxCat(12, db),
        tea_min = sortMinCat(13, db),
        tea_max = sortMaxCat(13, db),
        samsung_min = sortMinCat(13, db),
        samsung_max = sortMaxCat(14, db),
        xiaomi_min = sortMinCat(14, db),
        xiaomi_max = sortMaxCat(15, db),
        iphone_min = sortMinCat(15, db),
        iphone_max = 0,
        foto_min = sortMinCat(11, db),
        foto_max = 0,
        echs_min = sortMinCat(11, db),
        echs_max = 0,
        shtativ_min = sortMinCat(11, db),
        shtativ_max = 0,
        notebook_min = sortMinCat(11, db),
        natobook_max = 0,
        macbook_min = sortMinCat(11, db),
        macbook_max = 0,
        bags_min = sortMinCat(11, db),
        bags_max = 0,
        officePC_min = sortMinCat(11, db),
        officePC_max = 0,
        gamePC_min = sortMinCat(11, db),
        gamePC_max = 0,
        manobloks_min = sortMinCat(11, db),
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
}, 3000);

    
        


       

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
                    }, 600);      
            }, 650);





            setTimeout(()=>{
            const cart_cancret = document.querySelectorAll(".cart_categories");

            cart_cancret.forEach(e => {
                e.addEventListener('click', event => {
                    fetch_towars(event.currentTarget.dataset.cat);
                });
            });


            async function fetch_towars(categories) {
                
            }

            }, 700);


            
        };
});