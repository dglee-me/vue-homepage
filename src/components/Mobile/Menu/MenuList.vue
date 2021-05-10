<template>
    <li class="layout-nav-wrap__menu__item-wrap">
        <div class="layout-nav-wrap__menu__item">
            <button type="button" class="layout-nav-wrap__menu__item-button active">
                <span v-if="menu === `게시판`" class="board-icon"></span>
                {{menu}}
            </button>
            <div class="layout-nav-wrap__menu__item-content">
                <ul class="layout-nav-wrap-secondary-menu">
                    <li v-for="item in items" :key="item.id" class="layout-navigation-drawer-secondary-menu__item-wrap">
                        <router-link :to="item.route" class="layout-navigation-drawer-secondary-menu__item">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        props : {
            menu: String,
           items: Array
        }
    };
</script>

<style scoped>
    .layout-nav-wrap__menu {
        display: flex;
        flex: 0 0 auto;
        border-top: 1px solid #ededed;
    }

    .layout-nav-wrap__menu__item-wrap {
        width: 100%;
    }

    .layout-nav-wrap__menu__item {
        border-bottom: 1px solid #ededed;
    }

    .layout-nav-wrap__menu__item {
        color: #4fc08d;
    }

    .layout-nav-wrap-secondary-menu {
        padding: 0 0 20px;
    }

    .layout-navigation-drawer-secondary-menu__item {
        display: block;
        position: relative;
        width: 100%;
        padding: 7px 10px;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        text-align: left;
        color: #424242;
        box-sizing:border-box;
    }
    .layout-nav-wrap__menu__item-button {
        display: block;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 15px 10px 15px 40px;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        background: none;
        border: none;
        text-align: left;
    }

    .layout-nav-wrap__menu__item-button.active {
        color: #4fc08d;
    }

    .layout-nav-wrap__menu__item-button .board-icon {
        position: absolute;
        top: 11px;
        left: 5px;
        width: 35px;
        height: 30px;
        background-position: center;
    }
 </style>