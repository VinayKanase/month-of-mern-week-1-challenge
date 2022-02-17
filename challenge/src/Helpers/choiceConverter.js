let choiceStringArray = ["fire", "water", "tree"];

function choiceStringToNumber(string) {
 return choiceStringArray.findIndex((ch) => ch === string);
}

export { choiceStringToNumber };