<template>
  <div>
    <div class="header">
      <ul class="nav">
        <li><img src="../../assets/no-Search@3x.png" style="width: 29px;"/></li>
        <li ></li>
        <li ><router-link to="/" class="active">推荐</router-link></li>
        <li ><router-link to="attention">关注</router-link></li>
        <li ></li>
        <li><img src="../../assets/edit@2x.png" style="width: 29px;"/></li>
      </ul>
    </div>

    <div class="home">
      <router-link class="content" to="content">
        <div>
          <p class="title">这部英式幽默小说，关于以为少女投奔素未谋面的乡下亲戚</p>
          <img class="cover-img" src="../../assets/1575870283581.jpg" />
          <div class="split-line" ></div>
          <div class="quick-feature">
            <img style="float: left" src='../../assets/message@3x.png' />
            <img src='../../assets/like@3x.png' />
            <img style="float: right" src='../../assets/share@2x.png' />
          </div>
        </div>
      </router-link>
      <div class="split"></div>
    </div>

    <div class="home">
      <router-link class="content" to="content">
        <div>
          <p class="title">冷战起源的里程碑著作，如何理解杜鲁门政府的外交策略？</p>
          <img class="cover-img" src="../../assets/1575870983850.jpg"/>
          <div class="split-line"></div>
          <div class="quick-feature">
            <img style="float: left" src='../../assets/message@3x.png' />
            <img src='../../assets/like@3x.png' />
            <img style="float: right" src='../../assets/share@2x.png' />
          </div>
        </div>
      </router-link>
      <div class="split"></div>
    </div>


    <div class="home">
      <router-link class="content" to="content">
        <div>
          <p class="title">为什么现在的书越来越厚了？</p>
          <img class="cover-img" src="../../assets/1576046073274.jpg">
          <div class="split-line"></div>
          <div class="quick-feature">
            <img style="float: left" src='../../assets/message@3x.png' />
            <img src='../../assets/like@3x.png' />
            <img style="float: right" src='../../assets/share@2x.png' />
          </div>
        </div>
      </router-link>
      <div class="split"></div>
    </div>

    <div class="home">
      <router-link class="content" to="content">
        <div>
          <p class="title">大厦已倾，20多名编辑和撰稿人讲述时代公司兴亡史</p>
          <img class="cover-img" src="../../assets/1576046112982.jpg">
          <div class="split-line"></div>
          <div class="quick-feature">
            <img style="float: left" src='../../assets/message@3x.png' />
            <img src='../../assets/like@3x.png' />
            <img style="float: right" src='../../assets/share@2x.png' />
          </div>
        </div>
      </router-link>
      <div class="split"></div>
      <div style="height: 78px"></div>
    </div>
  </div>


</template>

<script>
  import heart_icon from "../../assets/like@3x.png";
  import message_icon from "../../assets/message@3x.png";
  import share_icon from "../../assets/share@2x.png";

  let home_tabs = [
    {id:1, imgSrc:message_icon, num: 12, routerName:{name:'Connent'}},
    {id:2, imgSrc:heart_icon, num: 32, routerName:{name:'Connent'}},
    {id:3, imgSrc:share_icon, routerName:{name:'Connent'}}
  ];
  export default {
      name: "Home",
    data() {
        return {
          home_tabs: home_tabs
        }
    }
  }
</script>

<style scoped>
  .header {
    border-bottom: #efefef 2px solid;
    padding: 8px 0;
    display: flex;
    width: 100%;
    color: #b5b5b5;
  }
  .header ul {
    margin: 0 auto;
  }
  .header ul li {
    margin: 0 20px;
    font-weight: bolder;
  }
  .nav a {
    color: #b5b5b5;
    font-size: 17px;
  }
  .header ul li a:active {
    border-bottom: coral 3px solid;
    padding-bottom: 8px;
    color: #000;
  }
  .home {
    width: 100%;
  }
  .home a {
    font-size: 16px;
    color: #212121;
  }
  .home .content .title {
    width: 88%;
    margin: 12px auto;
  }
  .home .content .cover-img {
    width: 88%;
    margin: auto 25px;
  }
  .home .split-line {
    border: 1px solid #efefef;
    width: 88%;
    margin: 10px auto;
  }
  .home .quick-feature {
    width: 100%;
    display: inline-block;
    text-align: center;
  }
  .home .quick-feature img {
    margin: 0 30px;
    width: 30px;
  }
  .split {
    background-color: #efefef;
    height: 5px;
    width: 375px;
    position: relative;
    margin: 10px auto;
  }
</style>
