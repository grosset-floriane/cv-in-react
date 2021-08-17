export function formatDate(unformattedDate) {
    const months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const dateArr = unformattedDate.split('-');
    return months[dateArr[1] - 1 ] + ' ' + dateArr[0];
}
