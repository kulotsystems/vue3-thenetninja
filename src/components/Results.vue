<template>
    <p>Reaction time: {{ this.score }}ms</p>
    <p class="rank">{{ rank }}</p>
</template>

<script>
    export default {
        name: 'Results',
        props: {
            score: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                rank: null
            }
        },
        mounted() {
            if(this.score < 250)
                this.rank = 'Ninja Fingers';
            else if(this.score < 400)
                this.rank = 'Rapid Reflexes';
            else
                this.rank = 'Snail pace...';
        }
    }
</script>

<style scoped>
    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>
