const URL = 'https://platzi-avo.vercel.app/api/avo';
const baseUrl = 'https://platzi-avo.vercel.app'

async function getData() {

    const res = await fetch(URL);
    const { data } = await res.json()

    //initialize variables
    let title, imagen, price, containerITem;

    //create an array to add all div
    const allElements = [];

    data.forEach(element => {
        //create a title
        title = document.createElement('h2');
        title.textContent = element.name;
        title.className = "fs-4 text-success text-center";


        //create a img
        imagen = document.createElement('img');
        imagen.src = `${baseUrl}${element.image}`;

        //cretate a p =>price
        price = document.createElement('p');
        price.textContent = `$${ element.price}`;
        price.className = "fs-5 text-dark text-center";

        //create div container
        containerITem = document.createElement('div');
        containerITem.append(title, imagen, price);

        //add elements to array
        allElements.push(containerITem);

    });
    //add the div container principle
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.append(container);

    //add title primary
    const titlePrimary = document.createElement('h1');
    titlePrimary.textContent = "The avocado API Platzi"
    container.insertAdjacentElement("beforebegin", titlePrimary);
    titlePrimary.className = "fs-1 text-center mb-5 mt-1 fw-bolder"



    //add className to containerItem
    allElements.forEach(elem => {
        elem.className = "d-flex justify-content-center m-2 flex-column border rounded bg-ligth shadow"
    })



    //add all elements to container
    container.append(...allElements);
}

getData();