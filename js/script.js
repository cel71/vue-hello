
// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue (
    {
        el: "#app",
        data: {
            text: '',
            color: "textNoColor",
            buttonColor: "textWithColor",
        },
        methods: {
            visualizza: function() {
                if (this.color === "textNoColor") {
                    this.buttonColor = "textWithColor";
                    this.color = "textWithColor";
                } else {
                    this.buttonColor = "textWithColor";
                    this.color = "textNoColor";
                }
            }
        },
    }
);
