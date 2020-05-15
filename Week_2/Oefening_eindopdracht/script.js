const plaatje = [{   "name":"marijn",
                    "pic":"https://www.kaspersky.nl/content/nl-nl/images/product-icon-KSOS.png",
                    "url":"nu",
                    "age":10
                },
                {   "name":"pietje",
                    "pic":"https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg",
                    "url":"google",
                    "age":12
                },
                {   "name":"jan",
                    "pic":"https://ponck.nl/wp-content/uploads/2018/08/Google-small-business.jpg",
                    "url":"nos",
                    "age":16
                }];

const button = document.querySelector("button");
const pics = plaatje.map(pl => pl.pic);
const ref = plaatje.map(ref => ref.url);

const ouderDan10 = plaatje.filter(ouder => ouder.age > 10);
// console.log(ouderDan10)

button.addEventListener("click", () => {
        ouderDan10.forEach((inhoud) => {
            const nave = document.querySelector("nav");
            const link = document.createElement("a");
            nave.appendChild(link);
            link.href = "https://www." + inhoud.url + ".nl";
            const child = document.createElement("img");
            link.appendChild(child);
            child.src = inhoud.pic;
        });
    
}); 





    

