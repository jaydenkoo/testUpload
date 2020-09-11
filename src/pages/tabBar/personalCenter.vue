<template>
    <div class="personalCenter">
        <div class="titleIcon">
            <div class="iconLeft"><img src="../../static/img/personalCenter/消息@3x.png" alt=""></div>
            <div class="iconRight"><img src="../../static/img/personalCenter/播放器入口copy2@3x.png" alt=""><img src="../../static/img/personalCenter/播放器入口copy2@3x.png" alt=""></div>
        </div>
        <div class="personalMsg">
            <div class="headImg"></div>
            <div class="personalContent">
                <div class="personalName">小智伴<div class="plusVip">PLUS会员</div></div>
                <div class="personalId">ID:123456789</div>
            </div>
        </div>


        <div class="swiper">
            <swipers :swiperOptions="swiperOption1" :skillsSwiper="personalCenterSwiper">
                <template v-slot:swip="itemData">
                    <div class="swiperContent">
                        <div class="swierImg">
                            <img class="machineImg" src="/img/personalCenter/设备页1S机器人头像@3x.png" alt="">
                            <img class="online" src="/img/personalCenter/在线的框（带字）@3x.png" alt="">
                        </div>
                        <div class="swiperInfo">
                            <div class="machineInfo">
                                <h4>智伴1S机器人-1234</h4>
                                <span>100%</span>
                            </div>
                            <div>
                                <van-slider v-model="value" active-color="#42A6FE">
                                    <div slot="button" class="custom-button">
                                        {{ value }}
                                    </div>
                                </van-slider>
                            </div>
                        </div>
                    </div>
                </template>
            </swipers>
        </div>

        
        <div class="invitation">
            <div class="invitationLeft"><img class="invitationLeftImg" src="../../static/img/personalCenter/icon@3x.png" alt="">
                <div>
                    <div class="invitationFont">邀好友免费体验</div>
                    <div class="invitationFont1">累积你的粉丝</div>
                </div>
            </div>
            <div class="invitationRight">
                <img class="invitationRightImg" src="../../static/img/personalCenter/icon2@3x.png" alt="">
                <div>
                    <div class="invitationFont">邀好友加入会员</div>
                    <div class="invitationFont1">邀会员赚收益</div>
                </div>
            </div>
        </div>
        <div class="bigPlusVip">
            <div class="vipLeftFont"><img class="vipLeftImg" src="../../static/img/personalCenter/合并形状@3x.png" alt="">智伴Plus会员</div>
            <div class="vipRightFont">邀好友，赚收益<img class="vipRightImg" src="../../static/img/personalCenter/分组4@3x.png" alt=""></div>
        </div>
        <div class="list" v-for="(item,index) in personalCenter" :key="index">
            <div class="listNav" v-for="(item1,index) in item" :key="index">
                <div class="listNavLeft">
                    <img class="listNavImg" :src="item1.img" alt="">
                    <span class="leftFont">{{item1.name}}</span>
                </div>
                <div class="listNavRight">
                    <span class="rightFont">{{item1.spare}}</span>
                    <img class="listNavArrow" :src="item1.arrow" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import personalCenter from "@/static/json/personalCenter.json"
