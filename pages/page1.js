const Page1 = {
    data() {
        return {
            count: 1
        }
    },
    template: `
    <div>
    <n-button type="primary">
        Primary{{count}}
    </n-button>
    <router-link to="/">Go to Home</router-link>
    </div>
    `
}