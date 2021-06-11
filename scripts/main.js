import { carsrus } from "./carsrus.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsrus()
}

renderAllHTML()


