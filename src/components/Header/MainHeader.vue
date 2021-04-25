<template>
    <header>
        <div class="header-wrap">
            <div class="header_left">
                <div class="logo">
                    <router-link to="/">개발노트</router-link>
                </div>
            </div>
            <div class="header_center">
                <nav class="header_center-menu">
                    <router-link to="/community" class="header_center-menu_item">커뮤니티</router-link>
                    <a href="/board" class="header_center-menu_item">기록</a>
                </nav>
            </div>
            <div class="header_right">
                <div class="header_right-search">
                    <div class="header_right-search_box">
                        <input type="text" id="query" class="header_right-search_box_input-text" placeholder="통합검색" autocomplete="off">
                        <svg class="header_right-search_box-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" preserveAspectRatio="xMidYMid meet"><path d="M22 22l-5-5"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    </div>
                </div>
                <div class="header_right-login">
                    <button class="header_right-login_item" @click="login">로그인</button>
                    <button class="header_right-login_item" @click="join">회원가입</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default{
        
    }
</script>

<style scoped>
    @import "./MainHeader.css";
</style>