<template>
    <div class="home-page">
        <article-component header-content="커뮤니티"></article-component>
        <article-component header-content="기록"></article-component>
    </div>
</template>

<script>
    import ArticleComponent from "../Article/ArticleComponent";

    export default {
        components: {
            "article-component" : ArticleComponent
        }
    }
</script>