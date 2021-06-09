import { getInteriorSeatTypes } from "./database.js"

const seatTypes = getInteriorSeatTypes()

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = seatTypes.map(seatType => {
        return `<li>
        <input type="radio" name="seatType" value="${seatType.id}" /> ${seatType.material}
        </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

