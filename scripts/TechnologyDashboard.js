import { getTechnologyDashboards, setTechnologyDashboard } from "./database.js"

document.addEventListener("click", //the trigger event it is "listening" for
    (clickEvent) => { //parameter (whatever you want it to be called)
        const itemClicked = clickEvent.target // naming the triggered event "itemClicked"
        if (itemClicked.name === "technologyDashboard") { // if the clicked item's name = "seat type" then it will run the rest of the code... name comes from the code below
            setTechnologyDashboard(itemClicked.value)
        }

    }
)

const technologyDashboards = getTechnologyDashboards()

export const dashboards = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = technologyDashboards.map(technologyDashboard => {
        return `<li>
        <input type="radio" name="technologyDashboard" value="${technologyDashboard.id}" /> ${technologyDashboard.package}
        </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

