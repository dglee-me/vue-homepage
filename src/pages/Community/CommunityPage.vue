<template>
    <div class="page">
        <main-header></main-header>
        <div class="community">
            <section class="article-header">
                <h1>커뮤니티</h1>
            </section>
            <section class="article-list">
                <community-article data-id="1"></community-article>
                <community-article data-id="2"></community-article>
            </section>
        </div>
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

<style>
    .community {
        max-width: 942px;
        margin-left: auto;
        margin-right: auto;
    }

    .article-header {
        display: flex;
        padding: 20px 0;
    }

    .article-header h1 {
        font-size: 22px;
    }
    
    .article-item__link:first-child > .article-item {
        border-top: none;
    }

    .article-item__link:last-child > .article-item {
        border-bottom: 1px solid #ededed;
    }

    @media(min-width: 768px) {
        @media screen {
            .article-header h1 {
                font-size: 32px;
            }
        }
    }
</style>>