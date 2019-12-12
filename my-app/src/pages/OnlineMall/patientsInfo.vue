<template>
  <div id="patient-info">
    <div class="stepInfo">
      <van-steps :active="active" active-color="#e2416a">
        <van-step>受检者信息</van-step>
        <van-step>家族史</van-step>
        <van-step>发票信息</van-step>
      </van-steps>
    </div>
    <div class="patientInfo" v-if="active === 0">
      <div class="patientDetail patientName">
        <label><span>姓名：</span></label>
        <van-cell-group>
          <van-field
            v-model="patientName"
            placeholder="请填写受检者姓名">
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail patientSex">
        <label><span>性别：</span></label>
        <van-radio-group v-model="sexRadio" icon-size="20">
          <van-radio name="0" checked-color="#e95790">男</van-radio>
          <van-radio name="1" checked-color="#e95790">女</van-radio>
        </van-radio-group>
      </div>
      <div class="patientDetail patientNational">
        <label><span>民族：</span></label>
        <van-cell-group>
          <van-field
            v-model="patientNational"
            placeholder="请填写受检者民族">
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail patientAge">
        <label><span>年龄：</span></label>
        <van-cell-group>
          <van-field
            v-model="patientAge"
            placeholder="请选择">
            <img src="../../assets/img/date@3x.png" class="searchIcon" slot="right-icon"/>
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail certificateType">
        <label><span>证件类型：</span></label>
        <van-cell-group>
          <van-field
            v-model="certificateType"
            placeholder="身份证">
            <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail idCard">
        <label><span>证件号：</span></label>
        <van-cell-group>
          <van-field
            v-model="idCard"
            placeholder="请填写证件号">
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail homePosition">
        <label><span>家庭住址：</span></label>
        <van-cell-group>
          <van-field
            v-model="homeProvince"
            placeholder="省">
            <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="homeCity"
            placeholder="市">
            <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="homeArea"
            placeholder="区">
            <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail localDetail">
        <van-cell-group>
          <van-field
            v-model="localDetail"
            placeholder="请填写详细地址">
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail receivePerson">
        <label><span>报告接收人：</span></label>
        <van-cell-group>
          <van-field
            v-model="receivePerson"
            placeholder="请填写报告接收人姓名">
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail receivePhone">
        <label><span>报告接收人联系电话：</span></label>
        <van-cell-group>
          <van-field
            v-model="receivePhone"
            placeholder="请填写报告接收人联系电话">
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail relation">
        <label><span>申请人与受检者关系：</span></label>
        <van-cell-group>
          <van-field
            v-model="relation"
            placeholder="请填写与受检者关系">
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail receivePosition">
        <label><span>报告接收地址：</span></label>
        <van-cell-group>
          <van-field
            v-model="receiveProvince"
            placeholder="省">
            <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="receiveCity"
            placeholder="市">
            <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
          </van-field>
        </van-cell-group>
      </div>
      <div class="patientDetail receDetail">
        <van-cell-group id="receArea">
          <van-field
            v-model="receiveArea"
            placeholder="区">
            <img src="../../assets/img/Drop-down@3x.png" class="searchIcon" slot="right-icon"/>
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="localDetail"
            placeholder="请填写详细地址">
          </van-field>
        </van-cell-group>
      </div>
    </div>
    <div class="familyHistory" v-if="active === 1">
      <div class="breastCancer">
        <label><span>是否有乳腺癌/卵巢癌家族史：</span></label>
        <van-radio-group v-model="isHaveCancer" icon-size="20" id="hasCancer">
          <van-radio name="0" checked-color="#e95790">有</van-radio>
          <van-radio name="1" checked-color="#e95790">无</van-radio>
          <van-radio name="2" checked-color="#e95790">未知</van-radio>
        </van-radio-group>
      </div>
      <div class="addCancerInfo">
        <label>添加患病亲属信息</label>
        <img src="../../assets/img/Add@3x.png">
      </div>
      <div class="cancerDetail">
        <div class="qsInfo">
          <label>亲属：</label>
          <P>奶奶;</P>
        </div>
        <div class="cancerType">
          <label>肿瘤类型：</label>
          <P>乳腺癌;</P>
        </div>
        <div class="disAge">
          <label>患病年龄</label>
          <P>56岁</P>
        </div>
        <img src="../../assets/img/del@3x.png">
      </div>
      <div class="otherCancer">
        <label><span>是否有其他肿瘤家族史：</span></label>
        <van-radio-group v-model="isOtherCancer" icon-size="20" id="hasCancer">
          <van-radio name="0" checked-color="#e95790">有</van-radio>
          <van-radio name="1" checked-color="#e95790">无</van-radio>
          <van-radio name="2" checked-color="#e95790">未知</van-radio>
        </van-radio-group>
      </div>
      <div class="addCancerInfo">
        <label>添加患病亲属信息</label>
        <img src="../../assets/img/Add@3x.png">
      </div>
      <div class="cancerDetail">
        <div class="qsInfo">
          <label>亲属：</label>
          <P>奶奶;</P>
        </div>
        <div class="cancerType">
          <label>肿瘤类型：</label>
          <P>乳腺癌;</P>
        </div>
        <div class="disAge">
          <label>患病年龄</label>
          <P>56岁</P>
        </div>
        <img src="../../assets/img/del@3x.png">
      </div>
      <div class="breastDisInfo">
        <label><span>是否已患有乳腺相关疾病：</span></label>
        <van-radio-group v-model="isbreastDis" icon-size="20" id="hasCancer">
          <van-radio name="0" checked-color="#e95790">有</van-radio>
          <van-radio name="1" checked-color="#e95790">无</van-radio>
          <van-radio name="2" checked-color="#e95790">未知</van-radio>
        </van-radio-group>
      </div>
      <div class="addCancerInfo">
        <label>添加疾病类型</label>
        <img src="../../assets/img/Add@3x.png">
      </div>
      <div class="cancerDetail">
        <div class="qsInfo">
          <label>疾病类型：</label>
          <P>卵巢癌</P>
        </div>
        <img src="../../assets/img/del@3x.png">
      </div>
    </div>
    <div class="patientBtn">
      <div class="upBtn" @click="goUp">
        上一步
      </div>
      <div class="nextBtn" @click="goNext">
        下一步
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "patientsInfo",
        data () {
            return {
                active: 0,
                patientName: '', // 受检者姓名
                sexRadio:'', // 受检者性别
                patientNational: '', // 受检者民族
                patientAge: '', // 受检者年龄
                certificateType: '', // 证件类型
                idCard: '', // 证件号码
                homeProvince: '', // 省
                homeCity: '', // 市
                homeArea: '', // 区
                receiveProvince: '', // 省
                receiveCity: '', // 市
                receiveArea: '', // 区
                localDetail: '', // 详细地址
                receivePerson: '', // 接收人姓名
                receivePhone: '', // 接收人电话
                relation: '', // 受检者关系
                isHaveCancer: '', // 是否有卵巢癌家族史
                isOtherCancer: '', // 是否有其他肿瘤家族史
                isbreastDis: '', // 是否乳腺相关疾病
            }
        },
        mounted() {
        },
        methods: {
            /* 上一页 */
            goUp () {
                if (this.active === 0) {
                    this.$router.push('/consentForm')
                } else if (this.active === 1) {
                    this.active = 0
                } else if (this.active === 2) {
                    this.active = 1
                }
            },
            /* 下一页 */
            goNext () {
                if (this.active === 0) {
                    this.active = 1
                } else if (this.active === 1) {
                    this.active = 2
                } else if (this.active === 2) {
                    alert('最后一页啦')
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/variable"
  #patient-info
    height 100%
    width 100%
    background-color $color-background-grey
    .stepInfo
      height 1.6rem
      background-color $color-background
      padding 0 1rem
      display flex
      align-items center
    .patientInfo
      margin-top .22rem
      margin-bottom .94rem
      padding 0 .3rem .4rem .3rem
      background-color $color-background
      .patientDetail
        display flex
        align-items center
        font-size 15px
      .patientName
        padding-top .5rem
      .patientSex
        margin-top .3rem
      .patientNational
        margin-top .3rem
      .patientAge
        margin-top .22rem
        .searchIcon
          height .5rem
          width .5rem
      .certificateType
        margin-top .22rem
        .searchIcon
          height .5rem
          width .5rem
        label
          display block
          width 40%
      .idCard
        margin-top .22rem
        label
          display block
          width 30%
      .homePosition
        margin-top .22rem
        .searchIcon
          height .5rem
          width .5rem
        label
          display block
          width 100%
      .localDetail
        margin-top .22rem
      .receivePerson
        margin-top .22rem
        label
          display block
          width 40%
      .receivePhone
        margin-top .22rem
        label
          display block
          width 80%
      .relation
        margin-top .22rem
        label
          display block
          width 80%
      .receivePosition
        margin-top .22rem
        .searchIcon
          height .5rem
          width .5rem
        label
          display block
          width 100%
      .receDetail
        margin-top .22rem
        #receArea
          width 30%
        .searchIcon
          height .5rem
          width .5rem
      label
        font-size 15px
        width 20%
        display block
        span
          color $color-font-black-new
          display flex
        span:before
          content '*'
          color $color-font-red
          margin-right .1rem
          padding-top 2px
    .familyHistory
      margin-top .22rem
      margin-bottom .94rem
      .breastCancer
        font-size 15px
        padding .7rem .3rem
        border-bottom 2px solid #ededed
        background-color $color-background
        #hasCancer
          margin-top .3rem
        .van-hairline--top-bottom
          position initial
          margin-right 0
      .addCancerInfo
        height .8rem
        display flex
        align-items center
        background-color $color-background
        position relative
        label
          display block
          padding-left .56rem
        img
          height .5rem
          width .5rem
          position absolute
          right .3rem
      .cancerDetail
        height .7rem
        display flex
        align-items center
        font-size 12px
        color $color-font-grey
        border-top 2px solid #ededed
        background-color $color-background
        position relative
        div
          display flex
          align-items center
          label
            font-size 12px
        .qsInfo
          padding-left .56rem
        .cancerType
          padding-left .2rem
        .disAge
          padding-left .2rem
        img
          height .5rem
          width .5rem
          position absolute
          right .3rem
      .otherCancer
        font-size 15px
        padding .7rem .3rem
        margin-top .2rem
        border-bottom 2px solid #ededed
        background-color $color-background
        #hasCancer
          margin-top .3rem
        .van-hairline--top-bottom
          position initial
          margin-right 0
      .breastDisInfo
        font-size 15px
        padding .7rem .3rem
        margin-top .2rem
        border-bottom 2px solid #ededed
        background-color $color-background
        #hasCancer
          margin-top .3rem
        .van-hairline--top-bottom
          position initial
          margin-right 0
      label
        font-size 15px
        display block
        span
          color $color-font-black-new
          display flex
        span:before
          content '*'
          color $color-font-red
          margin-right .1rem
          padding-top 2px
    .patientBtn
      display flex
      width 100%
      position absolute
      bottom 0
      div
        height .94rem
        width 100%
        line-height .94rem
        text-align center
        font-size 18px
        color $color-font-white
      .upBtn
        background-color $color-font-grey-new
      .nextBtn
        background linear-gradient(to right, #fa718b, #e53360)
    .van-cell-group
      width -webkit-fill-available
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
      margin-right .2rem
    .van-hairline--top-bottom:last-of-type
      margin-right 0
</style>
