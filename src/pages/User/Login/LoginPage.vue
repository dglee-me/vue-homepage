<template>
    <main class="login-page">
        <section class="login-page_section__form">
            <router-link to="/">
                <h1>개발일기</h1>
            </router-link>
            <form class="login-page_section__form_content" @submit="submitForm">
                <span class="login-page_section__form_content_span" :class="{'error': emailError}">
                    <input type="email" v-model="email" size="1" class="form-control" :class="{'error': emailError}" placeholder="이메일">
                </span>
                <div v-if="emailError" class="login-page_section__form_content__error">이메일 형식에 맞춰 입력해주세요.</div>
                <span class="login-page_section__form_content_span" :class="{'error': pwError}">
                    <input type="password" v-model="pw" class="form-control" placeholder="비밀번호">
                </span>
                <button class="login-page_section__form_content_submit" type="submit">로그인</button>
                <section class="login-page_section__form_tool">
                    <router-link to="/user/password/new">비밀번호 재설정</router-link>
                    <router-link to="/user/new">회원가입</router-link>
                </section>
            </form>
        </section>
    </main>
</template>

<script>

    // 이메일 정규표현식
    const emailRule = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;

    // 8자 이상 숫자, 영문, 특수문자 혼합
    // -> 실제 서버에 요청하지 않고, 에러메세지를 유저에게 보여주진 않는다.
    //    submitForm 함수에서 걸러낸다.
    const pwRule = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    export default {
        name: "LoginPage",
        data: () => {
            return {
                email: null,
                pw: null,
                emailError: false,
                pwError: false
            };
        },
        watch: {
            email: function(email) {
                if(!emailRule.test(email)) {
                    this.emailError = true;

                    return false;
                }

                this.emailError = false;
            },
            pw: function(pw) {
                if(!pwRule.test(pw)) {
                    this.pwError = true;
                    
                    return false;
                }

                this.pwError = false;
            }
        },
        methods: {
            submitForm(e) {
                e.preventDefault();

                // 유효성 검사에서 실패했을 떄
                if(this.emailError === true || this.pwError === true) {
                    alert("이메일 주소 혹은 비밀번호가 틀렸습니다.");

                    return false;
                }

                // Change Data Format to JSON
                const formData = JSON.parse(JSON.stringify(this.$data));

                // Unnecessary Field Remove
                delete formData.emailError;
                delete formData.pwError;

                alert("( つ’-’)╮—̳͟͞͞ ㅋㅋ\n아직안만들었지롱~");
            }
        }
    };
</script>

<style scoped>
    @import url("./LoginPage.css");
</style>