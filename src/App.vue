<template>
  <div id="app">
    <list :page="page"></list>
    <!--<a class="button"><span @click="">首页</span></a>-->
    <!--<a class="button" @click="next">下一页 <span>第 {{page}} 页</span></a>-->
    <page></page>
  </div>
</template>

<script>
  import List from './components/List';
  import Page from './components/Page';
  export default {
    name: 'app'  ,
    components: {
      List,
      Page
    },
    data () {
      return {
        page: 1
      }
    },
    methods: {
      next () {
        this.page ++
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
  .button {
    display: block;
    width: 100%;
    background: #212121;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
  }
  .button span {
    margin-left: 2em;
    font-size: .5rem;
    color: #d6d6d6;
  }
</style>
