<template>
    <div id="good-list">
      <div class="classInfo" @click="goDetail">
        <div class="leftContent">
          <img src="../../assets/img/new01.png">
        </div>
        <div class="rightContent">
          <div class="newsTitle">
            <p>安馨-乳腺癌遗传易感基因风险检测</p>
            <label>NGS新一代检测技术/23个易感基因全面覆盖</label>
          </div>
          <div class="newsBottom">
            ￥<p>{{totalPrice}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "goodsList",
        data () {
            return {
                searchValue: '', // 搜索的内容
                totalPrice: '2980',
                classList: [] // 课程列表
            }
        },
        methods: {
            goDetail () {
                this.$router.push('/goodDetail')
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/variable"
  #good-list
    height 100%
    width 100%
    background-color $color-background-grey
    .classInfo
      height 2rem
      background-color $color-background
      margin-top .02rem
      padding 0 .3rem 0 .3rem
      display flex
      align-items center
      .rightContent
        width 70%
        position relative
        height 2rem
        .newsTitle
          margin-top .26rem
          p
            font-size 15px
            color $color-font-black-new
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          label
            font-size 12px
            color $color-font-grey
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
        .newsBottom
          width 100%
          position absolute
          bottom .3rem
          display flex
          align-items center
          font-size 12px
          color $color-font-red
          p
            font-size 16px
      .leftContent
        width 30%
        img
          height 1.6rem
          width 1.6rem
</style>
