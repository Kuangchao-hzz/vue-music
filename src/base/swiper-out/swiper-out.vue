<template>
  <div class="car_list_group" ref="carGroup">
    <div class="car__item_cont" ref="carCont"
         @touchstart="touchstart"
         @touchmove="touchmove"
         @touchend="touchend"
         :style="sliderSyl"
    >
      <div class="car__item_title" ref="carTitle">
        <p>111111111</p>
        <p>22222222</p>
      </div>
      <div class="car__item_handle" ref="carHandle">
        <slot name="btn" class="btn"></slot>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        startX: '',
        moveX: '',
        disX: '',
        sliderSyl: ''
      }
    },
    props: {
      color: {
        type: Array,
        defalut: []
      }
    },
    mounted () {
      this._initDomFn()
    },
    computed: {},
    methods: {
      touchstart (ev) {
        ev = ev || event
        if (ev.touches.length === 1) {
          this.startX = ev.touches[0].clientX
        }
      },
      touchmove (ev) {
        ev = ev || event
        if (ev.touches.length === 1) {
          this.moveX = ev.touches[0].clientX
          this.disX = this.startX - this.moveX
          if (this.disX <= 0) {
            this.sliderSyl = `transform:translate3d(0, 0, 0)`
          } else {
            this.sliderSyl = `transform:translate3d(-${this.disX}px, 0, 0)`
            if (this.disX >= this.$refs.carHandle.clientWidth) {
              this.sliderSyl = `transform:translate3d(-${this.$refs.carHandle.clientWidth}px, 0, 0)`
            }
          }
        }
      },
      touchend (ev) {
        ev = ev || event
        let wd = this.$refs.carHandle.clientWidth
        if (ev.changedTouches.length === 1) {
          let endX = ev.changedTouches[0].clientX
          this.disX = this.startX - endX
          if ((this.disX) < (wd / 2)) {
            this.disX = ''
            this.sliderSyl = `transform:translate3d(0px, 0, 0)`
          } else {
            this.disX = wd
            this.sliderSyl = `transform:translate3d(-${wd}px, 0, 0)`
          }
        }
      },
      _initDomFn () {
        let _carGroup = this.$refs.carGroup.clientWidth
        let _carHandle = this.$refs.carHandle.clientWidth
        console.log({dom: this.$refs.carHandle})
        this.$refs.carTitle.style.width = _carGroup + 'px'
        this.$refs.carCont.style.width = _carGroup + _carHandle + 'px'
//        if (this.color.length > 0) {
//          Array.prototype.forEach.call(this.$refs.carHandle.children, (_item, _index) => {
//            _item.style.background = this.color[_index]
//          })
//        }
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  .car_list_group
    overflow hidden
    .car__item_cont
      position relative
      transition: 0.3s
      transform translate3d(0, 0, 0)
      .car__item_title
        display inline-block
        color #333
        padding 15px 0
        background #fff
      .car__item_handle
        height 100%
        vertical-align middle
        position absolute
        right 0
        top 0
        >div
          padding 0 10px
          height 100%
          background red
          color #fff
          display flex
          float left
          align-items center
</style>
