import user from './user.js';

const users = {
    data(){
        return {
            users: [],
            count: 0,
            username:''
        }
    }, 
    template: `<div class="w-50">
        <div class="shadow-sm border border-light">
            <h6 class="p-3 pb-0 border-bottom text-center">UTILISATEURS CONNECTÉS</h6>
            <ul class="p-3 list-unstyled m-0">
                <li v-for="user in users" class="my-2 li-username pl-5">{{user}}</li>
            </ul>
            <div class="d-none" v-for="n in count">
                <user @user="newUser"></user>
            </div>
        </div>
    </div>`,
    components: {
        user
    },
    methods:{
        newUser(user){
            this.username = user;
            this.users.push(user)
            this.$emit('user', this.username);
            //this.users.push(data);
        }
    },
    mounted() {
        setInterval(()=>{
            this.count++
        }, 2000)
    },
};

export default users;