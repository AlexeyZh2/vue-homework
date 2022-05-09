let articles = [
   {
      title: "Нейросеть может читать текст быстрее человека",
      image: "https://picsum.photos/id/22/1000/1000"
   },
   {
      title: "Пять сервисов, которые помогут написать статью за 5 минут",
      image: "https://picsum.photos/id/24/1000/1000"
   },
   {
      title: "Названы основные правила движения поездов",
      image: "https://picsum.photos/id/28/1000/1000"
   },
   {
      title: "Самая посещаемая достопримечательность мира",
      image: "https://picsum.photos/id/27/1000/1000"
   },
   {
      title: "Появился новый термин для обозначения радиоволн",
      image: "https://picsum.photos/id/29/1000/1000"
   },
   {
      title: "В России появится новый вид бумаги",
      image: "https://picsum.photos/id/30/1000/1000"
   }
];

Vue.createApp({
   data() {
      return {
         goods: [
            {
               title: "Пианино",
               price: 3000,
               count: 0
            },
            {
               title: "Гитара",
               price: 1200,
               count: 40
            },
            {
               title: "Барабаны",
               price: 2700,
               count: 12
            },
            {
               title: "Флейта",
               price: 900,
               count: 50
            },
            {
               title: "Арфа",
               price: 3400,
               count: 5
            }
         ],
         articles,
         goodsSorted: [],
         typeList: true,
         sortedByCount: true,

      }
   },
   computed: {
      sortGoodsByCount() {
         return this.goods.sort(
            (b1, b2) => b1.count - b2.count
         )

      },
      sortGoodByName() {
         return this.goods.sort(
            (b1, b2) => b1.title.localeCompare(b2.title)
         )
      }
   }



}).mount("#app")

//  Вывести информацию о товарах в html, по каждому товару вывести: название и стоимость (количество в html выводить не нужно).

// Выводить в отсортированном по count виде.

// В css создать 3 класса (zero, not-many, many) для выделения товаров в зависимости от значения count:

// если значение count равно 0, карточке с товаром добавляется класс zero,
// если значение count от 1 до 20, карточке с товаром добавляется класс not-many,
// если значение count от 20, карточке с товаром добавляется класс many.
// ДОПОЛНИТЕЛЬНО. Реализовать возможность вывода в отсортированном по названию, стоимости или количеству виде

// Реализовать два режима отображения статей (сеткой и списком) через переключение css классов: