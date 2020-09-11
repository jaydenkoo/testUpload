<template>
    <div class="recommend">
        <div class=search>
            <div>
                <input type="text">
                <img src="/img/recommend/search.png" alt="">
            </div>
            <img src="/img/recommend/图层 5.png" alt="">
        </div>
        <div class="title">
            <span :class="{activeColor:titleActive==index}" v-for="(item,index) in title" :key="index" @click="titleColor(index)">{{item.name}}<img v-if="titleActive==index" src="/img/recommend/矩形@2x.png" alt=""></span>
        </div>
        <div class="titleBanner">
            <img src="/img/recommend/图层 2.png" alt="">
        </div>
        <div class="titleLable">
            <ul>
                <li v-for="(item,index) in titleLable" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="centerBanner">
            <i class="bigLine"></i>
            <img src="/img/recommend/未标题-1@2x.png" alt="">
            <i class="bigLine"></i>
        </div>
        <div class="nominate">
            <div class="titleBar">
                <h1>推荐内容</h1>
                <span>更多</span>
            </div>
            <div class="nominateList">
                <ul>
                    <li v-for="(item,index) in nominate" :key="index">
                        <img :src="item.img" alt="">
                        <h4>{{item.title}}</h4>
                        <span>{{item.lable}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <i class="bigLine"></i>
        <div class="select">
            <div class="titleBar">
                <h1>精选专题</h1>
                <span>更多</span>
            </div>
            <div class="selectList">
                <ul>
                    <li v-for="(item,index) in select" :key="index">
                        <img :src="item.img" alt="">
                        <h4>{{item.title}}</h4>
                        <span>{{item.lable}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <i class="bigLine"></i>
        <div class="brand">
            <div class="titleBar">
                <h1>第三方品牌</h1>
                <span>更多</span>
            </div>
            <div class="brandList">
                <ul>
                    <li v-for="(item,index) in brand" :key="index">
                        <img :src="item.img" alt="">
                        <h4>{{item.title}}</h4>
                        <span>{{item.lable}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <tab-bar></tab-bar>
    </div>
</template>
<script>
import tabBar from "@/components/tabBar.vue"
import title from "@/static/json/recommendTitle.json"
import titleLable from "@/static/json/recommendTitleLable.json"
import nominate from "@/static/json/recommendNominate.json"
import select from "@/static/json/recommendSelect.json"
import brand from "@/static/json/recommendBrand.json"
export default {
    data(){
        return{
            title,
            titleLable,
            brand,
            nominate,
            select,
            titleActive:0,
        }
    },
    methods: {
        titleColor(index){
            this.titleActive=index;
        }
    },
    components:{
        tabBar,
    }
}
</script>
<style scoped>
    .brandList>ul{
        display:flex;
        flex-wrap:wrap;
    }
    .brandList li>span{
        color:#818080;
        font-size:13px;
        width:99%;
        text-indent:3px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .brandList li>h4{
        color:#232524;
        font-size:15px;
        width:100%;
        text-indent:3px;
        font-weight: 500;
    }
    .brandList li>img{
        width:168px;
        height:168px;
        margin-bottom:4px;
    }
    .brandList li{
        width:50%;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .brand{
        padding:0 15px 18px;
    }
    .selectList li>span{
        color:#818080;
        font-size:13px;
        width:100%;
        text-indent:5px;
    }
    .selectList li>h4{
        color:#232524;
        font-size:15px;
        width:100%;
        text-indent:5px;
        font-weight:500;
    }
    .selectList li>img{
        width:100%;
        margin-bottom:5px;
    }
    .selectList li{
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-bottom:9px;
    }
    .select{
        padding:0 15px;
        margin-bottom:9px;
    }
    .nominateList ul{
        display:flex;
        flex-wrap:wrap;
    }
    .nominateList li>span{
        font-size:13px;
        color:#818080;
        text-indent:5px;
        width:100%;
    }
    .nominateList li>h4{
        color:#232524;
        font-size:15px;
        text-indent:5px;
        width:100%;
        font-weight: 500;
    }
    .nominateList li>img{
        width:107px;
        height:105px;
        margin-bottom:4px;
    }
    .nominateList li{
        display:flex;
        flex-direction: column;
        align-items: center;
        width:33.3%;
        margin-bottom:8px;
    }
    .nominate{
        padding:0 15px;
    }
    .titleBar>span::after{
        background:url('/img/recommend/arrow.png')no-repeat;
        background-size:100%;
        width:11px;
        height:11px;
        content:'';
        display:inline-block;
        margin-left:5px;
    }
    .titleBar>span{
        font-size:14px;
        color:#232524;
    }
    .titleBar>h1{
        font-size:20px;
        color:#232524;
    }
    .titleBar{
        padding-top:14px;
        padding-bottom:11px;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .centerBanner{
        display:flex;
        flex-direction: column;
    }
    .centerBanner>img{
        width:100%;
    }
    .bigLine{
        display:block;
        height:12px;
        width:100%;
        background:#F4F4F4;
    }
    .titleLable>ul{
        display:flex;
        flex-wrap:wrap;
    }
    .titleLable li{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:25%;
    }
    .titleLable li>span{
        color:#232524;
        font-size:13px;
    }
    .titleLable li>img{
        width:44px;
        height: 44px;
    }
    .titleLable{
        padding:0 15px;
        margin-bottom:14px;
    }
    .titleBanner>img{
        width:100%;
    }
    .titleBanner{
        padding:0 15px;
        margin-bottom:9px;
    }
    .activeColor{
        color:#00AAFF !important;
    }
    .title>span>img{
        width:73px;
        height:4px;
        position:absolute;
        bottom:0;
        left:50%;
        margin-left:-36px;
    }
    .title>span{
        color:#3E3E3E;
        font-size:16px;
        position:relative;
        padding-bottom:7px;
    }
    .title{
        display:flex;
        justify-content: space-around;
        align-items: center;
        padding:6px 0 8px 0;
    }
    .search>div{
        background:#88C8FD;
        border-radius: 20px;
        padding:0 25px;
        width:100%;
    }
    .search>div{
        position:relative;
        display:flex;
        align-items: center;
    }
    .search>div>img{
        position:absolute;
        left:0;
        width:16px;
        height:16px;
        margin-left:9px;
    }
    .search input{
        outline:none;
        border:none;
        background:#88C8FD;
        padding:3px 0;
        margin-left:5px;
        color:white;
    }
    .search>img{
        width:18px;
        height:21px;
        margin-left:20px;
    }
    .search{
        padding:12px 21px 11px 15px;
        background:#3AA4FD;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
</style>