const formatDate = (date) => {
    // Check if the input is a valid Date object
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error("Invalid Date object.");
    }

    // Define an array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // Extract the month, day, and year components
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // Create the formatted date string
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
}

export default formatDate