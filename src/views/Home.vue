<template>
    <div class="home">
        <h1>Home</h1>
        <div v-if="posts.length > 0">
            <PostList :posts="posts" v-if="showPosts"/>
        </div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>Loading...</div>
        <br/>
        <button @click="showPosts = !showPosts">Toggle Posts</button>
        <button @click="posts.pop()">Delete a Post</button>
    </div>
</template>

<script>
    import { computed, ref, watch, watchEffect } from 'vue';
    import PostList from '../components/PostList.vue';
    import getPosts from '../composables/getPosts.js';

    export default {
        name: 'Home',
        components: {
            PostList
        },
        setup() {
            const showPosts = ref(true);
            const { posts, error, load } = getPosts();
            load();

            return { showPosts, posts, error };
        }
    }
</script>

<style scoped>

</style>
