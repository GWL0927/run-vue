<template>
  <div
    v-if="
      (vip.includes($route.query.name) && $route.query.secret == secret) ||
      $route.query.name == '郭威龙np'
    "
    id="main"
  >
    <div class="form-div">
      <div class="list com-display-flex">
        <div class="title com-flex-1">身份类型</div>
        <div class="txt com-flex-1">学生</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">姓名</div>
        <div class="txt com-flex-1">{{ formData.name }}</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">学工号</div>
        <div class="txt com-flex-1">{{ formData.uid }}</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">院系</div>
        <div class="txt com-flex-1">信息学院</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">专业</div>
        <div class="txt com-flex-1">{{ formData.zy }}</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">班级</div>
        <div class="txt com-flex-1">{{ formData.bj }}</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">请假类型</div>
        <div class="txt com-flex-1">事假</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">请假原因</div>
        <div class="txt com-flex-1">上课</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">请假去往目的地</div>
        <div class="txt com-flex-1">聚贤街新天地</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">请假开始时间</div>
        <div class="txt com-flex-1">{{ currentDate }} 08:00</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">请假结束时间</div>
        <div class="txt com-flex-1">{{ currentDate }} 23:30</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">请假天数</div>
        <div class="txt com-flex-1">1</div>
      </div>
      <div class="list com-display-flex">
        <div class="title com-flex-1">请假证明或照片</div>
        <div class="txt com-flex-1"></div>
      </div>
    </div>
    <div class="flow-div">
      <div class="list com-display-flex">
        <!---->
        <div class="photo-name">1</div>
        <div class="right com-flex-1">
          <div class="title com-display-flex">
            <div>发起人</div>
            <!---->
            <!---->
            <div class="time com-flex-1">{{ smallDate }} 13:11:54</div>
          </div>
          <div class="detail">
            <div class="person">{{ formData.name }}，{{ formData.phone }}</div>
            <!---->
          </div>
        </div>
      </div>
      <div class="list com-display-flex">
        <div class="vertical-line"></div>
        <div class="photo-name">1</div>
        <div class="right com-flex-1">
          <div class="title com-display-flex">
            <div>学生处和保卫处</div>
            <!---->
            <!---->
            <!---->
          </div>
          <div class="detail">
            <div class="person">
              抄送给
              吐玛尔·玛斯胡提、范庆江、段剑金、张国华、乐新科、唐国华、刘阳、汪飞奇、向飞、杨云、邓梅、徐旻、唐明超、刘德鹏、刘萌、邓王、邹伟
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div class="list com-display-flex">
        <div class="vertical-line"></div>
        <div class="photo-name">2</div>
        <div class="right com-flex-1">
          <div class="title com-display-flex">
            <div>班主任审核</div>
            <!---->
            <img
              src="https://oss.yixiaoyuan.com/compus/activity/ymimg/2021/05/24/aliossb4cdf890d70040f587d496ae428ba01b.png"
              class="status"
            />
            <div class="time com-flex-1">{{ smallDate }} 17:12:20</div>
          </div>
          <div class="detail">
            <div class="person">{{ formData.bzr }}，159******27</div>
            <!---->
          </div>
        </div>
      </div>
      <div class="list com-display-flex">
        <div class="vertical-line"></div>
        <div class="photo-name">3</div>
        <div class="right com-flex-1">
          <div class="title com-display-flex">
            <div>出校审核</div>
            <!---->
            <img
              src="https://oss.yixiaoyuan.com/compus/activity/ymimg/2021/05/24/alioss22ee83a8d6af45fa8492b1fcea66dcb6.png"
              class="status"
            />
            <!---->
          </div>
          <div class="detail">
            <div class="person">
              等待 杨文华 或 2941 或 LS2022025016 或 LS190918013 或
              LS20220275018 或 LS20220225030 或 LS180918077 或 LS20220225032 或
              LS20220225010 或 金国荣 或 LS180918036 或 LS20180440 或
              LS180918066 或 LS20220225024 或 马坤 或 LS180918081 或
              LS20220225012 或 LS20220225009 或 LS20220225027 或 LS20191210010
              或 马立新 或 LS1890918002 或 吐玛尔·玛斯胡提 或 邱延红 或
              LS20220323002 或 LS20220323008 或 2498 或 LS20220323001 或
              2018012001790 或 包俊杰 或 王红才 或 王红金 或 宁德智 或
              2018012001837 或 LS20210408005 或 李庆伟 或 LS20210408011 或 3594
              或 周徐兵 或 杨曦垚 或 杨平 或 钱红祥 或 赵永兵 或 李尉 或 王孝祥
              或 汪如中 或 代连鹤 或 豆兴海 或 李文广 或 马代良 或 刘贵平 或
              马洪兴 或 张必省 或 杨绍龙 或 高家兴 或 张天才 或 段志斌 或 李代福
              或 杨龙清 或 甘兴福 或 杨友 或 徐宏州 审核
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div class="list com-display-flex">
        <div class="vertical-line"></div>
        <div class="photo-name">4</div>
        <div class="right com-flex-1">
          <div class="title com-display-flex">
            <div>入校审核</div>
            <!---->
            <img
              src="https://oss.yixiaoyuan.com/compus/activity/ymimg/2021/05/24/alioss22ee83a8d6af45fa8492b1fcea66dcb6.png"
              class="status"
            />
            <!---->
          </div>
          <div class="detail">
            <div class="person">
              等待 2941 或 LS2022025016 或 LS190918013 或 LS20220275018 或
              LS20220225030 或 LS180918077 或 LS20220225032 或 LS20220225010 或
              金国荣 或 LS180918036 或 LS20180440 或 LS180918066 或
              LS20220225024 或 马坤 或 LS180918081 或 LS20220225012 或
              LS20220225009 或 LS20220225027 或 LS20191210010 或 马立新 或
              LS1890918002 或 吐玛尔·玛斯胡提 或 邱延红 或 LS20220323002 或
              LS20220323008 或 2498 或 LS20220323001 或 2018012001790 或 包俊杰
              或 王红才 或 王红金 或 宁德智 或 2018012001837 或 LS20210408005 或
              李庆伟 或 LS20210408011 或 3594 或 徐宏州 或 杨友 或 甘兴福 或
              杨龙清 或 李代福 或 段志斌 或 张天才 或 高家兴 或 杨绍龙 或 张必省
              或 马洪兴 或 刘贵平 或 马代良 或 李文广 或 豆兴海 或 代连鹤 或
              汪如中 或 王孝祥 或 李尉 或 赵永兵 或 钱红祥 或 杨平 或 杨曦垚 或
              周徐兵 审核
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>您没有权限</div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      currentDate: "2022-03-07",
      smallDate: "03-06",
      formData: {
        name: "",
        uid: "",
        phone: "",
        zy: "",
        bj: "",
        bzr: "",
      },
      secret: "12345678910",
      vip: ["郭威龙", "农幸", "段国瑞", "姚懿龙"],
    };
  },
  created() {
    this.getNowFormatDate();
    this.formData = this.$route.query;
    if (this.formData.name == "郭威龙np") {
      this.formData = {
        name: "郭威龙",
        uid: "1843205000032",
        phone: "139******77",
        zy: "软件工程",
        bj: "软件工程18F",
        bzr: "贾庭芳",
        secret: "",
      };
    }
  },
  methods: {
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var strDate1 = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (strDate1 >= 0 && strDate1 <= 9) {
        strDate1 = "0" + (Number(strDate1) - 1);
      }
      this.currentDate = year + seperator1 + month + seperator1 + strDate;
      this.smallDate = month + seperator1 + strDate1;
    },
  },
};
</script>

