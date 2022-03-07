<template>
  <div id="main">
    <div>
      <div>请按照提示格式填写！</div>
      <div style="margin-bottom: 2vh">使用者自己承担一切后果！</div>
      姓名: <input type="text" v-model="formData.name" /><br />
      学号: <input type="text" v-model="formData.uid" /><br />
      手机号: <input type="text" v-model="formData.phone" placeholder="133******33"/><br />
      专业: <input type="text" v-model="formData.zy" placeholder="软件工程"/><br />
      班级: <input type="text" v-model="formData.bj" placeholder="软件工程18A"/><br />
      班主任: <input type="text" v-model="formData.bzr" /><br />
      密钥: <input type="text" v-model="formData.secret" /><br />
      <div style="float: right; padding-right: 4vw"><button @click="toAbout">进入请假条</button></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      formData: {
        name: "",
        uid: "",
        phone: "",
        zy: "",
        bj: "",
        bzr: "",
        secret: ''
      },
    };
  },
  methods: {
    toAbout() {
      this.$router.push({ path: "/about", query: this.formData });
    },
  },
};
</script>
<style scoped>
#main {
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;  
}
</style>