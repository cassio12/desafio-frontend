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

// Inserting showcase
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

let news = [
    {
        "titulo": "Preço dos imóveis residenciais recua em setembro",
        "sumario": "No acumulado do ano e em 12 meses, os valores seguem com avanço inferior à inflação.", 
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/noticias/noticia1.jpg",
        "link": "#"
    },
    {
        "titulo": "20% dos novos financiamentos de imóveis da Caixa já são pelo IPCA",
        "sumario": "Lançada há um mês, modalidade é opcional e oferece juros de até 4,95% ao ano acrescidos da inflação no período.", 
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/noticias/noticia2.jpg", 
        "link": "#"
    },
    {
        "titulo": "Compra e venda de imóveis têm alta de quase 6%",
        "sumario": "Entre julho do ano passado e junho de 2019, foram comprados e vendidos cerca de 613 mil imóveis no estado.", 
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/noticias/noticia3.jpg", 
        "link": "#"
    },
    {
        "titulo": "Risco de bolha imobiliária aumenta na zona do euro",
        "sumario": "ela primeira vez em quatro anos, Londres não foi classificada como uma cidade com imóveis perigosamente sobrevalorizado.", 
        "capa": "https://labs.inforcedata.com.br/desafio-frontend/noticias/noticia4.jpg", 
        "link": "#"
    }
]

let keyWords = [
    {
        "tag": "apartamentos na barra",
        "link": "#"
    },
    {
        "tag": "casas no recreio",
        "link": "#"
    },
    {
        "tag": "casa com 3 quartos",
        "link": "#"
    },
    {
        "tag": "barra da tijuca",
        "link": "#"
    },
    {
        "tag": "apartamento com 2 quartos",
        "link": "#"
    },
    {
        "tag": "casa na urca",
        "link": "#"
    },
    {
        "tag": "humaita",
        "link": "#"
    }
]

