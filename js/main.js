/*
Rifare l’esercizio della to do list.
Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, il task viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.

Bonus:

1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista

2- cliccando sul testo dell’item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)
*/

// vue

const { createApp } = Vue;

createApp ( {
    data () {
        return {
            items : [
                {
                    text : "fare la lavatrice",
                    status : false
                },
                {
                    text : "fare la doccia",
                    status : true
                },
                {
                    text : "fare una passeggiata",
                    status : true
                },
                {
                    text : "fare merenda",
                    status : false
                },
            ],
            msg : "ciao sono un gattino"
        }
    }
}).mount ("#list-container");


