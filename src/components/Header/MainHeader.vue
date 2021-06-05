<template>
    <header class="app-header">
        <div class="header-wrap">
            <div class="header_left">
                <div class="logo">
                    <router-link to="/">개발노트</router-link>
                </div>
            </div>
            <div class="header_center">
                <nav class="header_center-menu">
                    <router-link to="/community" class="header_center-menu_item">커뮤니티</router-link>
                    <router-link to="/board" class="header_center-menu_item">기록</router-link>
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
                    <router-link to="/user/login" class="header_right-login_item">로그인</router-link>
                    <router-link to="/user/new" class="header_right-login_item">회원가입</router-link>
                </div>
            </div>
            <div class="header_right-mobile" @click="spreadMenu">
                <div class="mobile nav-icon">
                    <div class="line"></div>
                </div>
            </div>
            <spread-menu v-if="isSpreadMenuOpen" @click="spreadMenu"></spread-menu>
        </div>
    </header>
</template>

<script>
    import SpreadMenu from "@/components/Mobile/SpreadMenu";

    export default {
        data: () => {
            return {
                isSpreadMenuOpen: false
            }
        },
        components: {
            "spread-menu" : SpreadMenu
        },
        methods: {
            
            // 햄버거 버튼을 눌렀을 때, 사용자에게 메뉴 리스트를 보여준다.
            spreadMenu() {
                this.isSpreadMenuOpen = this.isSpreadMenuOpen == true ? false : true;

                if(this.isSpreadMenuOpen) {
                    document.body.classList.add("fixed");
                }else {
                    document.body.classList.remove("fixed");
                }
            }
        }
    }
</script>

<style scoped>
    @import "./MainHeader.css";
</style>