let person = {
  name: "Ruslan",
  age: 19,
  country: "Azerbaijan",
  city: "Baku",
};
let { name, age } = person;
console.log(`Имя ${name}, Возраст ${age}`);

/////////////////////////////////////////////2//////////////////////////////////////////////

let personInfo = {
  name: "Ruslan",
  age: 19,
  country: "Azerbaijan",
  city: "Baku",
};

function printPersonInfo(person) {
  let { name, age, country, city } = person;
  console.log(name);
  console.log(age);
  console.log(country);
  console.log(city);
}
printPersonInfo(personInfo);

///////////////////////////////////////////////3////////////////////////////////////////////////

let personNames = {
  firstName: "Ruslan",
  lastName: "Kurbanov",
};

function getFullName(person) {
  let { firstName, lastName } = person;

  let fullName = `${firstName} ${lastName}`;
  return fullName;
}
let fullName = getFullName(personNames);
console.log(`Полное имя ${fullName}`);

///////////////////////////////////////////////4////////////////////////////////////////////////////

let user = {
  name: "Ruslan",
  adress: {
    city: "Baku",
    country: "Azerbaijan",
  },
};
let { city, country } = user.adress;
console.log(city, country);

///////////////////////////////////////////////5/////////////////////////////////////////////////////

let adressInfo = {
  name: "Ruslan",
  adress: {
    city: "Baku",
    country: "Azerbaijan",
  },
};

function printAdress(adressInfo) {
  let { city, country } = adressInfo.adress;

  console.log(`Город ${city}, Страна ${country}`);
}

printAdress(adressInfo);

//////////////////////////////////////////////////6////////////////////////////////////////////////////

let product = {
  name: "Banana",
  price: 12,
  category: "Fruits",
};
let { price, category } = product;
console.log(`Цена ${price}, Категория ${category}`);

//////////////////////////////////////////////7///////////////////////////////////////////////////

let product2 = {
  price: 12,
  sale: 30,
};

function applyDiscount(product2) {
  let { price, sale } = product2;
  let fullPrice = `Цена ${price}, Скидка ${sale}%`;
  console.log(fullPrice);
}
applyDiscount(product2);

/////////////////////////////////////////////8//////////////////////////////////////////////////

let rectangle = {
  width: 20,
  height: 20,
};
let { width: w, height: h } = rectangle;

console.log("Ширина", w);
console.log("Высота", h);

////////////////////////////////////////////////////9////////////////////////////////////////////////////
let rectangle2 = {
  width: 20,
  height: 20,
};

function calculateArea() {
  let { width, height } = rectangle2;
  let area = width * height;
  return area;
}
let area = calculateArea(rectangle2);
console.log("Площадь", area);

///////////////////////////////////////////10//////////////////////////////////////////////////////

let stats = {
  max: 100,
  min: 10,
  average: 50,
};
let { max, min, average } = stats;

console.log(`Максимум ${max}, Минимум ${min}, Средне ${average}`);

///////////////////////////////////////////////////////2//////////////////////////////////////////////

let coordinates = [5, 9];

let [x, y] = coordinates;

console.log("x", x);
console.log("y", y);

////////////////////////////////////////////////4///////////////////////////////////////////////////

let grades = [4, 3, 5];

let [first, second, third] = grades;

console.log("first grade", first);
console.log("second grade", second);
console.log("third grade", third);

//////////////////////////////////////////////5//////////////////////////////////////////////////////

let grades2 = [4, 3, 5, 2];

function getAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades2.length; i += 1) {
    total += grades2[i];
  }
  average = total / grades2.length;
  return average;
}
console.log("average", average);

////////////////////////////////////////////6//////////////////////////////////////////////

let student = ["Ruslan", 19, 5];
let [names, ages, grade] = student;

console.log("name", names);
console.log("age", ages);

////////////////////////////////////////////7/////////////////////////////////////////////

let student2 = ["Ruslan", 19, 5];

function printStudentInfo(student2) {
  let [name, age, grade] = student2;
}
console.log("name", name);
console.log("age", age);
console.log("grade", grade);

///////////////////////////////////////////8////////////////////////////////////////////////

let colors = ["yellow", "blue", "red", "green"];

let [firstColor, secondColor, thirdColor, fourColor] = colors;

console.log("first-color =", firstColor);
console.log("second-color =", secondColor);
console.log("third-color =", thirdColor);

/////////////////////////////////////////////////////////////////////////////////////////

let colors2 = ["purple", "black"];

function combineColors(colors2) {
  let [color1, color2] = colors2;
  console.log(`combine-colors: ${color1}${color2}`);
}
combineColors(colors2);