// Main function
main = () => {
    let cardShowcase;
    let counter = 0;

    // Mapping banner images
    let listImgsBanners = banners.map(item => {
        return(item.imagem)
    })
    // Mapping banner titles
    let listTitelsBanners = banners.map(item => {
        return(item.titulo)
    })
    // Function to pass next banner
    nextCarousel = () => {
        if (counter == 0){
            console.log(counter)
            counter++
            document.querySelector('#banner').setAttribute('src', listImgsBanners[counter])
            document.querySelector('#titleSlide').innerHTML = listTitelsBanners[counter]
        }
        else {
            console.log(counter)
            counter = 0
            document.querySelector('#banner').setAttribute('src', listImgsBanners[counter])
            document.querySelector('#titleSlide').innerHTML = listTitelsBanners[counter]
        }
    }
    // Function to return to the previous banner
    backCarousel = () => {
        console.log(listImgsBanners.length)
        if (counter == 1){
            console.log(counter)
            counter--
            document.querySelector('#banner').setAttribute('src', listImgsBanners[counter])
            document.querySelector('#titleSlide').innerHTML = listTitelsBanners[counter]
        }
        else {
            console.log(counter)
            counter = 1
            document.querySelector('#banner').setAttribute('src', listImgsBanners[counter])
            document.querySelector('#titleSlide').innerHTML = listTitelsBanners[counter]
        }
    }
    // Function to automate banner call
    start = () => {
        setInterval(nextCarousel, 5000);
    }
    // Calling Altomatics Function
    // start();

    // Function to load cards from the property showcase and navigation menu
    loadShowcase = () => {
        cardShowcase = showcase.map((item, index) => {
            let pointerDiv = document.createElement('div')
            pointerDiv.setAttribute("class", "box_navegation--item")

            let cardDiv = document.createElement('div')
            let characteristicsDiv = document.createElement('div')
            let characteristicsFirtDiv= document.createElement('div')
            let characteristicsSecondDiv = document.createElement('div')
            let characteristicsThirdDiv = document.createElement('div')
            let cardLocalDiv = document.createElement('div')
            let imgCard = document.createElement('img')
            let iconDormitory = document.createElement('img')
            let iconVacancies = document.createElement('img')
            let iconFootage = document.createElement('img')
            let titleCard = document.createElement('p')
            let neighborhoods = document.createElement('p')
            let UF = document.createElement('p')
            let amountFirst = document.createElement('p')
            let amountSecond = document.createElement('p')
            let amountThird = document.createElement('p')
            let btnMore = document.createElement('button')

            let txtTitleCard = document.createTextNode(item.tipo)
            let txtNeighborhoods = document.createTextNode(item.bairro + " - ")
            let txtUF = document.createTextNode(item.UF)
            let txtAmountFirst = document.createTextNode(item.quartos)
            let txtAmountSecond = document.createTextNode(item.vagas)
            let txtAmountThird = document.createTextNode(item.metragem + " m²")
            let txtBtnMore = document.createTextNode("Veja mais")

            cardDiv.setAttribute("class", "container_carousel--item")
            characteristicsDiv.setAttribute("class", "item--box_characteristics")
            characteristicsFirtDiv.setAttribute("class", "box_characteristics--first_box iconBox")
            characteristicsSecondDiv.setAttribute("class", "box_characteristics--second_box iconBox")
            characteristicsThirdDiv.setAttribute("class", "box_characteristics--third_box iconBox")
            cardLocalDiv.setAttribute("class", "item--box_local")
            imgCard.setAttribute("class", "item--img")
            imgCard.setAttribute("src", item.capa)
            iconDormitory.setAttribute("class", "first_box--img icon")
            iconDormitory.setAttribute("src", "./assets/bed.png")
            iconVacancies.setAttribute("class", "second_box--img icon")
            iconVacancies.setAttribute("src", "./assets/car.png")
            iconFootage.setAttribute("class", "third_box--img icon")
            iconFootage.setAttribute("src", "./assets/area.png")
            titleCard.setAttribute("class", "item--Type_immobile")
            titleCard.appendChild(txtTitleCard)
            neighborhoods.setAttribute("class", "box_local--neighborhoods region")
            UF.setAttribute("class", "box_local--UF region")
            amountFirst.setAttribute("class", "first_box--amount")
            amountSecond.setAttribute("class", "second_box--amount")
            amountThird.setAttribute("class", "third_box--amount")
            btnMore.setAttribute("class", "item--btn_more")

            cardDiv.setAttribute("value", index)

            neighborhoods.appendChild(txtNeighborhoods)
            UF.appendChild(txtUF)

            amountFirst.appendChild(txtAmountFirst)
            amountSecond.appendChild(txtAmountSecond)
            amountThird.appendChild(txtAmountThird)

            characteristicsFirtDiv.appendChild(iconDormitory)
            characteristicsFirtDiv.appendChild(amountFirst)

            characteristicsSecondDiv.appendChild(iconVacancies)
            characteristicsSecondDiv.appendChild(amountSecond)

            characteristicsThirdDiv.appendChild(iconFootage)
            characteristicsThirdDiv.appendChild(amountThird)

            characteristicsDiv.appendChild(characteristicsFirtDiv)
            characteristicsDiv.appendChild(characteristicsSecondDiv)
            characteristicsDiv.appendChild(characteristicsThirdDiv)

            cardLocalDiv.appendChild(neighborhoods)
            cardLocalDiv.appendChild(UF)

            btnMore.appendChild(txtBtnMore)

            cardDiv.appendChild(imgCard)
            cardDiv.appendChild(titleCard)
            cardDiv.appendChild(cardLocalDiv)
            cardDiv.appendChild(characteristicsDiv)
            cardDiv.appendChild(btnMore)

            
            document.querySelector("#boxPointer").appendChild(pointerDiv)

            document.querySelector("#containerCard").appendChild(cardDiv) 
            
            // pointerDiv.addEventListener("click", function(){
            //     console.log("index",index)
            //     console.log("item",item)
            //     if(index === 0){
            //         // console.log("igual")
            //         // console.log(cardDiv.attributes.value)
            //         cardDiv.setAttribute("class", "select_card");
            //     }
            //     else {
            //         // console.log('diferente')
            //         // console.log(cardDiv.attributes.value)
            //         cardDiv.setAttribute("class", "container_carousel--item");
            //         if(index === 1){
            //             cardDiv.setAttribute("class", "select_card");
            //         }
            //         else {
            //             cardDiv.setAttribute("class", "container_carousel--item");
            //             if(index === 2){
            //                 cardDiv.setAttribute("class", "select_card");
            //             }
            //             else {
            //                 cardDiv.setAttribute("class", "container_carousel--item");
            //                 if(index === 3){
            //                     cardDiv.setAttribute("class", "select_card");
            //                 }
            //                 else {
            //                     cardDiv.setAttribute("class", "container_carousel--item");
            //                     if(index === 4){
            //                         cardDiv.setAttribute("class", "select_card");
            //                     }
            //                     else {
            //                         cardDiv.setAttribute("class", "container_carousel--item");
            //                         if(index === 5){
            //                             cardDiv.setAttribute("class", "select_card");
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
                // 
                // switch(index) {
                //     case 0:
                //         return cardDiv.setAttribute("class", "select_card");
                        
                //     case 1: 
                //         return cardDiv.setAttribute("class", "select_card");

                //     case 2: 
                //         return cardDiv.setAttribute("class", "select_card");

                //     case 3: 
                //         return cardDiv.setAttribute("class", "select_card");

                //     case 4: 
                //         return cardDiv.setAttribute("class", "select_card");

                //     case 5: 
                //         return cardDiv.setAttribute("class", "select_card");

                // }
            // })

            // console.log(cardDiv.attributes.value)
        })

        // console.log(cardShowcase)
    }
    // Calling function loadShowcase
    loadShowcase();

    // Function for loading news cards
    loadNews = () => {
        news.map(item => {
            let pointerDivNews = document.createElement('div')
            pointerDivNews.setAttribute("class", "box_navegationCardNews--item")

            let cardDivNew = document.createElement('div') 
            let txtDivNew = document.createElement('div')
            let btnDivNew = document.createElement('div')
            let imgNew = document.createElement('img') 
            let titleNew = document.createElement('p')
            let paragraphNew = document.createElement('p')
            let btnNew = document.createElement('button')

            let txtBtnNew = document.createTextNode('Veja mais')
            let txtParagraphNew = document.createTextNode(item.sumario)
            let txtTitleNew = document.createTextNode(item.titulo)

            cardDivNew.setAttribute("class", "box_cardNews--card_item")
            txtDivNew.setAttribute("class", "box_cardNews--box_textCardNews")
            btnDivNew.setAttribute("class", "box_cardNews--box_btn")
            imgNew.setAttribute("class", "box_cardNews--img_news")
            imgNew.setAttribute("src", item.capa)
            titleNew.setAttribute("class", "box_textCardNews--title_news")
            paragraphNew.setAttribute("class", "box_textCardNews--txt_news")
            btnNew.setAttribute("class", "box_btn--btn_news")

            btnNew.appendChild(txtBtnNew)
            paragraphNew.appendChild(txtParagraphNew)
            titleNew.appendChild(txtTitleNew)

            btnDivNew.appendChild(btnNew)

            txtDivNew.appendChild(titleNew)
            txtDivNew.appendChild(paragraphNew)

            cardDivNew.appendChild(imgNew)
            cardDivNew.appendChild(txtDivNew)
            cardDivNew.appendChild(btnDivNew)

            document.querySelector("#boxNavegation").appendChild(pointerDivNews)
            document.querySelector("#boxCard").appendChild(cardDivNew) 
        })
    }
    // Calling function loadNews
    loadNews();

    // Function to load the keywords
    loadTags = () => {
        keyWords.map(item => {
            let keyWord = document.createElement('p')
            let txtKeyWord = document.createTextNode(item.tag)

            keyWord.setAttribute("class", "box_hits--text")

            keyWord.appendChild(txtKeyWord)
            document.querySelector("#boxHits").appendChild(keyWord)
        })
    }
    // Calling function loadTags
    loadTags();
}

// Calling main function
main();