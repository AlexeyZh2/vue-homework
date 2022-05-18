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
let services = [
    {
        title: "Женская стрижка на длинные волосы",
        price: 2000
    },
    {
        title: "Стрижка челки",
        price: 300
    },
    {
        title: "Детская стрижка (до 7 лет)",
        price: 700
    },
    {
        title: "Мужская стрижка",
        price: 1000
    },
    {
        title: "Коррекция бороды",
        price: 1200
    },
    {
        title: "Тонирование мужских волос",
        price: 1500
    },
    {
        title: "Окрашивание волос",
        price: 5000
    },
    {
        title: "Женский маникюр",
        price: 1500
    },
    {
        title: "Мужской маникюр",
        price: 1700
    },
    {
        title: "Педикюр",
        price: 2500
    },
    {
        title: "Покрытие гель-лаком",
        price: 1500
    }
];
Vue.createApp({
    data() {
        return {

            articles,
            text: "",
            services,
            sum: 0,
        }
    },
    computed: {
        filterArticles() {
            return this.articles.filter(article => article.title.toLowerCase().includes(this.text.toLowerCase()))

        },


    },
    methods: {
        userChoice (price, title) {
            console.log(price, title)
            console.log(this.$refs)
            console.log(this.$refs[title])
            console.log(this.$refs[title][0])
            this.$refs[title][0].classList.toggle("item_active")
            if (this.$refs[title][0].classList.contains("item_active")){
            this.sum += price
            } else {
                this.sum -= price
            }
    }
}

}).mount("#app")
//  Вывести в html названия услуг и их стоимость
// Реализовать возможность выбора услуг из списка
// Ниже списка отображать итоговую стоимость выбранных пользователем услуг.
// Если пользователь отменяет выбор, стоимость должна пересчитываться