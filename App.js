$(document).ready(function () {
    //stores the input from the user to be calculated later
    var inputs = [""];
    //string to hold current inputed string
    var totalString;
    //Operators array without the . for validation
    var operators1 = ["+", "-", "/", "*"];
    //Operators array with . for validation
    var operators2 = ["."];
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //numbers array

    function update() {
        totalString = inputs.join("");
        $("#steps").html(totalString);
    }

    function getValue(input) {
        if (inputs.length <= 9) {
            if (operators2.includes(inputs[inputs.length - 1]) === true && input === '.') {
                console.log("Duplicate '.' ");
            } else if (inputs.length === 1 && operators1.includes(input) === false) {
                inputs.push(input);
            } else if (operators1.includes(inputs[inputs.length - 1]) === false) {
                inputs.push(input);
            } else if (nums.includes(Number(input))) {
                inputs.push(input);
            }
            update();
        }
    }

    function getTotal() {
        totalString = inputs.join("");
        $("#steps").html(eval(totalString).toFixed(2));
        // toFixed(2) will round the decimal to 2 places.
    }

    $("a").on("click", function () {
        if (this.id === "deleteAll") {
            inputs = [""];
            update();
        } else if (this.id === "backOne") {
            inputs.pop();
            // to check if the whole string is getting deleted and then update with inputs value of zero
            if (inputs.length === 0) {
                inputs = [""];
            }
            update();
        } else if (this.id === "total") {
            getTotal();
        } else {
            if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*", ".") === -1) {
                getValue(this.id);
            } else {
                getValue(this.id);
            }
        }
    })
});