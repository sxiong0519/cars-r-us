import { getWheels, setWheel } from "./database.js"

document.addEventListener("click", //the trigger event it is "listening" for
    (clickEvent) => { //parameter (whatever you want it to be called)
        const itemClicked = clickEvent.target // naming the triggered event "itemClicked"
        if (itemClicked.name === "wheel") { // if the clicked item's name = "seat type" then it will run the rest of the code... name comes from the code below
            setWheel(itemClicked.value)
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

