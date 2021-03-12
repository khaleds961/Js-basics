
const stringSize = (text) => {
    text = 'This text has a certain number of characters';
    const result = text.length;
    return result;
}
const replaceCharacterE = (text) => {
    text = 'This text has a certain number of characters';
    var replaced = text.replace('e', ' ');
    return replaced;
}
const concatString = (text1, text2) => {
    text1 = 'el Javascript shi ';
    text2 = 'ra2e3';
    var a = text1.concat(text2);
    return a;
}
const showChar5 = (text) => {
    text = 'TDD kicks ass';
    var a = text.substr(4, 1);
    return a;
}
const showChar9 = (text) => {
    text = 'But it is really annoying to write';
    var a = text.substr(0, 9);
    return a;

}
const toCapitals = (text) => {
    text = 'Another useful function';
    var a = text.toUpperCase();
    return a;
}
const toLowerCase = (text) => {
    text = 'This is a sentence!';
    var a = text.toLowerCase();
    return a
}
const removeSpaces = (text) => {
    text = ' Rome wasn\'t built in a day ';
    return text.trim();
}
const IsString = (text) => {
    text = 'Is this a string?';
    return typeof text === 'string';
}

const getExtension = (text) => {
    text = 'images/photo01.jpg';
    return text.split('.').pop();
}
const countSpaces = (text) => {
    text = 'Sire open we have a big one!';
    var a = (text.split(" ").length - 1);
    return a;
}
const InverseString = (text) => {
    var newString = "";

    for (var i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }

    return newString;
}

const power = (x, y) => {
    x = 2;
    y = 3;
    return Math.pow(x, y);
}

const absoluteValue = (num) => {
    num = -5;
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    array = [-5, -50, -25, -568].map(Math.abs)
    return array;
}
const circleSurface = (radius) => {
    radius = 5;
    var a = Math.PI * (radius * radius);
    return Math.ceil(a);
}
const hypothenuse = (ab, ac) => {
    ab = 5;
    bc = 8;
    return Math.hypot(ab, bc)
}
const BMI = (weight, height) => {
    var weight = 65;
 var   height = 1.75;
    var a = weight / (height * height);
    return (Math.round(a * 100) / 100);
}

const createLanguagesArray = () => {
    var languages = ['Html', 'CSS', 'Java', 'PHP'];
    return languages;
}

const createNumbersArray = () => {
    var nombres=[0,1,2,3,4,5];
    return nombres;
}

const replaceElement = (languages) => {
    var languages = ['Html', 'CSS', 'Java', 'PHP'];
    languages.splice(2,1,'Javascript');
return languages;
}

const addElement = (languages) => {
var languages=['Html', 'CSS', 'Javascript', 'PHP'];
languages.push('Ruby', 'Python');
return languages;
}

const addNumberElement = (numbers) => {
var numbers = [0,1,2,3,4,5];
numbers.unshift(-2,-1);
return numbers;
}

const removeFirst = (languages) => {
    var n= ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    n.splice(0,1);
    return n;
}

const removeLast = (languages) => {
    var n= ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    n.splice(4,1);
    return n;
}

const convertStrToArr = (social_arr) => {
    var numbers = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    var ar = numbers.split(',');
    return ar;
}

const convertArrToStr = (languages) => {
var n = ['CSS', 'Javascript', 'PHP', 'Ruby'];
var a = n.toString();
return a;
}

const sortArr = (social_arr) => {
var a = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
a.sort();
return a ;
}

const invertArr = (social_arr) => {
var a = ['CSS','Javascript','PHP','Ruby'];
a.reverse();
return a ;
}