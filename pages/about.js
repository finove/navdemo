const About = {
    data() {
        return {
            count: 1
        }
    },
    setup() {
        const message = useMessage();
        return {
            handleUpdateShow(show) {
                message.success(show ? "show" : "hide");
            }
        }
    },
    template: `
    <div>
    <n-message-provider>
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button @click="handleUpdateShow">找点乐子吧</n-button>
      <router-link to="/">Go to Home</router-link>
    </template>
  </n-result>
    <n-empty description="暂时没有开发">
    <template #extra>
    </template>
    </n-empty>
    </n-message-provider>
    </div>
    `
}