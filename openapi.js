const apiKey = "live_IyAgkExGR8tyc0GwmVsrZpaDS2vk8LaXt7EITTPfjd8BE0lzuVmebzuWH5SUNc0d";

let button = document.createElement("button");
button.innerText = "Generate 1 Cat Image";
const buttons = document.querySelector("#buttons");
buttons.appendChild(button);
const catContainer = document.querySelector("#catContainer");

async function getData(){
    try{
        catContainer.innerHTML="";
        catContainerTwo.innerHTML="";
        const response = await fetch(`https://api.thecatapi.com/v1/images/search`, {
            headers: {
                "x-api-key": apiKey
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        for (let i = 0; i < 1; i++) {
            const img = document.createElement("img");
            img.setAttribute("src", data[i].url);
            catContainer.appendChild(img);
        }
        console.log(data);
    } catch (error) {
        console.log(`Could not fetch data:`, error);
        }
    }

button.addEventListener("click", getData)

let buttonTwo = document.createElement("button");
buttonTwo.innerText = "Generate 10 Cat Images";
buttons.appendChild(buttonTwo);
const catContainerTwo = document.querySelector("#catContainerTwo");



async function getDataTwo(){
    try{
        catContainer.innerHTML="";
        catContainerTwo.innerHTML="";
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`, {
            headers: {
                "x-api-key": apiKey
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
            const img = document.createElement("img");
            img.setAttribute("src", data[i].url);
            catContainerTwo.appendChild(img);
        }
        console.log(data);
    } catch (error) {
        console.log(`Could not fetch data:`, error);
        }
    }

buttonTwo.addEventListener("click", getDataTwo)
