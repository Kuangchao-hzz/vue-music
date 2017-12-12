<template>
  <div class="tab">
      <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/css/variable"

  .tab
    color $color-theme
    display flex
    .tab-item{
      flex 1 0 25%
      text-align center
    }
</style>
