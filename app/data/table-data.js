let waitingArray = require('waitingArray');
var tableArray = [
    {
        customerName: "Ahmed",
        customerEmail: "ahmed@example.com",
        customerID: "afhaque89",
        phoneNumber: "000-000-0000"
    }
];

$('.submit').on('click', function (event) {
    event.preventDefault();
    let newResName = $('#nameInput').val().trim();
    let newResPhone = $('#phoneNumberInput').val().trim();
    let newResEmail = $('#emailInput').val().trim();
    let newResID = $('#idInput').val().trim();
})
if (tableArray.length < 4) {
    tableArray.push({
        customerName: newResName,
        customerEmail: newResEmail,
        customerID: newResID,
        phoneNumber: newResPhone
    });
    console.log(tableArray);
    console.log(waitingArray);
}
else {
    waitingArray.push({
        customerName: newResName,
        customerEmail: newResEmail,
        customerID: newResID,
        phoneNumber: newResPhone
    });
    console.log(tableArray);
    console.log(waitingArray);
}


module.exports = tableArray
