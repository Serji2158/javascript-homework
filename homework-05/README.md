# Критерии приема

- Создан репозиторий `goit-js-hw-05`
- При сдаче домашней работы есть ссылка на исходные файлы в репозитории
- Каждое задание выполнено в отдельном файле. Используй `<script type="module">`
  чтобы закрыть код задания в отдельной области видимости.
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier

# Задание 1

Напиши функцию-конструктор `Account`, которая создает объект со свойствами
`login` и `email`. В `prototype` функции-конструктора добавь метод `getInfo()`,
который выводит в консоль значения полей `login` и `email` объекта который его
вызвал.

```js
console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com
```

# Задание 2

Напиши класс `User(name, age, friends)` для создания пользователя со следующим
свойствами:

- name - строка (имя)
- age - число (возраст)
- friends - число (кол-во друзей)

Добавь метод `getInfo()`, который, выводит строку:
`User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

```js
const mango = new User({ name: 'Mango', age: 2, friends: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 friends

const poly = new User({ name: 'Poly', age: 3, friends: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 friends
```

# Задание 3

Напиши класс `Storage(items)`, который будет создавать объекты для управления
складом товаров. При вызове будет получать один аргумент - начальный массив
товаров, и записывать его в свойство `items`.

- Добавь метод `getItems()`, который возвращает массив текущих товаров
- Добавь метод addItem(item), который получает новый товар и добавляет его к
  текущим
- Добавь метод removeItem(item), который получет товар и, если он есть, удаляет
  его из текущих

```js
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
```

# Задание 4

Напиши класс `StringBuilder(baseString)`. На вход он получает один параметр -
строку, которую записывает в свойство `_value`.

Добавь классу следующий функционал:

- Геттер `value` - возвращает текущее значение поля `_value`
- Метод `append(str)` - получает парметр str (строку) и добавляет ее в конец
  `_value`
- Метод `prepend(str)` - получает парметр str (строку) и добавляет ее в начало
  value
- Метод `pad(str)` - получает парметр str (строку) и добавляет ее в начало и в
  конец `_value`

```js
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value; // '^.^'

builder.pad('=');
console.log(builder.value; // '=^.^='
```

# Задание 5

Напиши класс `Car` с указанными свойствами и методами.

```js
class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor() {}

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {}

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {}

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {}

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {}

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang); // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang); // maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
```