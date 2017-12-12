<template>
  <div class="m-header">
    <div class="icon"></div>
    <div class="text">Chicken Music</div>
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

  .m-header
    position relative
    height 44px
    text-align center
    color $color-theme
    display flex
    align-items center
    justify-content center
    .text
      display inline-block
</style>
