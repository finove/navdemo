const { reactive, nextTick, h, ref, onMounted } = Vue;
const GlobalData = reactive({
    session: {
        logined: false,
        name: '',
    },
    login: {
        username: '',
        password: '',
    },
    count: 0,
    setLoginIn(name) {
        this.session.name = name;
        this.session.logined = true;
    },
    async setLoginOut() {
        this.session.name = '';
        this.session.logined = false;
    },
    setUserName(name) {
        this.login.username = name;
    },
    setPassword(password) {
        this.login.password = password;
    },
    increment() {
        this.count++;
    }
});

const userOptions = [
    {
        label: "用户资料",
        key: "profile",
    },
    {
        label: "编辑用户资料",
        key: "editProfile",
    },
    {
        label: "退出登录",
        key: "logout",
    }
];