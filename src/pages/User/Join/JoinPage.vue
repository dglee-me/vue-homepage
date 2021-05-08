<template>
    <div class="page">
        <main-header></main-header>
        <section class="container user-sign-up">
            <div class="user-sign-up_header">
                <h1>회원가입</h1>
            </div>
            <div class="form-wrap">
                <form class="user-sign-up_form" @submit="submitForm">
                    <div class="user-sign-up_form__group">
                        <div class="user-sign-up_form__group__label">이메일</div>
                        <div class="user-sign-up_form__group__input">
                            <div class="email-input">
                                <span class="email-input__local-part">
                                    <input type="text" v-model="localPart" size="1" class="form-control" placeholder="이메일">
                                </span>
                                <span class="email-input__separator">@</span>
                                <span class="email-input__domain-part">
                                    <select-box
                                        v-if="domainValue != '_manual'"
                                        v-model="domainValue"
                                        :items="this.domainList"
                                        :manual="true"
                                        @change="value => { domainValue = value }"
                                    ></select-box>
                                    <input v-else class="form-control" v-model="domainPart" size="1" placeholder="입력해주세요">
                                    <cancel-button v-if="domainValue == '_manual'" value="email-input__domain-part_expand"></cancel-button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="user-sign-up_form__group" :class="{'error': pwError}">
                        <div class="user-sign-up_form__group__label">비밀번호</div>
                        <div class="user-sign-up_form__group__description">8자 이상의 숫자와 영문, 특수문자를 혼합하여 입력해주세요.</div>
                        <div class="user-sign-up_form__group__input">
                            <input type="password" v-model="pw" class="form-control" :class="{'error': pwError}" placeholder="비밀번호">
                        </div>
                        <div v-if="pwError" class="user-sign-up_form__group__error">조건에 맞춰 입력해주세요.</div>
                    </div>
                    <div class="user-sign-up_form__group" :class="{'error': pwConfirmError}">
                        <div class="user-sign-up_form__group__label">비밀번호 확인</div>
                        <div class="user-sign-up_form__group__input">
                            <input type="password" v-model="pwConfirm" class="form-control" :class="{'error': pwConfirmError}" placeholder="비밀번호 확인">
                        </div>
                        <div v-if="pwConfirmError" class="user-sign-up_form__group__error">비밀번호가 일치하지 않습니다.</div>
                    </div>
                    <div class="user-sign-up_form__group" :class="{'error': nickNameError}">
                        <div class="user-sign-up_form__group__label">별명</div>
                        <div class="user-sign-up_form__group__input">
                            <input type="text" v-model="nickName" class="form-control" placeholder="별명 (2~15자)">
                        </div>
                        <div v-if="nickNameError" class="user-sign-up_form__group__error">2자 이상 입력해주세요.</div>
                    </div>
                    <button class="user-sign-up_form__submit" type="submit">회원가입</button>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
    import SelectBox from "../../../components/Common/SelectBox";
    import CancelButton from "../../../components/Common/CancelButton";
    import MainHeader from '../../../components/Header/MainHeader';

    // 이메일 정규표현식
    const emailRule = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;

    // 8자 이상 숫자, 영문, 특수문자 혼합
    const pwRule = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    export default {
        name: "JoinPage",
        components: {
            "select-box": SelectBox,
            "cancel-button": CancelButton,
            "main-header": MainHeader
        },
        data: () => {
            return {
                domainList: ["naver.com", "gmail.com", "hotmail.com"],
                localPart: null,
                domainPart: null,
                domainValue: null,
                pw: null,
                pwConfirm: null,
                nickName: null,
                policyCheck: false,
                pwError: false,
                pwConfirmError: false,
                nickNameError: false
            }
        },
        watch: {
            pw: function(pw) {
                if(!pwRule.test(pw)) {
                    this.pwError = true;

                    return;
                }

                this.pwError = false;
            },
            pwConfirm: function(pwConfirm) {

                // 비밀번호와 일치하지 않으면 Error msg. 표시
                if(this.pw !== pwConfirm) {
                    this.pwConfirmError = true;

                    return;
                }

                this.pwConfirmError = false;
            },
            nickName: function(nickName) {

                if(nickName.length < 2 || nickName.length > 15) {
                    this.nickNameError = true;

                    return;
                }

                this.nickNameError = false;
            }
        },
        methods: {
            submitForm(e) {
                e.preventDefault();

                // 실제 BackEnd로 넘길 값은 domainPart이고, domainValue 값은 직접 입력을 위한 데이터
                // manual로 작성된 domainValue 값을 domainPart에 넣어줍니다.
                if(this.domainValue !== "_manual") {
                    this.domainPart = this.domainValue;
                }

                /* User-Sign-Up Form Initialize */
                const emailId = this.localPart + "@" + this.domainPart;

                // 이메일 형식이 아닐 경우 Error msg. 노출
                if(!emailRule.test(emailId)) {
                    alert("이메일을 형식에 맞게 작성해주세요.");

                    return false;
                }

                if(!pwRule.test(this.pw)) {
                    alert("비밀번호를 다시 입력해주세요.");

                    return false;
                }

                if(this.pw !== this.pwConfirm) {
                    alert("비밀번호를 다시 입력해주세요.");

                    return false;
                }

                const nickName = this.nickName;
                if(nickName.length < 2) {
                    alert("별명을 2글자 이상 작성해주세요.");

                    return false;
                }

                // Change Data Format to JSON
                const parseData = JSON.parse(JSON.stringify(this.$data));

                // Unnecessary Field Remove
                delete parseData.domainList;
                delete parseData.domainValue;
                delete parseData.pwError;
                delete parseData.pwConfirmError;
                delete parseData.nickNameError;

                alert("( つ’-’)╮—̳͟͞͞ ㅋㅋ\n아직안만들었지롱~");
            }
        }
    };
</script>

<style scoped>
    @import url("./JoinPage.css");
</style>