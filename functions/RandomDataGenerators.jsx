const RandomTransmission = () => {
    let randomNum = Math.floor(Math.random() * 2) + 1
    if (randomNum % 2) return "Manual"
    else return "Automatic"
}

const RandomFuel = () => {
    let randomNum = Math.floor(Math.random() * 2) + 1
    if (randomNum % 2) return "Gasoline"
    else return "Diesel"
}
const RandomMileage = () => {
    return Math.floor(Math.random() * 300000) + 100000
}