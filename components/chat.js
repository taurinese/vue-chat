import message from './message.js';
import users from './users.js';


const chat = {
    data(){
        return {}
    }, 
    template: `<div class="d-flex flex-row">
    <users @user="getUsername"></users>
    <message></message>
    </div>`,
    components: {
        users,
        message
    },
    methods: {
        getUsername(username){
            this.$emit('user', username);
        }
    },
};

export default chat;