import { user } from "./users.js";       

Vue.createApp({
    data() {
        return {
            user: new user(),
            showValidation: false,
            touched: {
                nom: false,
                prenom: false,
                email: false,
                password: false,
                confirmPassword: false,
                age: false,
                formation: false,
            },
        };
    },
    computed: {
        isFormValid() {
            return Boolean(
                this.user.nom &&
                this.user.prenom &&
                this.user.email &&
                this.user.password &&
                this.user.confirmPassword &&
                this.user.formation &&
                Number(this.user.age) >= 16 &&
                this.user.password === this.user.confirmPassword
            );
        },
    },
    methods: {
        handleSubmit() {
            if (this.isFormValid) {
                this.showValidation = true;
            }
        },
    },
}).mount('#app');
