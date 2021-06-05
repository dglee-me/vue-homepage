<template>
    <router-link :to="/article/ + dataId" class="article-item__link">
        <article class="article-item">
            <h1 class="article-item__title bold">안녕하세용 제목이에요!</h1>
            <p class="article-item__content">blah blah blah...</p>
            <footer class="article-item__footer">
                <span class="article-item__footer__author bold">
                    <span class="article-item__footer__author__text">이동근</span>
                </span>
                <span class="article-item__footer__author__meta">
                    <time datetime="2021-06-05T13:03:07+09:00" class="article-item__footer__author__meta__date text-gray">3분 전</time>
                    <span class="article-item__footer__author__meta__comment text-gray">댓글
                        <span v-if="dataId == 1" class="article-item__footer__author__meta__comment__count active">7</span>
                        <span v-if="dataId != 1" class="article-item__footer__author__meta__comment__count">0</span>
                    </span>
                    <span class="article-item__footer__author__meta__view text-gray">조회
                        <span class="article-item__footer__author__meta__view__content">8</span>
                    </span>    
                </span>
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

<style>
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

    .article-item__footer__author {
        display: inline-block;
        color: #424242;
        margin-right: 8px;
    }

    .article-item__footer__author__text, .article-item__footer__author__meta {
        font-size: 13px;
    }

    .article-item__footer__author__meta {
        display: inline-block;
        margin-right: 8px;
    }

    .article-item__footer__author__meta__comment__count.active {
        color: #4fc08d;
        font-weight: bold;
    }

    .article-item__footer__author__meta__date:after, .article-item__footer__author__meta__comment:after {
        content: "·";
        margin: 0 4px;
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

            .article-item__footer__author, .article-item__footer__author__meta {
                margin-right: 20px;
            }
        }
    }
</style>