<template>
    <section class="container user-sign-up">
        <header class="user-sign-up_header">
            <h1>회원가입</h1>
        </header>
        <div class="form-wrap">
            <form class="user-sign-up_form" @submit="submitForm">
                <div class="user-sign-up_form__group">
                    <div class="user-sign-up_form__group__label">이메일</div>
                    <div class="user-sign-up_form__group__input">
                        <div class="email-input">
                            <span class="email-input__local-part">
                                <input type="text" v-model="localPart" size="1" class="form-control email" placeholder="이메일" @change="emailValidation">
                            </span>
                            <span class="email-input__separator">@</span>
                            <span class="email-input__domain-part">
                                <select-box
                                    v-if="domainPart != '_manual'"
                                    v-model="domainPart"
                                    :items="this.domainList"
                                    :manual="true"
                                    @change="value => { domainPart = value }"
                                ></select-box>
                                <input v-else class="form-control" size="1" placeholder="입력해주세요">
                                <cancel-button v-if="domainPart == '_manual'" value="email-input__domain-part_expand"></cancel-button>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="user-sign-up_form__group">
                    <div class="user-sign-up_form__group__label">비밀번호</div>
                    <div class="user-sign-up_form__group__description">8자 이상의 숫자와 영문, 특수문자를 혼합하여 입력해주세요.</div>
                    <div class="user-sign-up_form__group__input">
                        <input type="password" v-model="pw" class="form-control" placeholder="비밀번호">
                    </div>
                </div>
                <div class="user-sign-up_form__group">
                    <div class="user-sign-up_form__group__label">비밀번호 확인</div>
                    <div class="user-sign-up_form__group__description">8자 이상의 숫자와 영문, 특수문자를 혼합하여 입력해주세요.</div>
                    <div class="user-sign-up_form__group__input">
                        <input type="password" v-model="pwConfirm" class="form-control" placeholder="비밀번호 확인">
                    </div>
                </div>
                <div class="user-sign-up_form__group">
                    <div class="user-sign-up_form__group__label">별명</div>
                    <div class="user-sign-up_form__group__input">
                        <input type="text" v-model="nickName" class="form-control" placeholder="별명 (2~15자)">
                    </div>
                </div>
                <button class="user-sign-up_form__submit" type="submit">회원가입</button>
            </form>
        </div>
    </section>
</template>

<script>
    import SelectBox from "../../components/Common/SelectBox";
    import CancelButton from "../../components/Common/CancelButton";

    export default {
        name: "JoinPage",
        components: {
            "select-box": SelectBox,
            "cancel-button": CancelButton
        },
        data: () => {
            return {
                domainList: ["naver.com", "gmail.com", "hotmail.com"],
                localPart: null,
                domainPart: null,
                pw: null,
                pwConfirm: null,
                nickName: null,
                policyCheck: false
            }
        },
        methods: {
            submitForm(e) {
                e.preventDefault();

                /* User-Sign-Up Form Initialize */
                const emailId = this.localPart + "@" + this.domainPart;
                
                alert("( つ’-’)╮—̳͟͞͞ ㅋㅋ\n아직안만들었지롱~");
            },

            emailValidation(e) {
                const data = e.target.value;
            }
        }
    };
</script>

<style scoped>
    @import url("./JoinPage.css");
</style>