const user = {
    data(){
        return {
            user: {
                id:Date.now(),
                username:faker.name.findName()
            }
        }
    },
    methods: {},
    template: `<li class="my-2 li-username pl-5">{{ user.username }}</li>`,
    mounted() {
        this.$emit('user', this.user.username)
    },
    
};

export default user;