<template>
<div class="newsDetail" v-if="newsDetail">
  {{newsDetail}}
  <spilt :title = "pid"/>
</div>
</template>

<script>
  import spilt from "./spilt"
  import ajax from "../api"
  export default {
    name: "news-detail",
    data(){
      return{
        newsDetail:null,
        pid:""
      }
    },
    components:{
      spilt
    },
    created(){
      /*{
             'apiversion':"1.1" //详情
           }*/
      let {pid,c} = this.$route.params
      let {a,b} = this.$route.query
      console.log(pid,c);
      console.log(a,b);
      this.pid = pid
      ajax("post", "web/api/project/projectlistinfoheadselect", {
        projectid : pid,
        ispublish: "1",

      },{
        "apiversion":"1.1"
      }).then((res) => {
        console.log(res);
        this.newsDetail = res.data
      })
    }
  }
</script>

<style scoped>

</style>
