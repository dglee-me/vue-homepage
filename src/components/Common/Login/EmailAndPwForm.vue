<template>
    <form class="login-page_section__form_content" @submit="submitForm">
        <span class="login-page_section__form_content_span" :class="{'error': emailIdError}">
            <input type="email" v-model="emailId" size="1" class="form-control" :class="{'error': emailIdError}" placeholder="이메일">
        </span>
        <div v-if="emailIdError" class="login-page_section__form_content__error">이메일 형식에 맞춰 입력해주세요.</div>
        <span class="login-page_section__form_content_span" :class="{'error': pwError}">
            <input type="password" v-model="pw" class="form-control" placeholder="비밀번호">
        </span>
        <button class="login-page_section__form_content_submit" type="submit">로그인</button>
        <section class="login-page_section__form_tool">
            <router-link to="/user/password/new">비밀번호 재설정</router-link>
            <router-link to="/user/new">회원가입</router-link>
        </section>
    </form>
</template>