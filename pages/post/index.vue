<template>
    <ul class="list">
        <li v-for="post in posts" :key="post.id" class="list-post">
            <h4>{{ post.title }}</h4>
            <p>{{ post.body }}</p>
            <span>{{ post.userId }}</span>
        </li>
    </ul>
</template>

<script lang="ts">
import { Post } from '~/plugins/models';

export type postPageData = { 
    posts: Post[] 
}

export default {
    name: 'PostPage',
    async asyncData({ $serviceManager }) {
        return {
            posts: await $serviceManager.postService.getAll()
        }
    },
    data(): postPageData {
        return {
            posts: []
        }
    }
}
</script>

<style>
    .list {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .list-post {
        background-color: #242424;
        text-decoration: none;
        border-radius: 10px;
        color: white;
        padding: 16px;
        width: 100%;
    }

    .list-post > h4 {
        font-size: large;
        text-decoration: underline;
        font-weight: 700;
        width: 100%;
        margin: 0;
    }

    .list-post > span {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
</style>