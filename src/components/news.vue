<template>
  <div class="news">
    sadasdasdasd
    <el-upload
      action="http://122.114.254.63:9090/web/api/manager/upload"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
  </div>
</template>

<script>
  import ajax from "../api"

  export default {
    name: "news",
    data() {
      return {
        ajax,
        news: null
      }
    },
    created() {
      /*{
        'apiversion':"1.1" //详情
      }*/

    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },

  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
</style>
