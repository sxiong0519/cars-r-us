import { getOrders, getInteriorSeatTypes, getPaintColors, getTechnologyDashboards, getWheels } from "./database.js"

const buildOrderListItem = (order) => {
    const seats = getInteriorSeatTypes()
    const wheels = getWheels()
    const colors = getPaintColors()
    const dashboards = getTechnologyDashboards()

    const chosenSeat = seats.find(
        (interiorSeatTypes) => {
            return interiorSeatTypes.id === order.interiorSeatTypesId
        }
    )
    const chosenWheels = wheels.find(
        (wheels) => {
            return wheels.id === order.wheelsId
        }
    )
    const chosenColors = colors.find(
        (paintColors) => {
            return paintColors.id === order.paintColorsId
        }
    )
    const chosenDashboards = dashboards.find(
        (technologyDashboards) => {
            return technologyDashboards.id === order.technologyDashboardsId
        }
    )

    const totalCost = chosenSeat.price + chosenWheels.price + chosenColors.price + chosenDashboards.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} was ordered at ${order.timestamp} and it costs ${costString}
    </li>`
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
