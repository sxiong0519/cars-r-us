import { paint } from "./PaintColors.js"
import { seats } from "./InteriorSeatTypes.js"
import { dashboards } from "./TechnologyDashboard.js"
import { theWheels } from "./Wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
        addCustomOrder()
    }
})

export const carsrus = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paintColors options">
                <h2>Paint Colors</h2>
                ${paint()}
            </section>
            <section class="choices__seatTypes options">
                <h2>Interior Material</h2>
                ${seats()}
            </section>
            <section class="choices__technologyDashboards options">
                <h2>Dashboard Packages</h2>
                ${dashboards()}
            </section>
            <section class="choices__wheels options"> 
                <h2>Wheels</h2>
                ${theWheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}

