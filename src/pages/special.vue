<template>
    <div class="special">
        <div class="titles">
            <img class="arrow" src="../../public/img/special/合并形状 copy.png" alt="">
            <div>专辑</div>
            <img class="play" src="../../public/img/special/播放器入口 copy 2.png" alt="">
        </div>
        <div class="column">
            <div><img src="../../public/img/special/分组.png" alt=""></div>
            <div>
                <div class="bookName">水浒传</div>
                <div class="author">作者：施耐庵</div>
                <div class="price"><h3>¥188.00</h3><img src="../../public/img/special/分组 4.png" alt=""></div>
                <div class="mark">
                    <span>8-12</span>
                    <span>中国名著</span>
                    <span>教学伴读</span>
                </div>
            </div>
        </div>
        <div class="gift">
            <div class="giftContent">所属会员礼包：0~3岁幼儿教学礼包</div>
            <img class="giftArrow" src="../../public/img/special/图层22 2.png" alt="">
        </div>
        <p class="line"></p>
        <div class="rectangular">
            <img src="../../public/img/special/矩形 copy 10@2x.png" alt="">
        </div>
        <p class="line"></p>
        <div class="introduce">
            <div class="introduceContent" v-for="(item,index) in specialGift" :key="index">
                <img :src="item.img" alt="">
                <span>{{item.content}}</span>
            </div>
        </div>
        <p class="bigLine"></p>
        <div class="song">
            <div class="songList" v-for="(item,index) in specialSong" :key="index">
                <h5>{{item.id}}</h5>
                <div class="songContent">
                    <div class="songFont">
                        <div class="songTitle">{{item.title}}<img :src="item.img" alt=""></div>
                        <div class="songSection">{{item.section}}</div>
                    </div>
                    <div class="songIcon">
                        <img :src="item.play" alt="">
                        <img :src="item.more" alt="">
                    </div>
                </div>
            </div>
        </div>
        <h4 class="moreStory">查看更多故事 ></h4>
        <p class="bigLine"></p>
        <div class="recommend">
            <h3>相关推荐</h3>
            <div class="recommendContent">
                <div class="recommendList" v-for="(item,index) in specialRecommend" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="options">
            <div class="testPlay"><img src="../../public/img/special/可播放标识@2x(1).png" alt=""><span>试听</span></div>
            <div class="openVip"><img src="../../public/img/special/分组 7.png" alt=""><span>开通VIP畅听</span></div>
        </div>
    </div>
</template>
<script>
import specialGift from "@/static/json/specialGift.json"
import specialSong from "@/static/json/specialSong.json"
import specialRecommend from "@/static/json/specialRecommend.json"
export default {
    data() {
        return {
            specialGift,
            specialSong,
            specialRecommend,
        }
    },
}
</script>
<style scoped>
    p{
        margin:0;
    }
    .testPlay{
        background:white;
    }
    .testPlay img{
        width:24px;
        height:24px;
    }
    .openVip{
        background:url("../../public/img/special/矩形 copy 8.png")no-repeat;
        background-size:100%;
    }
    .testPlay span{
        color:#333333;
        font-size:16px;
    }
    .openVip span{
        color:white;
        font-size:16px;
    }
    .options{
        display:flex;
    }
    .options span{
        margin-left:7px;
    }
    .options div{
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
        height:50px;
    }
    .recommendContent{
        /* overflow:hidden; */
        /* float:left; */
        display:flex;
        flex-wrap:wrap;
    }
    .recommendList{
        display:flex;
        flex-direction: column;
        width:31%;
        /* height:100%; */
        margin-bottom:25px;
        /* overflow:auto; */
        padding-right:11px;
    }
    .recommendList:nth-child(3n){
        padding-right:0;
    }
    .recommendList img{
        width:100%;
        height:114px;
        margin-bottom:10px;
    }
    .recommend h3{
        margin-bottom:23px;
    }
    .recommend{
        padding:0 15px 7px;
    }
    .moreStory{
        font-weight: unset;
        color:#40AEFF;
        text-align:center;
    }
    .songIcon{
        display:flex;
        align-items: center;
        justify-content: space-between;
        width:39px;
        margin-right:25px;
    }
    .songTitle{
        display:flex;
        align-items: center;
        font-size:16px;
        color:#163134;
        margin-bottom:5px;
    }
    .songTitle>img{
        margin-left:13px;
    }
    .songSection{
        color:#8A8A8A;
        font-size:14px;
    }
    .songList{
        display:flex;
        align-items: center;
    }
    .songContent{
        display:flex;
        align-items: center;
        justify-content: space-between;
        width:100%;
        margin-left:13px;
        border-bottom:1px solid #E1E6EB;
        padding-bottom:5px;
    }
    .songList:last-of-type .songContent{
        border:0;
    }   
    .song{
        margin-left:15px;
    }
    .bigLine{
        width:375px;
        height:6px;
        background:rgba(248,248,248,1);
        margin:19px 0;
    }
    .introduce{
        margin-top:14px;
        padding:0 15px;
        margin-bottom:29px;
    }
    .introduceContent>span{
        margin-bottom:12px;
        text-indent:20px;
        color:#666666;
        font-size:13px;
    }
    .introduceContent>img{
        margin-bottom:12px;
    }
    .introduceContent{
        display:flex;
        align-items: center;
        flex-direction: column;
    }
    .rectangular{
        height:45px;
        padding:4px 7px 0 19px;
    }
    .rectangular>img{
        width:100%;
    }
    .line{
        width:375px;
        height:1px;
        background:rgba(240,240,240,1);
    }
    .giftArrow{
        width:7px;
        height:14px;
        position:absolute;
        right:25px;
    }
    .giftContent{
        background:url('../../public/img/special/形状@2x.png')no-repeat;
        background-size:16px 17px;
        background-position:left;
        color:#C38300;
        font-size:15px;
        padding-left:20px;
        position:relative;
    }
    .gift{
        display:flex;
        justify-content: center;
        align-items: center;
        margin:18px 13px 12px;
        height:45px;
        background:linear-gradient(180deg,rgba(255,230,145,1) 0%,rgba(255,218,113,1) 100%);
        border-radius:23px;
    }
    .mark{
        display:flex;
        width:100%;
        flex-wrap: wrap;
        align-items:flex-start;
    }
    .mark>span:first-child{
        margin-bottom:10px;
        margin-right:8px;
    }
    .mark>span{
        background:rgba(248,248,248,1);
        border-radius:11px;
        padding:3px 18px;
        font-size:11px;
        color:#9B9A9A;
    }
    .bookName{
        font-size:17px;
        color:#333333;
        margin-bottom:9px;
    }
    .author{
        font-size:12px;
        color:#999999;
        margin-bottom:13px;
    }
    .price{
        display:flex;
        align-items: center;
        margin-bottom:17px;
    }
    .price>img{
        /* width:67px;
        height:21px; */
    }
    .price>h3{
        padding-right:8px;
        color:#3AA4FD;
        font-size:17px;
        height:22px;
    }
    .column{
        padding:0 13px;
        display:flex;
    }
    .column>div{
        flex:1;
    }
    .titles{
        padding:14px 13px 22px;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .titles>div{
        color:#333333;
        font-size:17px;
        width:34px;
        height:24px;
    }
    .arrow{
        width:10px;
        height:17px;
    }
    .play{
        width:16px;
        height:17px;
    }
    h3{
        margin:0;
    }
</style>
