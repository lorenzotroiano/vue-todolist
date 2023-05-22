/*


oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)


*/




const { createApp } = Vue;

createApp({
    data() {
    return {
        newTask: "",
        tasks: [ 
        {
            text: "Accendere  computer",
            done: true,
        },
        {
            text: "Accendere tv",
            done: false,
        },
        {
            text: "Accendere condizionatore",
            done: false,
        },
        {
            text: "Accendere stereo",
            done: true,
        },
        {
            text: "Accendere schermo",
            done: true
        }
        ]
    }
    },
    methods: {
        aggiungiTask(){

            if(this.newTask != "" && this.newTask.length >= 5){
                this.tasks.unshift({text: this.newTask, done: false});
            }
           
            this.newTask = "";
        },


        eseguitaTask(index) {
            this.tasks[index].done = !this.tasks[index].done;
          },

        cancellaTask(indice){

            if(this.tasks[indice].done === true){
                this.tasks.splice(indice, 1);
            }
      
        }
    }
}).mount("#app")



