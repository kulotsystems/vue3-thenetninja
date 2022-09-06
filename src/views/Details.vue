<template>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>Loading...</div>
</template>

<script>
    import getPost from '../composables/getPost.js';

    export default {
        name : 'Details',
        props: ['id'],
        setup(props) {
            const { post, error, load } = getPost(props.id);
            load();

            return { post, error }
        }
    }
</script>

<style scoped>
    .post {
        max-width: 1200px;
        margin: 0 auto;
    }
    .post p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }
    .pre {
        white-space: pre-wrap;
    }
</style>
