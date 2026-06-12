function getValue(event) {

    event.preventDefault(); // Stops page refresh

    const value = document.getElementById("numberTaker").value;

    if (value % 2 == 0)
        alert("This is an even number");
    else
        alert("This is an odd number");
}