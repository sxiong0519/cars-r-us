import { paint } from "./PaintColors.js"
import { seats } from "./InteriorSeatTypes.js"
import { dashboards } from "./TechnologyDashboard.js"
import { theWheels } from "./Wheels.js"


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
    `
}

