
export const util = {
    getRandomColor,
    getRandomColors,
    arrayOfProp,
    arrayOfPropValue
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomColors(num) {
    let colors = []
    for (let i = 0; i < num; i++) {
        colors.push(getRandomColor());
    }
    return colors;
}

function arrayOfProp(prop, array) {
    return array.map((elem) => {
        return { [prop]: elem[prop] };
    });
}

function arrayOfPropValue(prop, array) {
    return array.map((elem) => elem[prop])
}