<template>
    <article class="modal" @click="updateValue">
        <div class="policy-check">
            사실 정책이랄게 없어요... 그냥 있어보이려고 넣었습니다.<br/>
            수집하는건 이메일, 비밀번호, 별명 뿐이며<br/>비밀번호는 SHA256으로 단방향 암호화 되어 작성자만 알 수 있습니다.<br/>
            참고해주세요.
        </div>
    </article>
</template>

<script>
    export default {
        name: "PolicyBox",
        methods: {
            updateValue: function (e) {
                
                if(e.target.classList.contains("modal")) {
                    this.$emit('change', false);
                }
            }
        }
    };
</script>

<style scoped>
    .modal {
        display: flex;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        overflow: auto;
    }

    .policy-check {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 460px;
        height: 320px;
        text-align: center;
        border-radius: 60px;
    }
</style>