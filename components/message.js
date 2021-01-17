const message = {
    data(){
        return {
            id: '',
            user: {
                id: Date.now(),
                username: "Enzo"
            },
            text:'',
            messages: [],
            messageExample: {
                text:'Ceci est un message',
                user: { id: 0, username: "Enzo"},
                date: new Date(Date.now()).toLocaleTimeString(),
            },
            date: ''
        }
    }, 
    template: `<div class="ml-3 w-100">
        <div class="bg-white shadow-sm border border-light p-3">
            <div class="mb-3 pr-5">
                <div class="bg-dark d-inline-block p-2 msg-rounded text-white">
                    <div class="d-flex flex-row align-items-center">
                        <h5 class="mb-0 mr-2 text-info">{{ user.username }}</h5> 
                        <small class="text-primary">{{ messageExample.date }}</small>
                    </div>
                    {{ messageExample.text }}
                </div>
            </div>
            <div v-for="message in messages" class="mb-3 pl-5 d-flex flex-column align-items-end">
                <div class="msg-rounded bg-primary d-inline-block p-2 text-white">
                    <div class="d-flex flex-row align-items-center">
                        <h5 class="mb-0 mr-2 text-dark">{{ message.user.username }}</h5> 
                        <small class="text-grey">{{ message.date }}</small>
                    </div>
                    {{ message.text }}
                </div>
            </div>    
            <div class="d-flex flex-row align-items-center mt-5">
                <form @submit.prevent="sendMessage" class="w-100">
                    <input v-model="text" type="text" placeholder="Message input" class="form-control d-inline-block w-85" />
                    <button :disabled="!text" class="btn btn-primary ml-3 d-inline-block" type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    </div>`,
    methods: {
        sendMessage() {
            this.id = Date.now();
            this.date = new Date(Date.now()).toLocaleTimeString();
            this.message = {
                id: this.id,
                date: this.date,
                text: this.text,
                user: this.user
            }
            this.messages.push(this.message);
            this.id = "";
            this.date = "";
            this.text = "";
            //this.message.text = "";
        }
    }
};

export default message;