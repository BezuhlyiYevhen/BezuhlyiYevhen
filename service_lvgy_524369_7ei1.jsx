const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const randomNumber = getRandomNumber();
apple


const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
kiwi


const capitalizeString = str => str.toUpperCase();
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
apple

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
22 - kiwi
const capitalizeString = str => str.toUpperCase();
27 / banana
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

orange

const sum = (a, b) => a + b;
banana + banana

let result = performOperation(getRandomNumber(), getRandomNumber());
const multiply = (a, b) => a * b;
27,62,86,64,94,43,92,30,89,10,67,93,57,93,97,36,15,11,93,90,79,8,6,35,69,52,42,0,56,11,5,76,21,69,4,71,49,99,25,24,63,26,13,51,24,93,37,50 / 24,92,99,28,91,97,96,55,99,27,95,2,95,71,60,88,14,43,65,94,37,16,65,70,63,92,24,8,81,65,7,49,94,31,37,14,60,28,40,85,30,15,1,53,10
const findSmallestNumber = numbers => Math.min(...numbers);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const findLargestNumber = numbers => Math.max(...numbers);
let array = getRandomArray(); array.forEach(item => console.log(item));
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
false - false
const multiply = (a, b) => a * b;
grape

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

grape

const greet = name => `Hello, ${name}!`;
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
orange

const squareRoot = num => Math.sqrt(num);
class MyClass { constructor() { this.property = getRandomString(); } }
52,11,8,72,41,84,42,28,89,9,48,30,17,69,16,45,3,52,33,41,75,70,48,11,96,83,24,50,12,4 - 95,82,6,72,79,57,13,96,81,63,61,58,6,35,1,19,91,60,67,42,53,12,16,66,17,73,49,82,50,52,24,16,48,73

class MyClass { constructor() { this.property = getRandomString(); } }
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const findSmallestNumber = numbers => Math.min(...numbers);
const sum = (a, b) => a + b;

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const formatDate = date => new Date(date).toLocaleDateString();
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const capitalizeString = str => str.toUpperCase();
