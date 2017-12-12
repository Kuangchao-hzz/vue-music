<template>
  <div class="recommend">
    <Slider v-if="recommend.length > 0">
      <div v-for="item in recommend">
        <a :data-href="item.linkUrl">
          <img :src="item.picUrl">
        </a>
      </div>
    </Slider>
  </div>
</template>
<script>
  import Slider from 'base/slider/slider'
  import { getRecommend } from 'api/recommend'
  import { ERR_OK } from 'api/config'
  export default {
    data () {
      return {
        recommend: []
      }
    },
    created () {
      this._getRecommend()
    },
    computed: {},
    methods: {
      _getRecommend () {
        getRecommend().then(res => {
          if (res.code === ERR_OK) {
            this.recommend = res.data.slider
          }
        })
      }
    },
    components: {
      Slider
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/css/variable"
</style>
