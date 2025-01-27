/* eslint-disable prefer-const */
console.log("hello ts!");

// * пример неявной типизации
const x = 10;

//ошибка, мы уже назначили тип данных для x
//x = "text";

// * пример явной типизации
const y: number = 11;

let p: string;
// eslint-disable-next-line prefer-const
p = "welcome to the world of typescript";

// eslint-disable-next-line prefer-const
let isDrunk: boolean = true;

// * ключевое слово type
// мы можем объявлять типы отдельно

type Age = number; //типы всегда пишутся с большой буквы
// eslint-disable-next-line prefer-const
let myAge: Age = 29;

// * Union type: yyyy | xxxx
// можно задавать мультитипизацию для переменных

let k: number | string = 10;
k = "string";

// мы можем задать тип, привязав к нему набор конкретных значений
type Pet = "cat" | "dog";
// eslint-disable-next-line prefer-const
let petOfAlex: Pet = "dog";

// можно расширить union
type ExtendedPet = Pet | "snake";
let petOfMartin: ExtendedPet = "snake";

type Gender = "male" | "female";
type ExtendedGender = Gender | "non-binary person";

// * типизация массива string
let fruits: string[] = ["apple", "orange", "mango"];

let vegetables: string[] = [];
vegetables.push("carrot");

// * Как типизировать объекты?
// 1. Через тип (не предпочтительный способ)
type User = {
  firstName: string;
  iasAdmin: boolean;
};

const user1: User = {
  firstName: "Lala",
  iasAdmin: false,
};

// 2. Через интерфейс (популярный способ)
interface Monster {
  name: string;
  height: number;
  isAlive: boolean;
  isEvil: boolean;
  hasFangs: boolean;
}

const frankenstein: Monster = {
  name: "Frankenstein Monster",
  height: 210,
  isAlive: true,
  isEvil: false,
  hasFangs: false,
};

// * Когда использовать interface или type:

// Для описания объектов и их расширения предпочтительнее interface.
// Для сложных комбинаций типов или использования примитивов выбирайте type.

interface ExtendedMonster extends Monster {
  isFlying: boolean;
  color: string;
}

const dracula: ExtendedMonster = {
  name: "Vlad Cepes",
  height: 190,
  isAlive: false,
  isEvil: true,
  hasFangs: true,
  isFlying: true,
  color: "pale white",
};

// опциональные поля (через ?)
interface Food {
  title: string;
  isSweet?: boolean;
}

const pancake: Food = {
  title: "Pancake",
};

// Создать интерфейс город City
// со следующими полями
//  - name
//  - population - число горожан
//  - riversName - опциональное поле название реки -
//  - isTouristic - является ли туристическим или нет
//  - isCapital - является ли столицей

// Создайте несколько объектов для этого интерфейса

// дополнительно сделайте интерфейс - расширяющий город
// например, добавьте дату основания

interface City {
  name: string;
  population: number;
  riversName?: string;
  isTouristic: boolean;
  isCapital: boolean;
}

const isny: City = {
  name: "Isny im Allgaeu",
  population: 14_700,
  riversName: "Untere Argen",
  isTouristic: true,
  isCapital: false,
};

const minsk: City = {
  name: "Minsk",
  population: 1_800_000,
  riversName: "Svisloch",
  isTouristic: false,
  isCapital: true,
};

interface ExtendedCity extends City {
  founded: number;
}

// * Типизация функций
// Что нужно типизировать? Параметры, возвращаемые значения

function sum(a: number, b: number): number {
  return a + b;
}

const div = (a: number, b: number): number => a / b;

console.log(sum(10, 12));
console.log(div(20, 2));

function toUpper(str: ExtendedPet): string {
  return str.toUpperCase();
}

console.log(toUpper("snake"));

function toUpperFirst(str: ExtendedPet): string {
  return str.charAt(0).toUpperCase().concat(str.slice(1, str.length));
}

console.log(toUpperFirst('snake'));

