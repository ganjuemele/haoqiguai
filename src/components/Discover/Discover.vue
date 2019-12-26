<template>
  <div>
    <div class="dsc-header">
      <img class="dsc-search" src="../../assets/no-Search@3x.png"/>
      <p class="dsc-title">探索</p>
      <div></div>
    </div>
    <img class="top-img" src="../../assets/dscHeadImg.jpg" />

    <div class="wallpaper">
      <div>
        <div style="display: inline-block">
          <h5>好看的壁纸万里挑一</h5>
          <p class="subtitle">超过 30 种造型模版搭配，打造你的专属小'刘海儿'。</p>
        </div>
        <img class="more" src="../../assets/more.png" />
      </div>
      <ul class="wp-ul">
        <li class="wp-li"><div><img class="wp-img" src="../../assets/wallpaper/IMG264.jpeg" /><div class="series">母亲节</div></div></li>
        <li class="wp-li"><div><img class="wp-img" src="../../assets/wallpaper/IMG258.jpeg" /><div class="series">好奇怪系列</div></div></li>
        <li class="wp-li"><div><img class="wp-img" src="../../assets/wallpaper/IMG263.jpeg" /><div class="series">音乐节</div></div></li>
        <li class="wp-li"><div><img class="wp-img" src="../../assets/wallpaper/IMG262.jpeg" /><div class="series">体育节</div></div></li>
        <li class="wp-li"><div><img class="wp-img" src="../../assets/wallpaper/IMG261.jpeg" /><div class="series">哈哈哈</div></div></li>
      </ul>
    </div>

    <div class="split-line"></div>

    <div class="wallpaper">
      <div>
        <div style="display: inline-block">
          <h5>换头像是个上瘾的事</h5>
          <p class="subtitle">每周推出原创头像，给社交加点新鲜感，从这里开始</p>
        </div>
        <img class="more" src="../../assets/more.png" />
      </div>
        <ul class="wp-ul" style="width: 375px;">
          <li class="wp-li"><div><img class="avt-img" src="../../assets/avatar/IMG265.jpeg"/><div class="series"><p>母亲节</p></div></div></li>
          <li class="wp-li"><div><img class="avt-img" src="../../assets/avatar/IMG266.jpeg"/><div class="series"><p>猫的区别对待</p></div></div></li>
          <li class="wp-li"><div><img class="avt-img" src="../../assets/avatar/IMG267.jpeg"/><div class="series"><p>清晨的日常</p></div></div></li>
          <li class="wp-li"><div><img class="avt-img" src="../../assets/avatar/IMG268.jpeg"/><div class="series"><p>超萌白熊上线，来Say hi~</p></div></div></li>
          <li class="wp-li"><div><img class="avt-img" src="../../assets/avatar/IMG269.jpeg"/><div class="series"><p>生活就是跟着太阳上班，再伴着月亮入眠</p></div></div></li>
        </ul>
    </div>
    <div class="split-line"></div>
    <div class="wallpaper">
      <div>
        <div style="display: inline-block">
          <h5>生活大调查</h5>
          <p class="subtitle">生活的千百种问题都在这。</p>
        </div>
        <img class="more" src="../../assets/more.png" />
      </div>
      <ul class="wp-ul">
        <li class="wp-li"><div><div class="survey-img">图片0</div><p class="series">日常生活中，你都观察到了哪些"信任转移"现象？</p></div></li>
        <li class="wp-li"><div><div class="survey-img">图片1</div><p class="series">你都遇到过哪些"忙碌悖论"</p></div></li>
        <li class="wp-li"><div><div class="survey-img">图片2</div><p class="series">你最忍不了哪种"强行洋气"的设定？</p></div></li>
        <li class="wp-li"><div><div class="survey-img">图片3</div><p class="series">日常中，你觉得还急需增加哪些新型保险？</p></div></li>
        <li class="wp-li"><div><div class="survey-img">图片4</div><p class="series">说到"娱乐"的时候，你会涌现的心情通常是哪种？</p></div></li>
      </ul>
    </div>
<!--      <div class="split-line"></div>-->
    <div><p class="nomore">没有更多啦</p></div>
  </div>
</template>

<script>
  export default {
    name: "Discover",
    data() {
      return {
        // dscUlImg: [
        //   {id:1, imgSrc: ''}
        // ]
      }
    }
  }
</script>

<style scoped>
  .dsc-header {
    display: inline-block;
    width: 100%;
  }
  .dsc-search {
    width: 29px;
    height: 29px;
    display: block;
    float: left;
    margin: 8px;
  }
  .dsc-header .dsc-title {
    display: block;
    margin: 8px auto;
    font-size: 18px;
    /*font-weight: bolder;*/
  }
  .top-img {
    height: 110px;
    width: 100%;
  }
  .wallpaper {
    margin-top: 30px;
  }
  .wallpaper>:first-child {
    padding-left: 15px;
  }
  .wallpaper .subtitle {
    color: #b5b5b5;
    font-size: 12px;
  }
  .wallpaper .wp-ul {
    width: 375px;
    display: flex;
    padding: 0 10px;
    white-space: nowrap;
    overflow-x: scroll;
  }
  .wallpaper .wp-ul li {
    display: inline-flex;
    margin-left: 9px;
    /*width: 115px;*/
  }
  .wp-ul li div .series{
    font-size: 13px;
    width: 115px;
    height: auto;
    padding-top: 8px;
    overflow: hidden;
    word-wrap: normal;
    word-break: normal;
  }
  /*.series p {*/
  /*  height: auto;*/
  /*  overflow: hidden;*/
  /*  word-wrap: normal;*/
  /*  word-break: normal;*/
  /*}*/
  .wp-img {
    height: 250px;
    border-radius: 7px;
    width: 125px;
  }
  .avt-img {
    height: 115px;
    border-radius: 10px;
    width: 115px;
  }
  .survey-img {
    height: 115px;
    width: 230px;
    border-radius: 10px;
    border: 1px solid coral;
  }
  .more {
    height: 27px;
    position: relative;
    top: 10px;
    float: right;
    padding-right: 10px;
  }
  .split-line {
    border: 1px solid #ededed;
    width:80%;
    margin: 0 auto;
  }
  .nomore {
    color: red;
    margin-top: 50px;
  }
</style>
