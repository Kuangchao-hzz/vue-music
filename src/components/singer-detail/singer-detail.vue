<template>
  <transition name="slide">
    <musicList :songs="songs" :title="title" :bg-image="bgImage"></musicList>
  </transition>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { getSingerDetail } from 'api/singer'
  import { ERR_OK } from 'api/config'
  import { createSong } from 'common/js/song'
  import MusicList from 'components/music-list/music-list'
  export default {
    created () {
      console.log(this.singer)
      this._getSingerDetail()
    },
    data () {
      return {
        songs: []
      }
    },
    computed: {
      title () {
        return this.singer.name
      },
      bgImage () {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    methods: {
      _getSingerDetail () {
        if (!this.singer.id) {
          this.$router.push({
            path: '/singer'
          })
        }
        getSingerDetail(this.singer.id).then(res => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
          }
        })
      },
      _normalizeSongs (list) {
        let ret = []
        list.forEach(item => {
          let { musicData } = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~common/css/variable"

  .singer-detail
    position fixed
    z-index 100
    top 0
    bottom 0
    left 0
    right 0
    background $color-background
  .slide-enter-active, .slide-leave-active
    transition all .3s
  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
