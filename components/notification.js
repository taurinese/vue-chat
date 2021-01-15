const notification = {
    data(){
        return {
            show: false,
        }
    }, 
    template: `<div v-if="show"> 
        <div class="alert alert-primary text-center">{{this.username}} vient de se connecter.</div>
    </div>`,
    props: ['username'],
    watch: {
        username() {
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 1500);
        }
    }
};

export default notification;