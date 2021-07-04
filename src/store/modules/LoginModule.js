const loginModule = {
    state: {
        userName: "",
        emailId: "",
        token: ""
    },
    getters: {
        isLogin(state){
            return state.userName !== "";
        }
    },
    mutations: {
        setUserName(state, userName) {
            state.userName = userName;
        },
        setEmailId(state, emailId) {
            state.emailId = emailId;
        },
        setToken(state, token) {
            state.token = token;
        },
        login(state, data){
            state.userName = data.userName;
            state.emailId = data.emailId;
            state.token = btoa(data.token);
        },
        logout(state) {
            state.userName = "";
            state.emailId = "";
            state.token = "";
        }
    }
};

export default loginModule;