<style lang="stylus" scoped>
#main {
  padding-bottom: 3.4482758620689653rem;
  position: relative;
  margin: 0 auto;
  -webkit-text-size-adjust: 100% !important;
  line-height: 1.6;
  font-family: -apple-system-font, Helvetica Neue, sans-serif;
}

*, .scroller {
  -webkit-tap-highlight-color: transparent;
}

.form-div {
  margin: 0.836604774535809rem 0.6274535809018568rem;
}

.flow-div, .form-div, .tip-div {
  background-color: #fff;
}

.flow-div, .form-div {
  border-radius: 0.21220159151193632rem;
}

.form-div .list {
  font-size: 0.9027055702917771rem;
  color: #747474;
  padding: 0.7405039787798408rem 0.736604774535809rem;
  border-bottom: 1px solid #F3F3F3;
  text-align: justify;
}

.flow-div .list, .form-div .list {
  line-height: 1.0610079575596816rem;
}

.form-div .list .title {
  min-width: 30%;
}

.form-div .list .txt {
  text-align: right;
  margin-left: 0.636604774535809rem;
  color: #333;
}

.com-display-flex {
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.com-flex-1 {
  flex: 1;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  overflow: hidden;
}

.flow-div {
  margin: 0.636604774535809rem 0.47745358090185674rem;
  position: relative;
  padding: 0.6305039787798408rem 0 0.3652519893899204rem;
}

.flow-div .list .photo-name {
  width: 2.622015915119363rem;
  height: 2.622015915119363rem;
  border-radius: 100%;
  margin: 0.8957559681697612rem;
  background-color: #FF4646;
  line-height: 2.622015915119363rem;
  text-align: center;
  color: #fff;
  font-size: 0.7957559681697612rem;
  z-index: 10;
}

.flow-div .list .right {
  margin-right: 0.7427055702917771rem;
  padding: 0.7305039787798407rem 0 0;
}

.flow-div .list .right .time {
  color: #747474;
  font-size: 0.636604774535809rem;
  text-align: right;
}

.flow-div .list .right .detail {
  border-bottom: 1px solid #F3F3F3;
  padding: 0.4683023872679045rem 0 0.5305039787798408rem;
}

.flow-div .list {
  font-size: 0.9027055702917771rem;
  color: #333;
}

.flow-div .list, .form-div .list {
  line-height: 1.0610079575596816rem;
}

.flow-div .list .right .title .status {
  width: 2.2811671087533156rem;
  height: 0.9018567639257293rem;
  display: block;
  margin: 0.10610079575596816rem 0.37135278514588854rem;
}
</style>
