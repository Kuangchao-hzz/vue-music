<template>
  <div id="app">
    <MHeader></MHeader>
    <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'app',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "common/css/variable.styl"
</style>
