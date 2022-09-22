const Loginbox = {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    loginNow() {
      window.$message.success(JSON.stringify(this.loginBoxInput, null, '    '));
      GlobalData.setUserName(this.loginBoxInput.username);
      GlobalData.setPassword(this.loginBoxInput.password);
      GlobalData.setLoginIn(this.loginBoxInput.username); // 设置登录成功状态
      this.$emit('close-login');
    },
  },
  setup() {
    const message = useMessage();
    const loginFormRef = ref(null);
    const loginBoxInput = reactive({
      username: GlobalData.login.username,
      password: GlobalData.login.password,
    });
    window.$message = message;
    return {
      GlobalData,
      loginFormRef,
      loginBoxInput
    }
  },
  template: `
    <div>
    <n-message-provider>
    <n-form ref="loginFormRef" :model="loginBoxInput" :style="{ maxWidth: '640px' }">
    <n-form-item label="用户名" path="username"
      :rule="{
        required: true,
        message: '请输入用户名',
        trigger: ['input', 'blur']
      }"
    >
      <n-input v-model:value="loginBoxInput.username" clearable />
    </n-form-item>
    <n-form-item label="密码" path="password"
      :rule="{
        required: true,
        message: '请输入密码',
        trigger: ['input', 'blur']
      }"
    >
      <n-input type="password" v-model:value="loginBoxInput.password" clearable />
    </n-form-item>
    <n-form-item>
      <n-space justify="end" :style="{ width: '100%' }">
        <n-button attr-type="button" type="primary" @click="loginNow">
          确定
        </n-button>
      </n-space>
    </n-form-item>
  </n-form>
    </n-message-provider>
    </div>
    `
}