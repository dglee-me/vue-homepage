<template>
    <section class="modal layout-nav-wrap open-active">
        <div class="modal-page" @click="closeMenuEvent">
            <article class="modal-page__article">
                <header class="layout-nav-wrap__header">
                    <router-link to="/" @click.native="closeMenuEvent">개발일기</router-link>
                </header>
                <div class="layout-nav-wrap-user__login">
                    <router-link to="/user/login" class="button button-color-green-inverted">로그인</router-link>
                    <router-link to="/user/new" class="button button-color-green">회원가입</router-link>
                </div>
                <ul class="layout-nav-wrap__menu">
                    <menu-list menu="게시판" :items="this.boardList"></menu-list>
                </ul>
            </article>
        </div>
    </section>
</template>

<script>
    import MenuList from "./Menu/MenuList";

    export default {
        data : () => {
            return {
                boardList: [{id: 0, name: "커뮤니티", route: "/community"}, {id: 1, name: "기록", route: "/board"}]
            };
        },
        components: {
            "menu-list": MenuList 
        },
        methods: {
            closeMenuEvent(e) {
                if (e.target.className === "modal-page" || e.target.href === window.location.origin + "/") {
                    this.$emit("click");
                }
            }
        }
    };
</script>

<style scoped>
    @import url("./SpreadMenu.css");
</style>