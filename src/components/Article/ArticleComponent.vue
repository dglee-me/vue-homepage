<template>
    <section class="container home-section">
        <header class="home-section_header">
            <router-link :to="boardLink" class="home-section_header-content">{{headerContent}}</router-link>
        </header>
        <ul class="home-section_board">
            <li>
                <a href="javascript:void(0);">
                    <span class="icon icon-announcement"></span>
                    <span class="title text-body">[Category] 게시글1 입니다.</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);">
                    <span class="icon icon-announcement"></span>
                    <span class="title text-body">[Category] 게시글2 입니다.</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);">
                    <span class="icon icon-announcement"></span>
                    <span class="title text-body">[Category] 게시글3 입니다.</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);">
                    <span class="icon icon-announcement"></span>
                    <span class="title text-body">[Category] 게시글4 입니다.</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);">
                    <span class="icon icon-announcement"></span>
                    <span class="title text-body">[Category] 게시글5 입니다.</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
    export default{
        props: ["headerContent", "boardLink"]
    }
</script>

<style>
    @import "./ArticleComponent.css";
</style>