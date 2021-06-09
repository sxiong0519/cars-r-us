import { getWheels } from "./database.js"

const wheels = getWheels()

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = wheels.map(wheel => {
        return `<li>
        <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.material}
        </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

