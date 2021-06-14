import { getPaintColors, setPaintColor } from "./database.js"

document.addEventListener("click", //the trigger event it is "listening" for
    (clickEvent) => { //parameter (whatever you want it to be called)
        const itemClicked = clickEvent.target // naming the triggered event "itemClicked"
        if (itemClicked.name === "paintColor") { // if the clicked item's name = "seat type" then it will run the rest of the code... name comes from the code below
            setPaintColor(itemClicked.value)
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

