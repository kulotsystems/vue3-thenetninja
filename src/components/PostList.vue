<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post"/>
        </div>
    </div>
</template>

<script>
    import SinglePost from './SinglePost.vue';
    import { onMounted, onUnmounted, onUpdated } from 'vue';

    export default {
        name: 'PostList',
        components: {
            SinglePost
        },
        props: ['posts'],
        setup(props) {
            onMounted(() => {
                console.log('Component mounted.');
            });
            onUnmounted(() => {
                console.log('Component unmounted.');
            });
            onUpdated(() => {
                console.log('Component updated.');
            });
        },
        mounted() {
            console.log('Component mounted using Options API.');
        }
    }
</script>

<style scoped>

</style>
