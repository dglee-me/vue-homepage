<template>
    <div class="page community">
        <main-header></main-header>
        <section class="article-list">
            <h1>커뮤니티</h1>
            <community-article data-id="1"></community-article>
        </section>
    </div>
</template>
    
<script>
    import MainHeader from "../../components/Header/MainHeader";

    import CommunityArticle from "../../components/Community/Article/CommunityArticle";

    export default {
        name: "CommunityPage",
        components: {
            "main-header": MainHeader,
            "community-article": CommunityArticle
        }
    };
</script>

<style scoped>
    .community .article-list{
        margin-left: auto;
        margin-right: auto;
    }

    .article-list {
        max-width: 942px;
    }
</style>>