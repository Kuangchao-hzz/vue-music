<template>
  <div class="recommend">
    <svg width="114" height="114">
      <g fill="none" stroke-width="2">
        <!--<path d="M 0,-100 A 100,100 0 1 0 0,100" stroke="#44c4fa" />-->
        <!--<path d="M 0,100 A 100,100 1 0 0 100,0" stroke="red" />-->
        <path id="circle-path" d="M 55 5, A 50 50 0 0 1 55 105, M 55 105 A 50 50 0 0 1 55 5" stroke="#ddd"></path>
        <circle r="5" fill="#000">
          <animateMotion dur="3s" rotate="auto" repeatCount="indefinite">
            <mpath xlink:href="#circle-path"></mpath>
          </animateMotion>
        </circle>
        <path d="M 55 5, A 50 50 0 1 0 105 55" stroke="#000" transform="rotate(0)" style="transform-origin: 55px 55px 0px;">
          <animateTransform xmlns="http://www.w3.org/2000/svg"
                            attributeType="xml"
                            attributeName="transform"
                            type="rotate" from="0"
                            to="360" begin="0" dur="3s" fill="freeze" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
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
