<template>
    <button :class="value" aria-label="초기화" type="button" tabindex="-1">
        <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet" style="fill: currentcolor;">
            <path fill-rule="evenodd" d="M5 4L8.5.3l1 1.1L6.2 5l3.5 3.6-1 1L5 6.1 1.4 9.6l-1-1L3.9 5 .4 1.5l1.1-1L5 3.8z"></path>
        </svg>
    </button>
</template>
<script>
    export default {
        props: {
            value: String
        }
    }
</script>