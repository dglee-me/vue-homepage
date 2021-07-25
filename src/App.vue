<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App"
    };
</script>

<style>
    /* Initialize */
    html {
        color: #424242;
        background: #FFF;
    }

    html, body {
        margin: 0;
        font-size: 13px;
        font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", sans-serif;
    }

    html, body, .app {
        height: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
        outline: none;
    }

    ol, ul {
        list-style: none;
        margin:0px; padding:0px;
    }

    select {
        outline: none;
    }

    .ir {
        position: relative;
        z-index: -1;
    }

    .app {
        display: flex;
        flex-direction: column;
    }

    .page {
        width: 100%;
        height: 100%;
    }

    .fixed {
        overflow-y: hidden;
    }

    .home-page {
        display: flex;
        flex: 1 0 auto;
        flex-wrap: wrap;
        width: 1136px;
        margin: 0 auto;
        min-height: 1px;
    }

    .board-icon {
        background-image: url("/src/assets/image/board/save.png");
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bold {
        font-weight: bold;
    }

    .text-gray {
        color: #757575;
    }

    @media(min-width:768px) {
        @media screen {
            html, body{
                font-size: 15px;
            }

            .home-page {
                max-width: 768px;
            }
        }
    }

    @media(min-width: 1024px) {
        @media screen {
            .home-page {
                max-width: 1024px;
            }
        }
    }

    @media(min-width: 1256px) {
        @media screen {
            .home-page {
                max-width: 100%;
            }
        }
    }

    @media(max-width: 768px) {
        @media screen {
            .home-page {
                max-width: 100%;
                margin-top: 20px;
            }
        }
    }
</style>