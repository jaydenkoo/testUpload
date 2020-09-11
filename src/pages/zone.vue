<template>
    <div class="zone">
        <div class="title">
            <i></i>
            <div class="titleList">
                <span :class="{titleActive:isActive==index}" v-for="(item,index) in title" :key="index" @click="titleColor(index)">{{item.title}}
                    <img v-if="isActive==index" src="/img/zone/line.png" alt="">
                </span>
            </div>
            <img src="/img/zone/形状@3x(1).png" alt="">
        </div>
        <div class="bigImg">
            <img src="/img/zone/图层 2.png" alt="">
        </div>
        <div class="age">
            <ul>
                <li :class="{ageActive:agesActive==index}" v-for="(item,index) in age" :key="index" @click="ageColor(index)">{{item.age}}</li>
            </ul>
        </div>
        <div class="zoneList">
            <div class="zoneContent" v-for="(item,index) in list" :key="index">
                <div class="listTitle">
                    <h2>{{item.title}}</h2>
                    <span>{{item.more}}</span>
                </div>
                <p>{{item.intro}}</p>
                <div class="listContent" v-for="(items,index1) in item.list" :key="index1">
                    <img :src="items.img" alt="">
                    <div class="listIntroduce">
                        <div class="introduceTitle">
                            <h3>{{items.listTitle}}</h3>
                            <p>{{items.listIntroduce}}</p>
                        </div>
                        <div class="lable">
                            <div class="lableList" v-for="(lableItem,index2) in items.lable" :key="index2">
                                <h6>{{lableItem.lableList}}</h6>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <tab-bar></tab-bar>
    </div>
</template>
<script>
import tabBar from "@/components/tabBar.vue"
import title from "@/static/json/zoneTitle.json"
import age from "@/static/json/zoneAge.json"
import list from "@/static/json/zoneList.json"
export default {
    data(){
        return{
            list,
            age,
            title,
            isActive:0,
            agesActive:0,
        }
    },
    methods: {
        titleColor(index){
            this.isActive=index;
        },
        ageColor(index){
            this.agesActive=index;
        }
    },
    components:{
        tabBar,
    }
}
</script>
<style scoped>
    .lable{
        display:flex;
    }
    .lableList>h6{
        color:#3F8DFD;
        font-size:10px;
        font-weight: 500;
    }
    .lableList{
        margin-right:8px;
        position: relative;
        display:flex;
        width:52px;
        height:20px;
        justify-content: center;
        align-items: center;
    }
    .lableList>span{
        position:absolute;
        width:100%;
        height:100%;
        background:rgba(63,141,253,1);
        border-radius:4px;
        opacity: 0.1;
        border:1px solid rgba(63,141,253,1);
    }
    .introduceTitle>p{
        color:#666666;
        font-size:12px;
    }
    .introduceTitle h3{
        color:#333333;
        font-weight: 500;
        margin-bottom:4px;
    }
    .listContent{
        display:flex;
        margin-bottom:16px;
    }
    .listIntroduce{
        padding:10px 12px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .listContent>img{
        width:140px;
        height:100px;
    }
    .zoneContent>p{
        color:#999999;
        font-size:12px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin-bottom:24px;
    }
    .listTitle span{
        color:#666666;
        font-size:12px;
    }
    .listTitle span:after{
        background:url('/img/zone/形状@3x.png')no-repeat;
        background-size:100%;
        content:''; 
        display:inline-block;
        width:5px;
        height:9px;
        margin-left:8px;
    }
    .zoneContent{
        padding:0 15px;
        margin-bottom:20px;
    }
    .listTitle{
        display:flex;
        justify-content:space-between;
        align-items: center;
        margin-bottom:5px;
    }
    .listTitle h2{
        font-size:20px;
        color:#3368FF;
    }
    .ageActive{
        color:#3F8DFD !important;
    }
    .age>ul>li{
        width:80px;
        height:30px;
        background:rgba(244,244,244,1);
        border-radius:17px;
        color:#666666;
        font-size:14px;
        display:flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
    .age>ul{
        display:flex;
        justify-content: space-around;
        align-items: center;
    }
    .age{
        padding:0 15px;
        margin-bottom:20px;
    }
    .bigImg{
        padding:0 15px;
        margin-bottom:16px;
    }
    .bigImg>img{
        width:100%;
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