<template>
  <div class="search">
    <div id="container"></div>
  </div>
</template>
<script>
  import SwiperOut from 'base/swiper-out/swiper-out'
  /* eslint-disable no-new */
  let map = null
  let placeSearch = null
  export default {
    created () {

    },
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        map = new AMap.Map('container', {
          zoom: 10,
          center: [116.39, 39.9]
        })
        AMap.service('AMap.PlaceSearch', function () {
          // 实例化PlaceSearch
          placeSearch = new AMap.PlaceSearch({
            pageSize: 5,
            pageIndex: 1,
            city: '010'
          })
          // TODO: 使用placeSearch对象调用关键字搜索的功能
        })
        placeSearch.search('方恒', function (status, result) {
          console.log(status)
          console.log(result)
        })
      })
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
  .search
    position fixed
    top 88px
    bottom 0
    width 100%
    #container
      height 100%
</style>
