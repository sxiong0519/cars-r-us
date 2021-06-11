import { getPaintColors } from "./database.js"

document.addEventListener("click", //the trigger event it is "listening" for
    (clickEvent) => { //parameter (whatever you want it to be called)
        const itemClicked = clickEvent.target // naming the triggered event "itemClicked"
        if (itemClicked.name === "paintColor") { // if the clicked item's name = "seat type" then it will run the rest of the code... name comes from the code below
            const paintColorsId = itemClicked.value // assigning the value (seatType.id) to seatTypes id
            for (const paintColor of paintColors) { //singling seattypes
                if (paintColor.id === parseInt(paintColorsId)) { //making seattypesId from above an integer and comparing it to the data seatType id
                    window.alert(`You chose ${paintColor.color} as your car color.`) //if the id's match then the alert pops up
                }
            }
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

