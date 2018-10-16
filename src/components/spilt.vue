<template>
  <div class="spilt">
{{title}}
  </div>
</template>

<script>
  export default {
    name: "spilt",
    props:{
      title:{
        type:String,

      }
    }
  }
</script>

<style scoped>
  .spilt{
    height: 100px;
    width: 100%;
    background: red;

  }
</style>
