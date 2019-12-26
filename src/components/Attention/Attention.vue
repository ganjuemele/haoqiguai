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

    <div>
      <img class="attention-empty" src="../../assets/attention-empty@3x.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "Attention"
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
  .attention-empty {
    display: block;
    width: 225px;
    height: 270px;
    margin: 150px auto;
  }
</style>
