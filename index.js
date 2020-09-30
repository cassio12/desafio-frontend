// Inserting banners
let banners = [
    {
        "titulo": "Melhores Imóveis do Rio de Janeiro!",
        "imagem": "https://labs.inforcedata.com.br/desafio-frontend/banner/banner1.jpg", 
        "call_to_action": "#"
    },
    {
        "titulo": "Venha conhecer a Imobiliária Inforce.",
        "imagem": "https://labs.inforcedata.com.br/desafio-frontend/banner/banner2.jpg", 
        "call_to_action": "#"
    }
]

// Inserting 
let showcase = [
    {
        "bairro": "Barra da Tijuca",
        "cidade": "Rio de Janeiro",
        "UF": "RJ",
        "tipo": "Apartamento",
        "metragem": "65",
        "quartos": "2",
        "vagas": "1",
        "banheiros": "1",
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/vitrine/imovel1.jpg", 
        "link": "#"
    },
    {
        "bairro": "Leblon",
        "cidade": "Rio de Janeiro",
        "UF": "RJ",
        "tipo": "Apartamento",
        "metragem": "78",
        "quartos": "3",
        "vagas": "2",
        "banheiros": "2",
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/vitrine/imovel2.jpg", 
        "link": "#"
    },
    {
        "bairro": "Recreio dos Bandeirantes",
        "cidade": "Rio de Janeiro",
        "UF": "RJ",
        "tipo": "Apartamento",
        "metragem": "85",
        "quartos": "3",
        "vagas": "2",
        "banheiros": "3",
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/vitrine/imovel3.jpg", 
        "link": "#"
    },
    {
        "bairro": "Urca",
        "cidade": "Rio de Janeiro",
        "UF": "RJ",
        "tipo": "Apartamento",
        "metragem": "60",
        "quartos": "2",
        "vagas": "1",
        "banheiros": "1",
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/vitrine/imovel4.jpg", 
        "link": "#"
    },
    {
        "bairro": "Barra da Tijuca",
        "cidade": "Rio de Janeiro",
        "UF": "RJ",
        "tipo": "Apartamento",
        "metragem": "74",
        "quartos": "3",
        "vagas": "1",
        "banheiros": "2",
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/vitrine/imovel5.jpg", 
        "link": "#"
    },
    {
        "bairro": "Copacabana",
        "cidade": "Rio de Janeiro",
        "UF": "RJ",
        "tipo": "Apartamento",
        "metragem": "63",
        "quartos": "2",
        "vagas": "1",
        "banheiros": "2",
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/vitrine/imovel6.jpg", 
        "link": "#"
    }
]

let counter = 0;
let listImgBanners;
let listTitelsBanners;
main = () => {
    listImgBanners = banners.map(item => {
        return(item.imagem)
    })

    listTitelsBanners = banners.map(item => {
        return(item.titulo)
    })

    console.log(listImgBanners)
    nextCarousel = () => {
        if (counter == 0){
            console.log(counter)
            counter++
            document.querySelector('#banner').setAttribute('src', listImgBanners[counter])
            document.querySelector('#titleSlide').innerHTML = listTitelsBanners[counter]
        }
        else {
            console.log(counter)
            counter = 0
            document.querySelector('#banner').setAttribute('src', listImgBanners[counter])
            document.querySelector('#titleSlide').innerHTML = listTitelsBanners[counter]
        }
    }

    backCarousel = () => {
        console.log(listImgBanners.length)
        if (counter == 1){
            console.log(counter)
            counter--
            document.querySelector('#banner').setAttribute('src', listImgBanners[counter])
            document.querySelector('#titleSlide').innerHTML = listTitelsBanners[counter]
        }
        else {
            console.log(counter)
            counter = 1
            document.querySelector('#banner').setAttribute('src', listImgBanners[counter])
            document.querySelector('#titleSlide').innerHTML = listTitelsBanners[counter]
        }
    }
}



main()

// Inserting banner slide function
// (function() {
    
//     myCarousel = () =>{
//         var carousel = {
//             containerCarousel: document.querySelector('.box_slide--list_itens'),
//             listCarousel: document.querySelectorAll('.box_slide--list_itens .list_itens--iten'),
//             itemCarousel: [],
//             countLeft: 0,
//             countRight: 0,
//             maxHeigth: 0,
//             pagination: document.createElement('div')
//         }
        
//         moveLeft = (array) => {
//             let list = array
//             // var left = document.querySelector('.container_slide--arow_left');
//             // var center = document.querySelector('.center');
//             // var right = document.querySelector('.container_slide--arow_right');
            
//             // left.innerHTML = carousel.itemCarousel[carousel.countLeft++];
//             // if (carousel.countLeft === carousel.itemCarousel.length) carousel.countLeft = 0;
            
//             // carousel.countRight++;
//             // if (carousel.countRight === carousel.itemCarousel.length) carousel.countRight = 0;
            
//             // center.className = 'left';
//             // right.className = 'center';
//             // left.className = 'right first';
//         }
//         console.log(moveLeft(banners.imagem))
        
//         moveRight = () => {
            
//             var left = carousel.containerCarousel.querySelector('.left');
//             var center = carousel.containerCarousel.querySelector('.center');
//             var right = carousel.containerCarousel.querySelector('.right');

//             right.innerHTML = carousel.itemCarousel[carousel.countRight--];
//             if (carousel.countRight == -1) carousel.countRight = carousel.itemCarousel.length - 1;

//             carousel.countLeft--;
//             if (carousel.countLeft === -1) carousel.countLeft = carousel.itemCarousel.length - 1;

//             center.className = 'right';
//             left.className = 'center';
//             right.className = 'left first';
//         }

        buildCarousel = () => {

            if (counter > 2) {
                if (counter === 3) {
                    carousel.countLeft = 0;
                    carousel.countRight = 2;
                } else {
                    carousel.countLeft = 3;
                    carousel.countRight = counter - 1;
                }

                for (var i = counter - 1; i >= 0; i--) {
                    if (carousel.maxHeigth < carousel.listCarousel[i].offsetHeight) carousel.maxHeigth = carousel.listCarousel[i].offsetHeight;
                    carousel.itemCarousel[i] = carousel.listCarousel[i].innerHTML;
                    carousel.listCarousel[i].remove();
                }

                for (var j = 2; j >= 0; j--) {
                    carousel.containerCarousel.appendChild(carousel.listCarousel[j]);
                }
                carousel.listCarousel[0].className = 'left';
                carousel.listCarousel[1].className = 'center';
                carousel.listCarousel[2].className = 'right';

                carousel.containerCarousel.style.height = carousel.maxHeigth + 'px';

                addPaginator();
            }
        }

//         addPaginator = () => {
//             var btnLeft = document.createElement('div'),
//                 btnRight = document.createElement('div');

//             btnLeft.className = 'btn';
//             btnLeft.onclick = moveLeft;

//             btnRight.onclick = moveRight;
//             btnRight.className = 'btn';

//             carousel.pagination.className = 'paginator';
//             carousel.pagination.appendChild(btnLeft);
//             carousel.pagination.appendChild(btnRight);

//             carousel.containerCarousel.parentNode.appendChild(carousel.pagination);
//         }

        start = () => {
            buildCarousel();
            setInterval(nextCarousel, 5000);
        }

        start();
//     }

//     myCarousel();

// // })();
