"use strict";

let rootComponentOption = {
    // компонент data -метод который возвращает объект свойств
    data() {
        return {
            userInput: " ",
            book: {
                title: "vue js",
                author: "js developer",
                otherAuthors: ["jzkc", "hgrsdjf"],
                img: "https://picsum.photos/id/44/200/300"
            }
        }
    }
   
    }

let app = Vue.createApp(rootComponentOption)

let vm = app.mount("#application");