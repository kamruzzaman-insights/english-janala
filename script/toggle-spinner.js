// const toggleSpinner = (status) => {
//     const spinner = document.getElementById("spinner");

//     status ? spinner.classList.remove("hidden") : spinner.classList.add("hidden");
// }

const toggleSpinnerOne = (status) => {
    const spinnerOne = document.getElementById("spinner-one");

    if (status) {
        spinnerOne.classList.remove("hidden");
    } else {
        spinnerOne.classList.add("hidden");
    }
}

const toggleSpinnerTwo = (status) => {
    const spinnerTwo = document.getElementById("spinner-two");

    if (status) {
        spinnerTwo.classList.remove("hidden");
    } else {
        spinnerTwo.classList.add("hidden");
    }
}