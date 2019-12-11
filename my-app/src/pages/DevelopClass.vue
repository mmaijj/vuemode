<template>
    <div id="develop_class">
      <div class="searchTitle">
        <van-cell-group>
          <van-field
            v-model="searchValue"
            clearable
            placeholder="输入关键词搜索文章">
            <img src="../assets/img/search@3x.png" class="searchIcon" slot="left-icon"/>
          </van-field>
        </van-cell-group>
        <span class="searchText" @click="searchClass">搜索</span>
      </div>
      <div class="classContent">
        <div class="classInfo">
          <div class="leftContent">
            <img src="../assets/img/new01.png">
          </div>
          <div class="rightContent">
            <div class="newsTitle">
              <p>奥希替尼使含有EGFR H773L//V774M突变复合物的晚期非小细胞</p>
            </div>
            <div class="newsBottom">
              <span>肺癌</span>
              <span>奥希替尼</span>
              <label>2019.09.02</label>
            </div>
          </div>
        </div>
        <div class="classInfo">
          <div class="leftContent">
            <img src="../assets/img/news02.png">
          </div>
          <div class="rightContent">
            <div class="newsTitle">
              <p>派姆单抗联合化疗治疗转移性非小细胞癌症</p>
            </div>
            <div class="newsBottom">
              <span>肺癌</span>
              <span>派姆单抗</span>
              <label>2019.09.01</label>
            </div>
          </div>
        </div>
        <div class="classInfo">
          <div class="leftContent">
            <img src="../assets/img/new01.png">
          </div>
          <div class="rightContent">
            <div class="newsTitle">
              <p>BRCA筛查预测乳腺癌</p>
            </div>
            <div class="newsBottom">
              <span>肺癌</span>
              <label>2019.09.02</label>
            </div>
          </div>
        </div>
        <div class="classInfo">
          <div class="leftContent">
            <img src="../assets/img/new01.png">
          </div>
          <div class="rightContent">
            <div class="newsTitle">
              <p>BRCA筛查预测乳腺癌</p>
            </div>
            <div class="newsBottom">
              <span>肺癌</span>
              <label>2019.09.02</label>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DevelopClass",
        data () {
            return {
                searchValue: '', // 搜索的内容
                classList: [] // 课程列表
            }
        },
        methods: {
            searchClass () {
                let val = this.searchValue
                console.log('搜索的内容' + val)
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/variable"
  #develop_class
    height 100%
    width 100%
    background-color $color-background-grey
    .searchTitle
      height 1rem
      background-color $color-background
      display flex
      align-items center
      padding 0 .3rem
      position relative
      .searchIcon
        height .5rem
        width .5rem
      .searchText
        display block
        font-size 15px
        color $color-font-black
        position absolute
        right .4rem
    .classContent
      margin-top .1rem
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
            margin-top .28rem
            font-size 17px
            p
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              overflow hidden
          .newsBottom
            width 100%
            display flex
            position absolute
            align-items center
            bottom .28rem
            span
              height .4rem
              line-height .4rem
              font-size 12px
              text-align center
              background-color #79bfff
              color #ffffff
              border-radius 6px
              margin-left .1rem
              padding 0 .1rem
            span:first-of-type
              margin-left 0
            label
              font-size 12px
              color $color-font-grey
              position absolute
              right 0
        .leftContent
          width 30%
          img
            height 1.6rem
            width 1.6rem
    .van-cell-group
      width 6rem
    .van-cell
      height .66rem
      line-height .66rem
      border-radius 22px
      padding 0 .3rem
      background-color $color-background-grey
      font-size 13px
      color rgb(102, 102, 102)
    .van-hairline--top-bottom
      position initial
</style>
