<template>
    <div class="find">
        <div class="search">
            <div class="searchBox">
                <img src="../../static/img/find/播放器入口copy3@2x.png" alt="">
                <input type="text">
            </div>
            <img class="player" src="../../static/img/find/播放器入口copy3@2x.png" alt="">
        </div>
        <div class="bottomContent">
            <div class="title">
                <div v-for="(item,index) in findTitles" :key="index" :class="{active:underline1==index}" @click="underline(index)">{{item.name}} <div class="underline" v-if="underline1==index"></div></div>
            </div>
            <div class="content">
                <div class="contentNav">
                    <img class="titleImg" src="../../static/img/find/findBg.png" alt="">
                    <div class="titleNav">
                        <div class="nav" v-for="(item,index) in find" :key="index">
                            <img src="../../static/img/find/组_11.png" alt="">
                            <span>{{item.name}}</span>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="listTitle">
                        <div>推荐内容</div>
                        <span>更多<img class="arrow" src="../../static/img/find/arrow.png" alt=""></span>
                    </div>
                    <div class="listContent">
                        <div class="special" v-for="(item,index) in findSpecila" :key="index">
                            <img class="specialImg" :src="item.url" alt="">
                            <div>{{item.name}}</div>
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <tab-bar></tab-bar>
    </div>
</template>
<script>
import findSpecila from '@/static/json/findSpecila.json'
import find from "../../static/json/find.json"
import findTitles from "../../static/json/findTitles.json"
import tabBar from "../../components/tabBar"
export default {
    data(){
        return{
            find,
            findSpecila,
            findTitles,
            underline1:0,
        }
    },
    methods:{
        underline(index){
            this.underline1=index;
        }
    },
    components:{
        tabBar
    }
}
</script>
<style scoped>
    .underline{
        background:url('../../../public/img/find/矩形.png')no-repeat;
        width:73px;
        height:4px;
        position: absolute;
        bottom:0;
        left:0;
        margin-left:-19px;
        margin-bottom:-8px;
    }
    p{
        margin:0;
    }
    .find{
        background:#F8F8F8;
    }
    .search{
        padding:10px 15px 11px;
        background:#3AA4FD;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .player{
        width:16px;
        height:18px;
    }
    .searchBox{
        position:relative;
        background:#89C8FE;
        border-radius: 20px;
        width:280px;
        height:27px;
        display:flex;
        align-items: center;
        padding:0 10px;
    }
    .searchBox img{
        width:16px;
        height:16px;
    }
    .searchBox input{
        margin-left:10px;
        outline: 0;
        border:0;
        background:#89C8FE;
    }
    .title{
        display:flex;
        height:37px;
        align-items: center;
        background:white;
    }
    .title>div{
        margin:0 auto;
        font-size:16px;
        position:relative;
    }
    .content{
        margin-top:6px;
    }
    .titleImg{
        width:100%;
        margin-bottom:10px;
    }
    .contentNav{
        margin-bottom:6px;
        padding:0 14px;
        background:white;
    }
    .titleNav{
        display:flex;
        justify-content: space-between;
        padding-bottom:16px;
    }
    .nav{
        display:flex;
        align-items: center;
        flex-direction:column;
        
    }
    .nav img{
        width:44px;
        height:43px;
        overflow:hidden;
        margin-bottom:5px;
    }
    .nav span{
        font-size:13px;
        color:#232524;
    }
    .list{
        background:white;
        padding:0 14px;
    }
    .arrow{
        width:11px;
        height:11px;
        margin-left:5px;
    }
    .listTitle{
        padding:16px 0 11px;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .listTitle div{
        font-weight: bold;
        font-size:20px;
    }
    .listTitle span{
        font-size:14px;
    }
    .specialImg{
        width:107px;
        height:105px;
    }
    .listContent{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between; 
    }
    .special{
        width:31%;
        padding-bottom:8px;
    }
    .special div{
        font-size:15px;
        color:#232524;
        width:100%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .special p{
        color:#818080;
        font-size:13px;
        width:100%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
</style>