<template>
  <div class="search">
    <div style="padding: 0 15px">
      <swiper-out>
        <div slot="btn">删除</div>
        <div slot="btn">编辑</div>
      </swiper-out>
    </div>
  </div>
</template>
<script>
  import SwiperOut from 'base/swiper-out/swiper-out'
  export default {
    data () {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      SwiperOut
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "~common/css/variable"

</style>
