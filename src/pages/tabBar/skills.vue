<template>
    <div class="skills">

        <div class="headTitle">
            <i></i>
            <span>技能</span>
            <div class="headImg"><img src="../../../public/img/skills/播放器入口 copy 2@3x.png" alt=""></div>
        </div>

        <div class="skillsSwiper">
            <swipers :swiperOptions="swiperOption1" :skillsSwiper="skillsSwiper" class="swiperList">
                <template v-slot:swip="itemData">
                    <img :src="itemData.data.img"  class="swiperImg" alt="">
                </template>
            </swipers>
        </div>

        <div class="nav">
            <ul>
                <li v-for="(item,index) in nav" :key="index"><img :src="item.img" alt=""><span>{{item.font}}</span></li>
            </ul>
        </div>

        <div class="bigline"></div>

        <div class="select">
            <div class="selectTitle">
                <h2>每周精选</h2>
                <span>更多</span>
            </div>
            <ul class="selectList">
                <li v-for="(item,index) in select" :key="index">
                    <div class="selectImg"><img :src="item.img" alt=""></div>    
                    <div class="selectFont">
                        <div class="fontTop">
                            <h4>{{item.title}}</h4>
                            <span>{{item.content}}</span>
                        </div>
                        <span :style="{background:item.lableBg}">{{item.lable}}</span>
                    </div>
                    <div class="lookBtn">
                        <span class="look">{{item.look}}</span>
                    </div>
                </li> 
            </ul>
        </div>

        <div class="bigline"></div>

        <div class="recommend">
            <div class="selectTitle recommendTitle">
                <h2>每周精选</h2>
                <span>更多</span>
            </div>
            <ul class="recommendList">
                <li class="recommendContent" v-for="(item,index) in recommend" :key="index" :style="{backgroundImage:'url('+item.bg+')'}">
                    <div class="recommenFont">
                        <img :src="item.img" alt="">
                        <h4>{{item.title}}</h4>
                        <span>{{item.content}}</span>
                    </div>
                    <div class="recommendBottom">
                        <p :style="{color:item.lableColor}">{{item.lable}}</p>
                        <span>{{item.zib}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <tab-bar></tab-bar>
    </div>
</template>
<script>
import swipers from "../../components/swipers.vue"
import skillsSwiper from "../../static/json/skillsSwiper.json"
import nav from "../../static/json/skillsNav.json"
import select from "../../static/json/skillsSelect.json"
import recommend from "../../static/json/skillsRecommend.json"
import tabBar from "../../components/tabBar"
export default {
    data() {
        return {
            recommend,
            skillsSwiper,
            nav,
            select,
            swiperOption1:{
                // spaceBetween: 10,
                slidesPerView: "auto",
                autoplay:true,
                centeredSlides:true,
            }
        }
    },
    components:{
        swipers,
        tabBar,
    }
}
</script>
<style scoped>
    .skillsSwiper >>> .swiper-slide {
        -webkit-transition: transform 1.0s !important;
        -moz-transition: transform 1.0s !important;
        -ms-transition: transform 1.0s !important;
        -o-transition: transform 1.0s !important;
        -webkit-transform: scale(0.8) !important;
        transform: scale(0.8) !important;
        /* padding:0 50px; */
        width:270px !important;
        /* box-sizing: border-box !important; */
}
    .skillsSwiper >>> .swiper-slide-active,.swiper-slide-duplicate-active {
        -webkit-transform: scale(0.9) !important;
        transform: scale(1) !important;
    }
    .recommendBottom>span{
        color:white;
        font-size:12px;
    }
    .recommendBottom{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .recommendBottom>p{
        background:rgba(255,255,255,1);
        border-radius:4px;
        border:1px solid rgba(255,255,255,1);
        padding:1px 4px;
        color:#1598FE;
        font-size:12px;
    }
    .recommenFont>span{
        color:white;
        font-size:12px;
    }
    .recommenFont>h4{
        font-weight:500;
        color:white;
        margin-bottom:3px;
    }
    .recommenFont>img{
        width:11px;
        height:9px;
        margin-bottom:3px;
    }
    .recommenFont{
        display:flex;
        flex-direction: column;
    }
    .recommendContent{
        background-size:100%;
        background-repeat: no-repeat;
        width: 168px;
        height:100px;
        padding:10px;
        box-sizing: border-box;
        display:flex;
        justify-content: space-between;
        flex-direction: column;
        margin-bottom:10px;
    }
    .recommendList{
        display:flex;
        justify-content: space-around;
        flex-wrap:wrap;
    }
    .recommend{
        padding:0 15px;
    }
    .lookBtn{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .look{
        width:50px;
        height:24px;
        background:rgba(255,255,255,1);
        border-radius:4px;
        border:1px solid rgba(231,231,231,1);
        font-size:12px;
        color:#B3B3B3;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .selectFont>span{
        font-size:12px;
        width:40px;
        background:rgba(140,90,252,1);
        border-radius:4px;
        color:white;
        display:flex;
        align-items: center;
        justify-content: center;
        padding:3px 0;
    }
    .selectFont{
        display:flex;
        justify-content:space-between;
        flex-direction: column;
    }
    .fontTop>span{
        font-size:12px;
        color:#B3B3B3;
    }
    .selectList>li{
        display:flex;
        justify-content: space-between;
        /* align-items: center; */
        margin-bottom:13px;
    }
    .selectImg img{
        width:60px;
        height:auto;
    }
    .selectImg{
        width:80px;
        height:80px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 8px 0px rgba(121,121,121,0.2);
        border-radius:8px;
        display:flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
    .selectTitle>span{
        background:url('../../../public/img/skills/进入 (1)@3x.png')no-repeat right center;
        background-size:11px 11px;
        font-size:15px;
        padding-right:15px;
        color:#232524;
        font-weight:500;
    }
    .selectTitle>h2{
        font-size:20px;
    }
    .selectTitle{
        margin-bottom:10px;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .select{
        padding:0 15px;
    }
    .bigline{
        height:10px;
        width:100%;
        margin:10px 0;
        background:#F4F5F7;
    }
    .nav li>img{
        width:38px;
        height:38px;
        margin-bottom:11px;
    }
    .nav li>span{
        font-size:12px;
        color:#5B5B5B;
        font-weight: 500;
    }
    .nav ul{
        display:flex;
        justify-content: space-between;
        padding:0 15px;
    }
    .nav li{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .skillsSwiper{
        padding-bottom:18px;
    }
    .swiperImg{
        width:100%;
    }
    .headTitle{
        display:flex;
        padding:14px 16px 21px 16px;
    }
    .headTitle>*{
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:5.3vw;
        color:#333333;
        font-weight: 500;
    }
    .headImg{
        display:flex;
    }
    .headImg>img{
        width:16px;
        height:18px;
        margin-left:auto;
    }
    h1,h2,h3,h4,h5,h6,p{
        margin:0;
    }
    .skills{
        font-family:PingFang-SC-Medium;
    }
</style>