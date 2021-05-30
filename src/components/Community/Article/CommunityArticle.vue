<template>
    <router-link :to="/article/ + dataId" class="article-item__link">
        <article class="article-item">
            <h1 class="article-item__title bold">안녕하세용 제목이에요!</h1>
            <p class="article-item__content">blah blah blah...</p>
            <footer class="article-item__footer">
                <span class="article-item__footer__author"></span>
            </footer>
        </article>
    </router-link>
</template>

<script>
    export default {
        name: "CommunityArticle",
        props: {
            dataId: Number
        }
    };
</script>

<style scoped>
    .article-item__link {
        display: block;
        padding: 0 15px;
        margin: 0 -15px;
    }

    .article-item {
        padding: 30px 0;
        border-top: 1px solid #ededed;
    }

    .article-item__title {
        display: block;
        max-height: 25px;
        margin-bottom: 10px;
        font-size: 15px;
        line-height: 1.44;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .article-item__content {
        max-height: 40px;
        margin-bottom: 16px;
        line-height: 1.54;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .article-item__footer {
        font-size: 0;
        line-height: 19px;
    }

    @media(min-width: 768px) {
        @media screen {
            .article-item__title {
                font-size: 18px;
            }

            .article-item__content {
                display: block;
                display: -webkit-box;
            }
        }
    }
</style>