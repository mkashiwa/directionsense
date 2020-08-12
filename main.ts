let direct = 0
basic.forever(function () {
    direct = input.compassHeading()
    if (direct < 23) {
        basic.showArrow(ArrowNames.North)
    } else if (direct < 68) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (direct < 113) {
        basic.showArrow(ArrowNames.West)
    } else if (direct < 158) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (direct < 203) {
        basic.showArrow(ArrowNames.South)
    } else if (direct < 248) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (direct < 293) {
        basic.showArrow(ArrowNames.East)
    } else if (direct < 338) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
