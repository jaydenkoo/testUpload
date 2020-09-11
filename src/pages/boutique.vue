<template>
    <div class="boutique">
        <div class="title">
            <i></i>
            <div class="titleList">
                <span :class="{titleActive:isActive==index}" v-for="(item,index) in title" :key="index" @click="titleColor(index)">{{item.title}}
                    <img v-if="isActive==index" src="/img/boutique/line.png" alt="">
                </span>
            </div>
            <img src="/img/boutique/形状@3x(1).png" alt="">
        </div>
        <div class="ipSelect">
            <div class="titleBar">
                <div class="titleName">
                    <h1>IP精选</h1>
                    <span>更多</span>
                </div>
                <p>这里是一些简介这里是一些简介这里是一些简介这里最多一行…</p>
                <i></i>
            </div>
            <div class="ipContent">
                <ul>
                    <li v-for="(item,index) in ipSelect" :key="index">
                        <img :src="item.img" alt="">
                        <div class="contentRight">
                            <h3>{{item.title}}</h3>
                            <p>{{item.intro}}</p>
                            <div class="contentLable"><span v-for="(lableItem,index1) in item.lable" :key="index1">{{lableItem.lableList}}</span></div>
                            <div class="contentPrice">
                                <h6>{{item.price}}</h6>
                                <span>{{item.vipPrice}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="month">
            <div class="titleBar">
                <div class="titleName">
                    <h1>月度优学包</h1>
                    <span>更多</span>
                </div>
                <p>这里是一些简介这里是一些简介这里是一些简介这里最多一行…</p>
                <i></i>
            </div>
            <div class="monthList">
                <ul>
                    <li v-for="(item,index) in month" :key="index">
                        <img :src="item.img" alt="">
                        <div class="monthContent">
                            <div class="monthContentTitle">
                                <h4>{{item.title}}</h4>
                                <span>{{item.vipPrice}}</span>
                            </div>
                            <p>{{item.intro}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="ipSelect">
            <div class="titleBar">
                <div class="titleName">
                    <h1>优学精选</h1>
                    <span>更多</span>
                </div>
                <p>这里是一些简介这里是一些简介这里是一些简介这里最多一行…</p>
                <i></i>
            </div>
            <div class="ipContent">
                <ul>
                    <li v-for="(item,index) in ipSelect" :key="index">
                        <img :src="item.img" alt="">
                        <div class="contentRight">
                            <h3>{{item.title}}</h3>
                            <p>{{item.intro}}</p>
                            <div class="contentLable"><span v-for="(lableItem,index1) in item.lable" :key="index1">{{lableItem.lableList}}</span></div>
                            <div class="contentPrice">
                                <h6>{{item.price}}</h6>
                                <span>{{item.vipPrice}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="pictureBook">
            <div class="titleBar">
                <div class="titleName">
                    <h1>绘本馆</h1>
                    <span>更多</span>
                </div>
                <p>这里是一些简介这里是一些简介这里是一些简介这里最多一行…</p>
                <i></i>
            </div>
            <div class="bookList">
                <ul>
                    <li v-for="(item,index) in book" :key="index">
                        <img :src="item.img" alt="">
                        <h4>{{item.name}}</h4>
                    </li>
                </ul>
            </div>
        </div>
        <tab-bar></tab-bar>
    </div>
</template>
<script>
import title from "@/static/json/zoneTitle.json"
import ipSelect from "@/static/json/boutiqueIpSelect.json"
import month from "@/static/json/boutiqueMonth.json"
import book from "@/static/json/boutiqueBook.json"
import tabBar from "@/components/tabBar.vue"
export default {
    data(){
        return{
            isActive:1,
            title,
            book,
            ipSelect,
            month,
        }
    },
    methods: {
        titleColor(index){
            this.isActive=index;
        }
    },
    components:{
        tabBar,
    }
}
</script>
<style scoped>
    .bookList li>h4{
        color:#333333;
        font-weight:500;
        width:104px;
    }
    .bookList>ul{
        display:flex;
        flex-wrap:wrap;
    }
    .bookList li{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:33.33%;
        margin-bottom:18px;
    }
    .bookList{
        padding:0 15px;
    }
    .bookList li>img{
        width:104px;
        height:132px;
        margin-bottom:8px;
    }
    .monthContentTitle>span{
        color:#FF6F6F;
        font-size:12px;
        font-weight: bold;
    }
    .monthContentTitle>h4{
        color:#333333;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .monthContentTitle{
        display:flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom:8px;
    }
    .monthContent p{
        color:#666666;
        font-size:12px;
    }
    .monthList li{
        display:flex;
        flex-direction: column;
        margin-bottom:16px;
    }
    .monthContent{
        background:rgba(240,254,255,1);
        padding:12px;
        border-radius:0px 0px 8px 8px;

    }
    .monthList{
        padding:0 15px;
    }
    .monthList li >img{
        width:100%;
    }
    .contentRight{
        padding-left:12px;
        display:flex;
        flex-direction: column;
        justify-content:space-between;
    }
    .ipContent li{
        display:flex;
        margin-bottom:16px;
    }
    .ipContent li>img{
        width:140px;
        height:100px;
    }
    .contentPrice{
        display:flex;
    }
    .contentPrice span{
        font-size:12px;
        color:#FF6F6F;
        font-weight:bold;
        margin-left:8px;
    }
    .contentPrice h6{
        color:#CFCFCF;
        font-weight: 500;
    }
    .contentRight>p{
        font-size:12px;
        color:#666666;
    }
    .contentRight>h3{
        color:#333333;
        font-weight:500;
    }
    .contentLable{
        display:flex;
    }
    .contentLable span:last-child{
        margin:0
    }
    .contentLable span{
        margin-right:6px;
        display:flex;
        justify-content: center;
        align-items: center;
        background:rgba(236,244,255,1);
        border-radius:4px;
        font-size:10px;
        padding:4px 6px;
        color:#3F8DFD;
    }
    .ipContent{
        padding:0 15px;
    }
    .titleBar{
        padding:15px 15px 12px;
    }
    .titleName{
        display:flex;
        justify-content: space-between;
        align-items:baseline;
        margin-bottom:5px;
    }
    .titleName>span:after{
        background:url('/img/boutique/形状@3x.png')no-repeat;
        background-size:100%;
        width:5px;
        height:9px;
        content:'';
        display:inline-block;
        margin-left:8px;
    }
    .titleName>span{
        color:#666666;
        font-size:12px;
    }
    .titleName>h1{
        font-size:20px;
        color:#3368FF;
        letter-spacing:1px;
    }
    .titleBar>p{
        font-size:12px;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .titleBar>i{
        width:23px;
        height:4px;
        background:rgba(244,244,244,1);
        border-radius:2px;
        display:inline-block;
    }
    .titleActive{
        color:#333 !important;
        font-weight: bold;
    }
    .titleList span:nth-child(2){
        margin:0 44px;
    }
    .title{
        margin:11px 0 20px;
        padding:0 19px;
        display:flex;
        justify-content: space-between;
    }
    .title >img{
        width:17px;
        height:18px;
    }
    .titleList span{
        color:#999999;
        font-size:17px;
        position:relative;
    }
    .titleList{
        display:flex;
        justify-content:space-between;
    }
    .titleList>span>img{
        width:20px;
        height:4px;
        position:absolute;
        bottom:-11px;
        left:50%;
        margin-left:-10px;
        /* margin-top:7px; */
    }
    h1,h2,h3,h4,h5,h6,p{
        margin:0;
    }
</style>