import personalCenterSwiper from "@/static/json/personalCenterSwiper.json"
import swipers from '../../components/swipers'
export default {
    data(){
        return{
            personalCenter,
            personalCenterSwiper,
            swiperOption1:{
                spaceBetween: 5,
                slidesPerView: "auto",
                autoplay:true,
                centeredSlides:true,
            },
            value:50,
        }
    },
    components:{
        swipers,
    }
}
</script>
<style scoped>
    .swiper >>> .swiper-slide{
        width:320px;
    }
    .custom-button{
        background:#42A6FE;
        border-radius: 20px;
        font-size:10px;
        color:white;
        width:30px;
        height:20px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .swiperInfo{
        flex:1;
        margin-left:15px;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .machineInfo{
        display:flex;
        align-items: center;
        justify-content:space-between;
    }
    .machineInfo >span{
        color:#9D9D9D;
        font-size:10px;
        margin-left:auto;
        background:url('/img/personalCenter/充电中@3x.png')no-repeat left;
        background-size:17px 9px;
        padding-left:20px;
    }
    .machineInfo>h4{
        color:#616161;
        font-weight: 500;
    }
    .swiperItem{
        width:334px;
        height:113px;
    }
    .swierImg{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .online{
        width:44px;
        height:16px;
    }
    .machineImg{
        width:44px;
        height:45px;
        margin-bottom:11px;
    }
    .swiperContent{
        background:url('/img/personalCenter/设备页设备卡片背景@3x.png')no-repeat;
        background-size:100%;
        padding:20px 20px 20px 20px;
        /* box-sizing: border-box; */
        /* width:100%; */
        display:flex;
    }
    .personalCenter{
        background:url("../../static/img/personalCenter/个人中心头部背景@3x.png")no-repeat;
        background-size: 100%;
        background-position:top center;
        width:100%;
        background-color:#F3F2F2;
    }
    .titleIcon{
        display:flex;
        padding:21px 16px 0;
        justify-content: space-between;
    }
    .iconLeft img,.iconRight img{
        width:15px;
        height:18px;
    }
    .iconRight img{
        margin-left:15px;
    }

    .headImg{
        width:48px;
        height:48px;
        border-radius: 50%;
        background:black;
        margin-right:8px;  
    }
    .personalMsg{
        padding:17px 0 17px 29px;
        display:flex;
    }
    .personalName{
        font-size:20px;
        display:flex;
        height:28px;
        
    }
    .personalContent{
        color:white;
    }
    .plusVip{
        background:url('../../static/img/personalCenter/分组2@3x.png')no-repeat;
        background-size: 100%;
        background-position:center center;
        width:63px;
        margin-left:8px;
        color:#C38300;
        font-size:12px;
        display:flex;
        justify-content:center;
        align-items: center;
    }
    .bigPlusVip{
        height:48px;
        margin:12px 16px 0;
        display:flex;
        padding:0 15px;
        background:linear-gradient(270deg,rgba(255,230,145,1) 0%,rgba(255,218,113,1) 100%);
        border-radius:8px 8px 0px 0px;
        align-items: center;
        justify-content:space-between;
    }
    .vipLeftImg{
        width:14px;
        height:14px;
        margin-right:5px;
    }
    .vipLeftFont{
        color:#C38300;
        font-size:16px;
    }
    .vipRightImg{
        width:14px;
        height:14px;
        margin-left:5px;
        vertical-align:top;
    }
    .vipRightFont{
        font-size:12px;
        color:#C38300;
    }
    .invitation{
        padding:16px;
        display:flex;
        justify-content: space-between;
    }
    .invitationLeft,.invitationRight{
        display:flex;
        height:48px;
        padding:9px 15px 9px 5px;
        background:white;
        align-items: center;
        border-radius:8px;
        box-shadow:0px 0px 8px 0px rgba(121,121,121,0.3);
    }
    .invitationLeftImg,.invitationRightImg{
        width:36px;
        height:30px;
        margin-right:6px;
    }
    .invitationFont{
        font-size:14px;
        color:#C38300;
        font-weight:Bold;
        height:20px;
        line-height:20px;
    }
    .invitationFont1{
        font-size:12px;
        color:#5B5B5B;
        height:17px;
        line-height:17px;
    }
    .list{
        padding:0 17px;
        background:white;
    }
    .listNavImg{
        width:18px;
        height:18px;
        padding-right:7px;
    }
    .listNavArrow{
        width:7px;
        height:13px;
    }
    .listNav{
        display:flex;
        justify-content: space-between;
        align-items: center;
        height:52px;
        margin-bottom:8px;
    }
    .leftFont{
        color:#5B5B5B;
        font-size:14px;
    }
    .rightFont{
        color:#B3B3B3;
        font-size:12px;
        margin-right:12px;
    }
    .listNavLeft,.listNavRight{
        display:flex;
        align-items: center;
    }
    h1,h2,h3,h4,h5,h6,p{
        margin:0;
    }
</style>