<template>
    <div class="facility">
        <div class="title">
            <img src="/img/facility/形状@2x.png" alt="">
            <span>设备</span>
            <img src="/img/facility/播放器入口 copy 2@3x.png" alt="">
        </div>
        <div class="main">
            <ul>
                <li v-for="(item,index) in main" :key="index"><span :style="{backgroundImage:'url('+item.banner+')'}">{{item.name}}</span></li>
            </ul>
        </div>
        <div class="feature">
            <h3>设备功能</h3>
            <ul>
                <li v-for="(item,index) in feature" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="getVip">
            <div>
                <img src="/img/facility/合并形状 copy 2@2x.png" alt="">
                <span>您是机器人用户，可免费领取会员哦，点击立即领取 ></span>
            </div>
        </div>
        <p class="ambitus">逛逛小智萌趣屋，了解更多周边商品</p>
        <div class="bottomBanner">
            <img src="/img/facility/智伴商城@2x.png" alt="">
        </div>
        <tab-bar></tab-bar>
    </div>
</template>
<script>
import main from "@/static/json/facilityMain.json"
import feature from "@/static/json/facilityFeature.json"
import tabBar from "@/components/tabBar.vue"
export default {
    data(){
        return{
            main,
            feature,
        }
    },
    components:{
        tabBar,
    }
}
</script>
<style scoped>
    .bottomBanner img{
        width:100%;
    }
    .bottomBanner{
        height:227px;
        padding-bottom:19px;
    }
    .ambitus{
        color:#484848;
        font-size:16px;
        padding-left:22px;
        margin-bottom:26px;
    }
    .getVip span{
        color:#C38300;
        font-size:12px;
        margin-left:8px;
        width:100%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .getVip>div{
        display:flex;
        background:linear-gradient(180deg,rgba(255,230,145,1) 0%,rgba(255,218,113,1) 100%);
        border-radius:23px;
        padding:11px 18px ;
    }
    .getVip img{
        width:17px;
        height:18px;
    }
    .getVip{
        padding:0 13px;
        margin-bottom:25px;
    }
    .feature ul{
        display:flex;
        flex-wrap:wrap;
        /* padding:0 14px; */
    }
    .feature li{
        display:flex;
        flex-direction: column;
        align-items: center;
        width:25%;
    }
    .feature li>span{
        font-size:14px;
        color:#585858;
    }
    .feature li>img{
        width:50px;
        height:50px;
    }
    .feature>h3{
        /* font-weight: 500; */
        font-size:18px;
        color:#484848;
        margin-bottom:29px;
    }
    .feature{
        padding:0 20px;
        margin-bottom:24px;
    }
    .main{
        margin-bottom:28px;
    }
    .main>ul>li{
        width:25%;
        display:flex;
        justify-content: center;
    }
    .main{
        padding:0 21px;
    }
    .main ul>li>span{
        width:79px;
        height:63px;
        display:flex;
        justify-content: center;
        align-items: center;
        background-size:100%;
        background-position:center center;
        background-repeat: no-repeat;
        color:white;
    }
    .main >ul{
        display:flex;
        flex-wrap:wrap;
    }
    .title{
        display:flex;
        justify-content:space-between;
        align-items: center;
        padding:14px 17px 0;
        margin-bottom:19px;
    }
    .title>img{
        width:22px;
        height:22px;
    }
    .title>span{
        font-size:17px;
        color:#333333;
    }
</style>
