<template>
  <div id="main">
    请按照默认值的格式输入自己的信息！<br />
    姓名: <input type="text" v-model="formData.name" /><br />
    学号: <input type="text" v-model="formData.uid" /><br />
    手机号: <input type="text" v-model="formData.phone" /><br />
    专业: <input type="text" v-model="formData.zy" /><br />
    班级: <input type="text" v-model="formData.bj" /><br />
    班主任: <input type="text" v-model="formData.bzr" /><br />
    <button @click="toAbout">进入请假条</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      formData: {
        name: "郭威龙",
        uid: "1843205000032",
        phone: "139******77",
        zy: "软件工程",
        bj: "软件工程18F",
        bzr: "贾庭芳",
      },
    }
  },
  methods: {
    toAbout() {
      this.$router.push({path: '/about', query: this.formData})
    }
  }
};
</script>
