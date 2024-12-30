function readIntNumber(message = "Enter a number?")
{
    let number = 0;

    do
    {
        let input = prompt(message);
        number = parseInt(input);

        if (isNaN(number))
            alert("That's not a valid number. Please try again!");

    }while(isNaN(number));

    return number;
}
function readIntNumbers(numberOfNumbers)
{
    let numbers = [];

    for (let i = 1; i <= numberOfNumbers; i++)
    {
        numbers[i - 1] = readIntNumber(`Enter number ${i} :`);
    }

    return numbers;
}

function readFloatNumber(message = "Enter a number?")
{
    let number = 0;

    do
    {
        let input = prompt(message);
        number = parseFloat(input);

        if (isNaN(number))
            alert("That's not a valid number. Please try again!");

    }while(isNaN(number));

    return number;
}

function readFloatNumbers(numberOfNumbers)
{
    let numbers = [];

    for (let i = 1; i <= numberOfNumbers; i++)
    {
        numbers[i - 1] = readFloatNumber(`Enter number ${i} :`);
    }

    return numbers;   
}

function readString(message)
{
    let input = "";
    do
    {
        input = window.prompt(message);

        if (input.length === 0)
            window.alert("Your input is empty.");

    }while(input.length === 0);

    return input;
}

function readStrings(numberOfTexts)
{
    let strings = [];

    for (let i = 1; i <= numberOfTexts; i++)
    {
        strings[i - 1] = readString(`Enter text ${i}`);
    }

    return strings;
}