<template>
  <div id="main">
    <van-cell-group title="请按照提示格式填写，使用者自己承担一切后果！" inset>
      <van-field v-model="formData.name" label="姓名" placeholder="请输入姓名" />
      <van-field v-model="formData.uid" label="学号" placeholder="请输入学号" />
      <van-field v-model="formData.phone" label="手机号" placeholder="133******33" />
      <van-field v-model="formData.zy" label="专业" placeholder="软件工程" />
      <van-field v-model="formData.bj" label="班级" placeholder="软件工程18A" />
      <van-field v-model="formData.bzr" label="班主任" placeholder="请输入班主任姓名" />
      <van-field v-model="formData.secret" type="password" label="密钥" placeholder="请输入密钥" />
      <van-button @click="toAbout" type="info" block >进入请假条</van-button>
    </van-cell-group>
  </div>
</template>

<script>
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
  margin-top: 1vh;
}
</style>