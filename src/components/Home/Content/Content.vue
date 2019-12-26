<template>
    <div class="content">
      <nav class="content-navbar">
        <router-link to="/">
          <img class="return" src="../../../assets/return.png" alt="">
        </router-link>
        <img class="more" src="../../../assets/content-more.png" alt="">
      </nav>
      <div class="content-head">
        <h3>这部英式幽默小说，关于一位少女投奔素未谋面的乡下亲戚</h3>
        <div class="content-info">
          <div class="author">曾梦龙</div>
          <div class="date">12月6日</div>
        </div>
        <img src="../../../assets/1575870283581.jpg" alt="">
        <p class="postil">简直就是20世纪最有意思的讽刺小说之一。</p>
        <p class="postil">————南茜·珀尔，美国作家</p>
        <div style="border-bottom: 2px solid #ebebeb;width:100px;margin: 20px auto 20px;"></div>
      </div>

      <div class="content-body">
        <h4>《令人难以宽慰的农庄》</h4>
        <img src="../../../assets/1576050830599.jpg" alt="">
        <h4>内容简介</h4>
        <p>受过良好教育的芙洛拉·波斯特见多识广，品味高雅。失去双亲后， 19 岁的她决定投奔素未谋面的乡下亲戚。在这个名为“令人难以宽慰”的地方，她见到了与众不同的斯塔卡的一家.</p>
        <p>本书对D.H.劳伦斯等人的乡村情节剧进行了滑稽的模仿，以戏谑的方式拆除了一系列维多利亚</p>
        <img src="../../../assets/1576050724297.jpg" alt="">
        <p class="postil">同名改编电影海报，来自：豆瓣</p>
        <p>斯麦林夫人性格坚毅，趣味高雅。</p>
        <p class="reproduce">题图为同名改编电影剧照，来自：豆瓣</p>
      </div>

      <div class="content-comment">
        <div class="split"></div>
        <img src="../../../assets/comment-placeholder@3x.png" alt="">
      </div>
    </div>
</template>

<script>
  export default {
    name: "Content",
    data() {
      return{

      }
    }
  }
</script>

<style scoped>
  .content {
    width: 100%;
  }
  .content h3 {
    margin-top: 15px;
  }
  .content-body h4 {
    border-left: #FEC91D solid 3px;
  }
  .content .content-navbar {
    display: inline-block;
    width: 100%;
    padding: 8px 0;
    border-bottom: 2px solid #efefef;
    position: fixed;
    background-color: #fff;
  }
  .content img {
    width: 100%;
  }
  .content p {
    font-size: 18px;
  }
  .content-navbar img{
    width: 29px;
  }
  .content-navbar .return {
    float: left;
    margin-left: 15px;
  }
  .content-navbar .more {
    float: right;
    margin-right: 20px;
  }
  .content-head {
    padding: 50px 20px;
  }
  .content-head .content-info {
    width: 100%;
    padding: 12px 0;
  }
  .content-info .author{
    display: inline-block;
  }
  .content-head .date {
    color: #bfbfbf;
    display: inline-block;
    float: right;
  }
  .content-head .postil {
    text-align: center;
    font-size: 16px;
    color: #757575;
    margin: 6px auto;
  }
  .content-body p{
    margin: 20px 15px;
    font-size: 18px;
    letter-spacing: 0.1pt;
    line-height: 23pt;
  }
  .content-body img {
    margin-top: 18px;
  }
  .content-body h4 {
    margin: 18px 20px;
    padding: 2px 10px;
  }
  .content-body .postil {
    font-size: 15px;
    color: #b5b5b5;
    margin-top: 5px;
    text-align: center;
  }
  .content-body .reproduce {
    margin-top: 100px;
  }
  .content-comment {
    with: 100%;
  }
  .content-comment .split {
    width: 100%;
    border: 0.5px solid #ebebeb;
  }
  .content-comment img {
    display: block;
    width: 148px;
    height: 158px;
    margin: 20px auto 120px auto;
    /*text-align: center;*/
  }
</style>
