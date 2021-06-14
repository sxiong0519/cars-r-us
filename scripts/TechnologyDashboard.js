import { getTechnologyDashboards, setTechnologyDashboard } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technologyDashboard") {
            setTechnologyDashboard(parseInt(event.target.value))
        }
    }

)

const technologyDashboards = getTechnologyDashboards()

export const dashboards = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = technologyDashboards.map(technologyDashboard => {
        return `<li>
        <input type="radio" name="technologyDashboard" value="${technologyDashboard.id}" /> ${technologyDashboard.dashboard}
        </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

