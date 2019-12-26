<template>
  <div id="app">

    <router-view />

    <div class="tabBar mint-tabbar is-fixed">
      <ul>
        <li v-for="tab in tabs" :key="tab.id">
          <router-link :to="tab.routerName.name">
            <img :src='tab.imgSrc' alt="" />
            <p>{{tab.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Home from "./components/Home/Home";
import index_icon from "./assets/home@2x.png";
import discover_icon from "./assets/explore@3x.png";
import mine_icon from "./assets/mine@3x.png";

let tabs = [
  {id:1,title:'首页', imgSrc: index_icon, routerName:{name:'index'}},
  {id:2,title:'探索', imgSrc: discover_icon, routerName:{name:'discover'}},
  {id:3,title:'我的', imgSrc: mine_icon, routerName:{name:'mine'}}
];
export default {
  name: 'App',
  // components: {Home},
  data() {
    return {
      tabs,
      selected: ''
    }
  },
  watch: {
    selected: function (newV, oldV) {
      console.log('111');
      this.$router.push({name: this.selected});
    }
  }
}
</script>

<style>
  #app {
    width: 375px;
    margin: 0 auto;
  }
  .tabBar ul {
    width: 100%;
    display: flex;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .tabBar ul li {
    width: 100%;
    float: left;
    text-align: center;
  }
  .tabBar ul li a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .tabBar ul li .router-link-active {
    color: #FEC81E;
  }
  .tabBar ul li p {
     font-size: 8px;
   }
  .tabBar ul li a img{
    width: 29px;
  }
</style>
