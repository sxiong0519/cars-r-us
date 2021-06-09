import { paintColors } from "./PaintColors.js"
import { seatTypes } from "./InteriorSeatTypes.js"
import { technologyDashboards} from "./TechnologyDashboard.js"
import { wheels } from "./Wheels.js"


export const carsrus = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paintColors options">
                <h2>Paint Colors</h2>
                ${paintColors}
            </section>
            <section class="choices__seatTypes options">
                <h2>Interior Material</h2>
                ${seatTypes}
            </section>
            <section class="choices__technologyDashboards options">
                <h2>Dashboard Packages</h2>
                ${technologyDashboards}
            </section>
            <section class="choices__wheels options"> 
                <h2>Wheels</h2>
                ${wheels}
        </article>
    `
}

