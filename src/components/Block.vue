<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        Click Me
    </div>
</template>

<script>
    export default {
        name: 'Block',
        props: {
            delay: {
                type: Number,
                default: 0,
            }
        },
        data() {
            return {
                showBlock: false,
                timer: null,
                reactionTime: 0
            }
        },
        methods: {
            startTimer() {
                this.timer = setInterval(()=> {
                    this.reactionTime += 10;
                }, 10);
            },
            stopTimer() {
                clearInterval(this.timer);
                this.$emit('end', this.reactionTime);
            }
        },
        mounted() {
            console.log('Block mounted.');
            const timeout = setTimeout(() => {
                this.showBlock = true;
                this.startTimer();
            }, this.delay);
        },
        updated() {
            console.log('Block updated.');
        },
        unmounted() {
            console.log('Block unmounted.');
        }
    }
</script>

<style scoped>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 4px auto;
    }
</style>
