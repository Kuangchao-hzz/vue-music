<template>
  <div class="singer">
    <listView :data="singers" @select="selectSinger"></listView>
    <router-view></router-view>
  </div>
</template>
<script>
  import ListView from 'base/listView/listView'
  import { getSingerList } from 'api/singer'
  import { ERR_OK } from 'api/config'
  import Singer from 'common/js/singer'
  import { mapMutations } from 'vuex'

  const HOT_NAME = '热'
  const HOT_NAME_LEN = 10
  export default {
    data () {
      return {
        singers: []
      }
    },
    computed: {},
    mounted () {
      setTimeout(() => {
        this._getSingerList()
      }, 20)
    },
    methods: {
      selectSinger (singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        this.setSinger(singer)
      },
      _getSingerList () {
        getSingerList().then(res => {
          if (res.code === ERR_OK) {
            console.log(res)
            this.singers = this._normalizeSinger(res.data.list)
          }
        })
      },
      _normalizeSinger (list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_NAME_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
          let key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }

          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        })
        // 排序数据
        let hot = []
        let ret = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(map[key])
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      })
    },
    components: {
      ListView
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/css/variable"

  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
