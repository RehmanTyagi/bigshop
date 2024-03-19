export const DataTypeConverter = (value) => {
    // Check if userInput is a number
    if (isNaN(value)) {
        return value
    } else {
        return Number(value)
    }
}
