<template>
    <div id="good-detail">
      <div class="bannerClass">
        <van-swipe :autoplay="3000">
          <van-swipe-item>
            <img src="../../assets/img/object@3x.png">
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/object@3x.png">
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/object@3x.png">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="classDetail">
        <p class="classPrice">￥<span>{{totalPrice}}</span></p>
        <p class="classTitle">{{classTitle}}</p>
        <div class="tagDetail">
          <div class="classTag">
            <div></div>
            <p>早筛查，早安心</p>
          </div>
          <div class="classTag">
            <div></div>
            <p>NGS新一代检测技术/23个易感基因全面覆盖</p>
          </div>
        </div>
      </div>
      <div class="detailImg">
        这里是长图
      </div>
      <div class="buyBtn" @click="goBuy">
        立即购买
      </div>
    </div>
</template>

<script>
    export default {
        name: "goodDetail",
        data () {
            return {
                totalPrice: '2980', // 课程价格
                classTitle: '安馨-乳腺癌遗传易感基因风险检测', // 课程名称
            }
        },
        mounted() {
        },
        methods: {
            /* 立即购买 */
            goBuy () {
                this.$router.push('/consentForm')
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/variable"
  #good-detail
    height 100%
    width 100%
    background-color $color-background-grey
    .bannerClass
      height 7.5rem
      img
        height 7.5rem
        width 100%
    .classDetail
      height 2.5rem
      background-color $color-background
      padding .3rem
      .classPrice
        font-size 15px
        color $color-font-red
        span
          font-size 25px
      .classTitle
        font-size 17px
        color $color-font-black-new
        margin-top .3rem
      .tagDetail
        margin-top .3rem
        .classTag
          display flex
          align-items center
          margin-top .1rem
          div
            height .1rem
            width .1rem
            background-color $color-background-point
            border-radius 50%
          p
            font-size 12px
            color $color-font-grey
            margin-left .1rem
        .classTag:first-of-type
          margin-top 0
    .detailImg
      margin-top .24rem
    .buyBtn
      height .94rem
      width 100%
      line-height .94rem
      text-align center
      font-size 18px
      color $color-font-white
      background linear-gradient(to right, #fa718b, #e53360)
      position absolute
      bottom 0
</style>
