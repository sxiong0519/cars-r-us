import { getWheels, setWheel } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }

)



const wheels = getWheels()

export const theWheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = wheels.map(wheel => {
        return `<li>
        <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheels}
        </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

