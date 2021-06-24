
// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue (
    {
        el: "#app",
        data: {
            text: '',
            color: "textNoColor",
            buttonColor: "textWithColor",
            immagine: "./img/vueimg.png",
            imageNo: "immagineNonVisibile",
            buttonImage: "imageYes",
            buttonImageText: "View Image",
        },
        methods: {
            visualizzaColore: function() {
                if (this.color === "textNoColor") {
                    this.buttonColor = "textWithColor";
                    this.color = "textWithColor";
                } else {
                    this.buttonColor = "textWithColor";
                    this.color = "textNoColor";
                }
            },
            visualizzaImmagine: function() {
                if (this.imageNo === "immagineNonVisibile") {
                    this.buttonImage = "imageYes";
                    this.imageNo = "imageYes";
                    this.buttonImageText = "Hide image";
                } else {
                    this.buttonImage = "imageYes";
                    this.imageNo = "immagineNonVisibile";
                    this.buttonImageText = "View Image";
                }
            }
        },
    }
);
