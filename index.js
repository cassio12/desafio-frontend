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
    start();
    // console.log(document.querySelector('#containerCard'))
    loadShowcase = () => {
        // let carouselNeighborhoods = showcase.map(item => {
        //     return(item.bairro)
        // })
        // let carouselCities = showcase.map(item => {
        //     return(item.cidade)
        // })
        // let carouselUF = showcase.map(item => {
        //     return(item.UF)
        // })
        // let carouselTypes = showcase.map(item => {
        //     return(item.tipos)
        // })
        // let carouselFootage = showcase.map(item => {
        //     return(item.metragem)
        // })
        // let carouselBedrooms = showcase.map(item => {
        //     return(item.quartos)
        // })
        // let carouselVacancies = showcase.map(item => {
        //     return(item.vagas)
        // })
        // let carouselBathrooms = showcase.map(item => {
        //     return(item.banheiros)
        // })
        // let carouselImgs = showcase.map(item => {
        //     return(item.capa)
        // })

        cardShowcase = showcase.map(item => {
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
            let txtNeighborhoods = document.createElement('p')
            let txtUF = document.createElement('p')
            let txtAmountFirst = document.createElement('p')
            let txtAmountSecond = document.createElement('p')
            let txtAmountThird = document.createElement('p')

            cardDiv.setAttribute("class", "container_carousel--item")
            characteristicsDiv.setAttribute("class", "item--box_characteristics")
            characteristicsFirtDiv.setAttribute("class", "box_characteristics--first_box")
            characteristicsSecondDiv.setAttribute("class", "box_characteristics--second_box")
            characteristicsThirdDiv.setAttribute("class", "box_characteristics--third_box")
            cardLocalDiv.setAttribute("class", "item--box_local")
            imgCard.setAttribute("class", "item--img")
            imgCard.setAttribute("src", item.capa)
            iconDormitory.setAttribute("class", "first_box--img")
            iconVacancies.setAttribute("class", "second_box--img")
            iconFootage.setAttribute("class", "third_box--img")
            titleCard.setAttribute("class", "item--Type_immobile")
            titleCard.appendChild(txtTitleCard)
            neighborhoods.setAttribute("class", "box_local--neighborhoods")
            UF.setAttribute("class", "box_local--UF")
            amountFirst.setAttribute("class", "first_box--amount")
            amountSecond.setAttribute("class", "second_box--amount")
            amountThird.setAttribute("class", "third_box--amount")
            btnMore.setAttribute("class", "item--btn_more")

            cardDiv.appendChild(imgCard)
            cardDiv.appendChild(titleCard)
            cardDiv.appendChild(cardLocalDiv)
            cardDiv.appendChild(characteristicsDiv)
            cardDiv.appendChild(btnMore)

            console.log(cardDiv)

            console.log(document.querySelector("#containerCard"))
            document.querySelector("#containerCard").appendChild(cardDiv) 
        })

    }
    loadShowcase();
    
}


// Calling main function
main();