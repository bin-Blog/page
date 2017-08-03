<template>

  <div>
    <table class="table table-hover" cellpadding="1" cellspacing="1" border="1">
      <tr>
        <th class="center">标题</th>
        <th class="center">日期</th>
        <th class="center">作者</th>
      </tr>
      <tr v-for="news in list">
        <td class="col-xs-8 col-sm-9 col-lg-9 title">{{ news.title }}</td>
        <td class="col-xs-2 col-sm-1 col-lg-1 date">{{ news.create_at }}</td>
        <td class="col-xs-2 col-sm-2 col-lg-2 author">{{ news.author.loginname }}</td>
      </tr>
    </table>
    <!--<page></page>-->
  </div>
  <!--<page></page>-->

</template>

<script>
  import news from '../api/news';
//  import Page from './Page';

  export default {
    data () {
      return {
        list: [],
        limit: 10
      }
    },
    props: {
      page: {
        type: Number,
        default: 1
      }
    },
    created () {
      this.get()
    },
    watch: {
      page (val) {
        this.get()
      }
    },
    methods: {
      get () {
        news.getList({
          page: this.page,
          limit: this.limit
        }, (err, list) => {
          if (err) {
            console.log(err)
          } else {
            list.data.forEach((data) => {
              const d = new Date(data.create_at)
              data.create_at = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
            })
//            this.list = this.list.concat(list.data)
            this.list = list.data;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .center{
    text-align: center;
  }
  .title {
    text-align: center;
    /*width: 60%;*/
    border-right: 1px solid #333;
    /*font-weight: bold;*/
    font-size: 1.3rem;
  }
  .date {
    /*width: 20%;*/
    font-size: .8rem;
    color: #a3a3a3;
  }
  .author{
    /*width: 20%;*/
  }
</style>
