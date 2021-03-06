import { getPaintColors, setPaintColor } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            setPaintColor(parseInt(event.target.value))
        }
    }

)

const paintColors = getPaintColors()

export const paint = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = paintColors.map(paintColor => {
        return `<li>
        <input type="radio" name="paintColor" value="${paintColor.id}" /> ${paintColor.color}
        </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

