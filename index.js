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

let counter = 0;
let listImg;
main = () => {
    listImg = banners.map(item => {
        return(item.imagem)
    })

    console.log(listImg)
    carousel = () => {
        
        counter++
        console.log(counter)
        if (counter >= listImg.length){
            counter = 0
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
            setInterval(carousel, 5000);
        }

        // start();
//     }

//     myCarousel();

// // })();
