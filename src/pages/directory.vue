<template>
    <div class="directory">
        <div class="titleBanner"><img src="/img/directory/titleBanner.png" alt=""></div>
        <div class="list">
            <h4 v-for="(item,index) in list" :key="index" @click="listColor(index)" :class="{listActive:listImg==index}">{{item.name}} <img v-if="listImg==index" src="/img/directory/line.png"> </h4>
        </div>
        <div class="content">
            <div class="contentList" v-if="listImg==0">
                <div class="titlePart">
                    <h2 class="contentTitle">家长指引</h2>
                    <p>这是一些家长指引简介,这里三行以内,超出部分用…<br>一到晚上,安装在城市草坪上的地灯就亮起来,与附近的霓虹灯交相辉映,成为一道流光溢彩的风景线。</p>
                    <img src="/img/directory/图层 2.png" alt="">
                </div>
                <div class="month">
                    <h2 class="contentTitle">本月优学</h2>
                    <div class="songList">
                        <ul>
                            <li v-for="(monthItem,index) in month" :key="index">
                                <img :src="monthItem.img" alt="">
                                <div class="songName">
                                    <div>
                                        <h4>{{monthItem.title}}</h4>
                                        <span v-if="monthItem.testSong">{{monthItem.testSong}}</span>
                                    </div>
                                    <p>{{monthItem.lable}}</p>
                                </div>
                                <i></i>
                            </li>
                        </ul>
                    </div>
                    <div class="moreStory">查看更多故事~</div>
                </div>
                <div class="intro">
                    <h2 class="contentTitle">使用说明</h2>
                    <p>1.这里是一些简介…<br>2.一到晚上,安装在城市草坪上的地灯就亮起来,与附近的霓虹灯交相辉映,成为一道流光溢彩的风景线。一只萤火虫 <br>3.立即遭到地灯的嘲笑:哈哈哈啊</p>
                </div>
            </div>
            <div class="catalog" v-if="listImg==1">
                <ul>
                    <li v-for="(catalogItem,index) in catalog" :key="index">
                        <h2>{{catalogItem.title}}</h2>
                        <img src="/img/directory/合并形状 copy 3@2x.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="buy" v-if="listImg==0">
            <div class="test"><img src="/img/directory/分组 5 copy 2@2x.png" alt="">试听</div>
            <div class="price">购买: 100<span>智豆</span></div>
        </div>
        <div class="share" v-if="listImg==1">分享赚收益</div>
    </div>
</template>
<script>
import list from "@/static/json/directoryList.json"
import month from "@/static/json/directoryMonth.json"
import catalog from "@/static/json/directoryCatalog.json"
export default {
    data(){
        return{
            list,
            month,
            catalog,
            listImg:0,
        }
    },
    methods: {
        listColor(index){
            this.listImg=index;
        },

    },
}
</script>
<style scoped>
    .share{
        color:#5292FF;
        background:white;
        display:flex;
        justify-content: center;
        align-items: center;
        height:52px;
    }
    .catalog li>h2{
        color:#333333;
        font-size:20px;
    }
    .catalog li>img{
        width:13px;
        height:7px;
    }
    .catalog li{
        display:flex;
        justify-content:space-between;
        align-items: center;
        height:64px;
        border-bottom:1px solid rgba(240,254,255,1);
    }
    .price>span{
        font-size:12px;
        font-weight: 400;
    }
    .price{
        background:#5292FF;
        color:white;
        font-size:16px;
        /* font-weight: bold; */
    }
    .test{
        color:#5292FF;
        font-size:16px;
        /* font-weight:bold; */
    }
    .buy{
        height:52px;
        width:100%;
        display:flex;
    }
    .buy>div{
        display:flex;
        flex:1;
        justify-content: center;
        align-items: center;
    }
    .test img{
        width:22px;
        height:22px;
        margin-right:7px;
    }
    .buy{
        display:flex;

    }
    .intro>p{
        font-size:12px;
        color:#666666;
    }
    .month{
        margin-bottom:20px;
    }
    .moreStory{
        color:#3F8DFD;
        font-size:12px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin:0 auto;
        width:112px;
        height:24px;
        background:rgba(235,243,254,1);
        border-radius:12px;
    }
    .moreStory:after{
        background:url('/img/directory/分组 4@2x.png')no-repeat;
        width:14px;
        height:14px;
        background-size:100%;
        content:'';
        display:inline-block;
        margin-left:3px;
    }
    .songName>div{
        display:flex;
        align-items: center;
    }
    .songName{
        margin-left:12px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .songName>p{
        font-size:12px;
        color:#999999;
    }
    .songList li>img{
        width:24px;
        height:24px;
    }
    .songList i{
        background:url('/img/directory/more.png')no-repeat;
        background-size:100%;
        width:13px;
        height:4px;
        margin-left:auto;
    }
    .songList li:nth-child(3){
        border:none;
    }
    .songList li{
        display:flex;
        align-items: center;
        padding-bottom:12px;
        margin-bottom:12px;
        border-bottom:1px solid rgb(240,254,255)
    }
    .songName span{
        font-size:12px;
        color:#3F8DFD;
        background:rgb(235,243,245);
        border-radius: 6px;
        padding:3px 8px;
        margin-left:9px;
        font-weight: 500;
    }
    .songName h4{
        color:#666666;
        margin-bottom:3px;
        display:flex;
    }
    .month>h2{
        font-size:20px;
        color:#333333;
    }
    .titlePart>img{
        width:100%;
    }
    .titlePart>p{
        display:flex;
        flex-wrap: wrap;
        color:#666666;
        font-size:12px;
        margin-bottom:20px;
    }
    .contentTitle{
        color:#333333;
        font-size:20px;
        margin-bottom:16px;
    }
    .titlePart{
        margin-bottom:20px;
    }
    .contentList,.catalog{
        padding:16px 20px 22px;
        background:white;
    }
    .content{
        padding:17px 15px 20px;
        background:rgba(240,254,255,1);
    }
    .listActive{
        color:#3F8DFD !important;
    }
    .list{
        display:flex;
    }
    .list>h4{
        font-weight: 500;
        color:#999999;
        flex:1;
        justify-content: center;
        display:flex;
        height:45px;
        align-items: center;
        position:relative;
    }
    .list img{
        width:20px;
        height:4px;
        position: absolute;
        bottom:0;
    }
    .titleBanner{
        width:100%;
        height:185px;
    }
    .titleBanner>img{
        width:100%;
    }
    h1,h2,h3,h4,h5,h6,p{
        margin:0;
    }
    .directory{
        font-family:PingFang-SC-Bold;
    }
</style>
