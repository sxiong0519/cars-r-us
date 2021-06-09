const options = {
    orderBuilder: {},
    paintColors: [
        {
            id: 1,
            color: 'silver',
            price: 5
        },
        {
            id: 2,
            color: 'midnight blue',
            price: 10},
        {
            id: 3,
            color: 'firebrick red',
            price: 12},
        {
            id: 4,
            color: 'spring green',
            price: 8
        } 
    ],
    interiorSeatTypes: [
        {
            id: 1,
            material: 'beige fabric',
            price: 134
        },
        {
            id: 2,
            material: 'charcoal fabric',
            price: 177
        },
        {
            id: 3,
            material: 'white leather',
            price: 365
        },
        {
            id: 4,
            material: 'black leather',
            price: 299
        }
    ],
    technologyDashboards: [
        {
            id: 1,
            package: 'basic package',
            price: 375
        },
        {
            id: 2,
            package: 'navigation package',
            price: 425
        },
        {
            id: 3,
            package: 'visibility package',
            price: 500
        },
        {
            id: 4,
            package: 'ultra package',
            price: 675
        }
    ],
    wheels: [
        {
            id: 1,
            wheels: '17-inch pair radial',
            price: 235
        },
        {
            id: 2,
            wheels: '17-inch pair radial black',
            price: 285
        },
        {  
            id: 3,
            wheels: '18-inch pair spoke silver',
            price: 300
        },
        {  
            id: 4,
            wheels: '18-inch pair spoke black',
            price: 375
        }
    ],
    customerOrders: [
        {
            id: 1,
            paintColorsId: 3,
            interiorSeatTypesId: 4,
            technologyDashboardsId: 2,
            wheelsId: 2
        }
    ]
}

export const getPaintColors = () => {
    return options.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriorSeatTypes = () => {
    return options.interiorSeatTypes.map(interiorSeatType => ({...interiorSeatType}))
}

export const getTechnologyDashboards = () => {
    return options.technologyDashboards.map(technologyDashboard => ({...technologyDashboard}))
}

export const getWheels = () => {
    return options.wheels.map(wheel => ({...wheel}))
}

export const setInteriorSeatType = (id) => {
    options.orderBuilder.interiorSeatTypeId = id
}

export const setTechnologyDashboard = (id) => {
    options.orderBuilder.technologyDashboardId = id
}
export const setPaintColor = (id) => {
    options.orderBuilder.paintColorId = id
}
export const setWheel = (id) => {
    options.orderBuilder.wheelId = id
}