<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

    import { verifyUser } from "@/api/index";
    
    export default {
        name: "UserVerify",
        props : {
            token: String
        },
        methods: {
            validation() {
                // 정상적이지 않은 Token임
                if(this.token.length < 100) {
                    
                    // Error page로 리다이렉트 시키기
                    this.$router.push("/error");
                }

                const result = verifyUser(this.token);
                result.then((response) => {
                    if(response.data === 1) {
                        alert("인증되었습니다.");

                        this.$router.push({path: `/`});
                    }else {
                        alert("잘못된 접근입니다.");
                        
                        this.$router.push({path: `/`});
                    }
                })
                .catch((error) => {
                    console.log("Error : " + error);

                    this.$router.push({path: `/error`});
                })
            }
        },
        beforeMount() {
            this.validation();
        }
    };
</script>