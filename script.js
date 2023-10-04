//Задание 1
//• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из //коллекции.
//• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
//• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
//• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [

    { title: "Reise, Reise", artist: "Rammstein", year: "2004" },
    { title: "Zeit", artist: "Rammstein", year: "2022" },
    { title: "72 Seasons", artist: "Metallica", year: "2023" },
    { title: "Painkiller", artist: "Judas Priest", year: "1990" }
]

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: musicCollection[this.current++] }
                : { done: true }
        }
    }
}

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist}(${album.year})`);
}

//Задание 2
//Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
//
// Отслеживать, какой повар готовит какое блюдо.
// Записывать, какие блюда заказал каждый клиент.

const pizza = new Set();
pizza.add('Пепперони');
pizza.add('Маргарита');

const sushi = new Set();
sushi.add('Калифорния');
sushi.add('Филадельфия');

const decerts = new Set();
decerts.add('Тирамису');
decerts.add('Чизкейк');

const povar = new Map();
povar.set('Виктор', pizza);
povar.set('Ольга', sushi);
povar.set('Дмитрий', decerts);

const orderAlex = new Set(['Пепперони', 'Тирамису']);
const orderMary = new Set(['Калифорния', 'Маргарита']);
const orderIrina = new Set(['Чизкейк']);


console.log('Алексей заказал');
orderAlex.forEach(element => {

    console.log(element);

});

console.log('Заказ готовит');
orderAlex.forEach(element => {

    if (pizza.has(element)) {

    }

});