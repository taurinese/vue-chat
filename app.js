import chat from './components/chat.js';
import notification from './components/notification.js';

Vue.createApp({
    data(){
        return {
            username:""
        }
    },
    methods: {
        getUsername(username){
            this.username = username;
        }
    },
    template:`<notification :username="username"></notification>
    <chat class="chat" @user="getUsername"></chat>`,
    components: {
        chat, 
        notification
    }
}).mount("#app");
