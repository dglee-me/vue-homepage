<template>
    <div class="page">
        <main-header></main-header>
        <div class="home-page">
            <article-component header-content="커뮤니티"></article-component>
            <article-component header-content="기록"></article-component>
        </div>
    </div>
</template>

<script>
    import MainHeader from "@/components/Header/MainHeader";
    import ArticleComponent from "@/components/Article/ArticleComponent";

    export default {
        components: {
            "main-header" : MainHeader,
            "article-component" : ArticleComponent
        }
    }
</script>