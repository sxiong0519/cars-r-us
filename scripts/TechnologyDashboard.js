import { getTechnologyDashboards } from "./database.js"

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

