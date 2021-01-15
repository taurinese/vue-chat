const user = {
    data(){
        return {
            user: {
                id:Date.now(),
                username:faker.name.findName()
            }
        }
    },
    methods: {},/* 
    template: `<li>{{ user.username }}</li>`, */
    mounted() {
        this.$emit('user', this.user.username)
    },
    
};

export default user;