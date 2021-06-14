import { getInteriorSeatTypes, setInteriorSeatType } from "./database.js"

document.addEventListener("click", //the trigger event it is "listening" for
    (clickEvent) => { //parameter (whatever you want it to be called)
        const itemClicked = clickEvent.target // naming the triggered event "itemClicked"
        if (itemClicked.name === "seatType") { // if the clicked item's name = "seat type" then it will run the rest of the code... name comes from the code below
            setInteriorSeatType(itemClicked.value)
         } // assigning the value (seatType.id) to seatTypes id
    }
)


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

