<template>
  <div id="user-login"></div>
</template>

<script>
    import common from 'assets/js/common'
    import {Dialog, Toast} from 'vant'
    export default {
        name: "userLogin",
        mixins: [common],
        data () {
            return {
            }
        },
        computed: {
        },
        watch: {
        },
        mounted () {
        },
        methods: {
        },
        components: {
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable"
  #user-login
    height 100%
    background-color $color-background
</style>
