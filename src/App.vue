<template>
    <h1>{{ title }}</h1>
    <p>Welcome...</p>
    <teleport to="#modals" v-if="showModal">
        <Modal theme="sale" @close="toggleModal">
            <h1>Ninja Giveaway!</h1>
            <p>Grab your ninja swag for half price!</p>
            <template v-slot:links>
                <a href="#">Sign Up Now</a>
                <a href="#">More Info</a>
            </template>
        </Modal>
    </teleport>
    <teleport to="#modals" v-if="showModal2">
        <Modal theme="sale" @close="toggleModal2">
            <h1>Sign Up to the News Letter</h1>
            <p>For updates and promo codes!</p>
        </Modal>
    </teleport>
    <br/>
    <button @click="toggleModal">Open Modal 1</button>
    <button @click.alt="toggleModal2">Open Modal 2 (Alt + Click)</button>
</template>

<script>
    import Modal from './components/Modal.vue';

    export default {
        name: 'App',
        components: {
            Modal
        },
        data() {
            return {
                title : 'My First Vue App :)',
                header: 'Sign up for the Giveaway!',
                text  : 'Grab your ninja swag for half price!',
                showModal : false,
                showModal2: false
            }
        },
        methods: {
            toggleModal() {
                this.showModal = !this.showModal;
            },

            toggleModal2() {
                this.showModal2 = !this.showModal2;
            }
        }
    }
</script>

<style>
    #app, #modals {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1 {
        border-bottom: 1px solid #ddd;
        display: inline-block;
        padding-bottom: 10px;
    }
</style>
