<template>
    <section class="container home-section">
        <header class="home-section_header">
            <h2 class="home-section_header-content">{{headerContent}}</h2>
        </header>
        <ul class="home-section_board">
            <li>게시글1</li>
            <li>게시글2</li>
        </ul>
    </section>
</template>

<script>
    export default{
        props: ["headerContent"]
    }
</script>

<style>
    @import "./ArticleComponent.css";
</style>