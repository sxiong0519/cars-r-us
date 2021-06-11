import { getInteriorSeatTypes } from "./database.js"

document.addEventListener("click", //the trigger event it is "listening" for
    (clickEvent) => { //parameter (whatever you want it to be called)
        const itemClicked = clickEvent.target // naming the triggered event "itemClicked"
        if (itemClicked.name === "seatType") { // if the clicked item's name = "seat type" then it will run the rest of the code... name comes from the code below
            const seatTypesId = itemClicked.value // assigning the value (seatType.id) to seatTypes id
            for (const seatType of seatTypes) { //singling seattypes
                if (seatType.id === parseInt(seatTypesId)) { //making seattypesId from above an integer and comparing it to the data seatType id
                    window.alert(`You chose ${seatType.material} as your interior.`) //if the id's match then the alert pops up
                }
            }
        }

    }
)

// document.addEventListener("click", (event) => {
//     if (event.target.id === "orderButton") {
//         addCustomOrder()
//     }
// })


const seatTypes = getInteriorSeatTypes()

export const seats = () => {
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

