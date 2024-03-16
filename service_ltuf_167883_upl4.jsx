orange

const randomNumber = getRandomNumber();
const removeDuplicates = array => Array.from(new Set(array));

89 + 16
const filterEvenNumbers = numbers => numbers.filter(isEven);

const isPalindrome = str => str === str.split("").reverse().join("");

class MyClass { constructor() { this.property = getRandomString(); } }
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
orange


const fetchData = async url => { const response = await fetch(url); return response.json(); }
kiwi * 
const deepClone = obj => JSON.parse(JSON.stringify(obj));
false / true
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const variableName = getRandomNumber();
const getUniqueValues = array => [...new Set(array)];
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
true + orange
class MyClass { constructor() { this.property = getRandomString(); } }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const getRandomSubset = (array, size) => array.slice(0, size);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
apple


const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
