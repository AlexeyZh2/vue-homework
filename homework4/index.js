"use strict";
const initialData = [
    {
        name: "Фото1",
        link: "https://picsum.photos/200/300?random=1"
    },
    {
        name: "Фото2",
        link: "https://picsum.photos/200/300?random=2"
    },
    {
        name: "Фото3",
        link: "https://picsum.photos/200/300?random=3"
    },
    {
        name: "Фото4",
        link: "https://picsum.photos/200/300?random=4"
    },
    {
        name: "Фото5",
        link: "https://picsum.photos/200/300?random=5"   
    },
    {
        name: "Фото6",
        link: "https://picsum.photos/200/300?random=6"   
    },

]





const card = {
    
    template: 
    `<div class="item_card">
    <img :src = "info.link">
    <p>{{info.name}}</p>
    <button v-on:click = "deleteCard">Удалить</button>
    </div>
    `,
    props: {
        info: Object,
    },
    methods: {
        deleteCard (event) {
            console.log(event.target.parentNode)
            //this.remove()
            event.target.parentNode.remove()
            console.log("Ура")
        }

    }
}
const app = Vue.createApp({
    data () {
        return {
            initialData,
            openPopup: false,
            addUserFoto : {
                name: "",
                link: "",
            },
        }
    },
    methods : {
        closePopup () {
            this.openPopup=false
        },
        sendRequest () {
            this.initialData.push(this. addUserFoto)
            console.log(this. addUserFoto)
            console.log(this. initialData)
        }
    }

})
app.component("item-card", card)
app.mount("#app")