<template>
    <div class="page-not-found-form">
        <div class="page-not-found-form_nav">
            <router-link to="/">개발노트</router-link>
        </div>
        <div class="page-not-found-form_inform">
            <div class="error">404</div>
            <div class="error-content">
                요청하신 페이지를 찾을 수 없습니다!
            </div>
        </div>
    </div>
</template>

<style scoped>
    .page-not-found-form_nav {
        position: relative;
        width: 100%;
        height: 40px;
        padding: 15px 0;
        background-color: white;
        border-bottom: 1px solid #ededed;
    }

    .page-not-found-form_nav > a {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 28px;
        font-weight: 700;
        transform: translate(-50%, -50%);
    }

    .page-not-found-form_inform {
        position: relative;
        margin: 50px auto 0;
        padding: 40px;
        width: 80%;
        border-radius: 25px;
        text-align: center;
        box-sizing: border-box;
        background-color: white;
    }

    .error {
        font-size: 100px;
        font-weight: bold;
        color: #4fc08d;
    }

    .error-content {
        font-size: 24px;
    }
</style>