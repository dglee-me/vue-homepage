<template>
    <header>
        <div class="header-wrap">
            <div class="header_left">
                <div class="logo">
                    <a href="/">개발노트</a>
                </div>
            </div>
            <div class="header_center">
                <nav class="header_center-menu">
                    <a class="header_center-menu_item" :href="community" >커뮤니티</a>
                    <a class="header_center-menu_item" :href="board" >게시판</a>
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
                    <a class="header_right-login_item" :href="login">로그인</a>
                    <a class="header_right-login_item" :href="join">회원가입</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                login : "/login",
                join : "/join",
                community : "/community",
                board : "/board"
            }
        }
    };
</script>

<style scoped>
  @import "./MainHeader.css";
</style>