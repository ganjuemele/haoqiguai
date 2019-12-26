<template>
  <div class="mine">
    <div class="mine-headImg"></div>
    <ul>
      <li class="login-reg">
        <router-link to="#">
          <span class="mine-avatar"></span>
          <span class="login">登录/注册</span>
          <span class="to" style="position: relative;top: 30px;">></span>
        </router-link>
      </li>
      <li class="split"><router-link to="#"><span><img class="icon" src="../../assets/content.png" alt=""></span>我发布的内容<span class="to">></span></router-link></li>
      <li class="split"><router-link to="#"><span><img class="icon" src="../../assets/like.png" alt=""></span>我赞过的内容<span class="to">></span></router-link></li>
      <li class="split"><router-link to="#"><span><img class="icon" src="../../assets/person.png" alt=""></span>我关注的人<span class="to">></span></router-link></li>
      <li class="split"><router-link to="#"><span><img class="icon" src="../../assets/topic.png" alt=""></span>我关注的主题<span class="to">></span></router-link></li>
      <li style="padding: 20px"></li>
      <li class="split"><router-link to="#"><span><img class="icon" src="../../assets/warning.png" alt=""></span>意见反馈<span class="to">></span></router-link></li>
      <li class="split"><router-link to="#"><span><img class="icon" src="../../assets/bookmark-1.png" alt=""></span>用户协议<span class="to">></span></router-link></li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "Mine",
    data() {
      return {

      }
    }
  };
</script>

<style scoped>
  .mine-headImg {
    background-color: #000;
    height: 120px;
  }
  a {
    color: #111;
  }
  .split {
    border-bottom: 1px solid #ebebeb;
  }
  .login-reg {
    padding: 0;
    position: relative;
    top: -25px;
  }
  .mine ul {
    margin: 0 auto;
  }
  li {
    width: 88%;
    padding: 16px 0;
    margin: 0 auto;
  }
  .to {
    color: #b5b5b5;
    float: right;
  }
  .mine .login {
    font-weight: 500;
    font-size: 19px;
    position: relative;
    top: -30px;
  }
  .split .icon {
    width: 20px;
    margin-right: 16px;
  }
  .mine-avatar {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    display: inline-flex;
    background-color: #fce720;
    margin-right: 16px;
  }
</style>
