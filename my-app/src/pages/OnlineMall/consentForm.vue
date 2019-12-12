<template>
    <div id="consent-form">
      <div class="fillInfo">
        <div class="infoDetail">
          <label><span>检测条码：</span></label>
          <van-cell-group @click="scanCode">
            <van-field
              v-model="codeValue"
              disabled
              placeholder="点击扫描检测条码">
              <img src="../../assets/img/scan@3x.png" class="searchIcon" slot="right-icon"/>
            </van-field>
          </van-cell-group>
        </div>
        <div class="infoDetail">
          <label><span>送检医院：</span></label>
          <van-cell-group @click="chooseHos">
            <van-field
              v-model="hosValue"
              disabled
              placeholder="请选择送检医院">
              <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
            </van-field>
          </van-cell-group>
          <van-popup v-model="showHos" position="bottom">
            <van-picker
              show-toolbar
              :columns="hosColumns"
              @cancel="showHos = false"
              @confirm="confirmHos"
            ></van-picker>
          </van-popup>
        </div>
        <div class="infoDetail">
          <label><span>送检科室：</span></label>
          <van-cell-group @click="chooseDepart">
            <van-field
              v-model="departValue"
              disabled
              placeholder="请选择送检科室">
              <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
            </van-field>
          </van-cell-group>
          <van-popup v-model="showDepart" position="bottom">
            <van-picker
              show-toolbar
              :columns="departColumns"
              @cancel="showDepart = false"
              @confirm="confirmDepart"
            ></van-picker>
          </van-popup>
        </div>
        <div class="infoDetail">
          <label><span>具体医生：</span></label>
          <van-cell-group @click="chooseDoc">
            <van-field
              v-model="docValue"
              disabled
              placeholder="请选择具体医生">
              <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
            </van-field>
          </van-cell-group>
          <van-popup v-model="showDoc" position="bottom">
            <van-picker
              show-toolbar
              :columns="docColumns"
              @cancel="showDoc = false"
              @confirm="confirmDoc"
            ></van-picker>
          </van-popup>
        </div>
      </div>
      <div class="loginTip">
        <van-checkbox v-model="checked">我已阅读并同意<a @click.stop="lookTxt">《安馨遗传易感基因检测知情通知书》</a>。</van-checkbox>
      </div>
      <div class="nextBtn" @click="nextStep">
        下一步
      </div>
    </div>
</template>

<script>
    export default {
        name: "consentForm",
        data () {
            return {
                codeValue: '', // 条码内容
                hosValue: '', // 送检的医院
                docValue: '', // 选择的医生
                departValue: '', // 选择的科室
                checked: false,
                showHos: false, // 是否展示医院
                showDepart: false, // 是否展示科室
                showDoc: false, // 是否展示医生
                hosColumns: ['中心医院', '省医院', '人民医院'],
                departColumns: ['外科', '内科', '儿科'],
                docColumns: ['张医生', '宋医生', '李医生']
            }
        },
        methods: {
            /* 查看用户须知 */
            lookTxt () {
              alert('查看用户通知书')
            },
            /* 扫描检测码 */
            scanCode () {
              alert('请出示检测码')
            },
            /* 选择送检医院 */
            chooseHos () {
              this.showHos = true
            },
            /* 选择科室 */
            chooseDepart () {
                this.showDepart = true
            },
            /* 选择医生 */
            chooseDoc () {
                this.showDoc = true
            },
            confirmHos (value) {
              this.hosValue = value
              this.showHos = false
            },
            confirmDepart (value) {
                this.departValue = value
                this.showDepart = false
            },
            confirmDoc (value) {
                this.docValue = value
                this.showDoc = false
            },
            /* 下一步 */
            nextStep () {
              this.$router.push('/patientsInfo')
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/variable"
  #consent-form
    height 100%
    width 100%
    background-color $color-background
    .fillInfo
      padding 1rem .3rem 0 .3rem
      .infoDetail
        height .64rem
        display flex
        align-items center
        margin-top .22rem
        label
          font-size 15px
          width 25%
          span
            color $color-font-black-new
            display flex
          span:before
            content '*'
            color $color-font-red
            margin-right .1rem
            padding-top 2px
      .infoDetail:first-of-type
        margin-top 0
      .searchIcon
        height .5rem
        width .5rem
    .loginTip
      font-size 14px
      color $color-font-black-new
      margin-top 1.8rem
      padding 0 1.3rem
      a
        color $color-font-red
    .nextBtn
      height .94rem
      width 100%
      line-height .94rem
      text-align center
      font-size 18px
      color $color-font-white
      background linear-gradient(to right, #fa718b, #e53360)
      position absolute
      bottom 0
    .van-cell-group
      width 75%
      border 1px solid #bcbbbb
      border-radius 6px
    .van-cell
      height .64rem
      line-height .64rem
      border-radius 6px
      padding 0 .3rem
      font-size 13px
      color #bcbbbb
    .van-hairline--top-bottom
      position initial
</style>
