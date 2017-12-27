<template>
  <div class="recommend">
    <loading-svg bgColor="#ddd" padding="10" width="250"></loading-svg>
  </div>
</template>
<script>
  import LoadingSvg from 'base/loading/loading-svg'
  export default {
    data () {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      LoadingSvg
    }
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
