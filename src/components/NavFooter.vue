<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/images/logo-footer.png" alt="">
      <p>计算机科学与技术17-1班-张祖林</p>
    </div>             
    <div class="footer-link">
      <a href="javascript:;" target="_blank">合肥工业大学</a><span>|</span>
      <a href="javascript:;" target="_blank">计算机与信息学院</a><span>|</span>
      <a href="javascript:;" target="_blank">张祖林</a><span>|</span>
      <a href="https://github.com/zhangzulin1234/News" target="_blank">Github项目页</a>
    </div>
    <div class="copyright">Copyright ©2020 <span class="domain">张祖林</span> All Rights Reserved.</div>
  </div>
</template>
<script>
  export default{
    name:'nav-footer'
  }
</script>
<style lang="scss" scoped>
  .footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color:#333333;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
        margin-top: -30px;
        margin-bottom:-15px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      .domain{
        color:#FF6600;
      }
    }
  }
</style>