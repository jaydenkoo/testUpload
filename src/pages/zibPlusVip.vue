<template>
    <div class="zibPlusVip">
        <div class="title">
            <div>
                <img src="../../public/img/zibPlusVip/合并形状@2x.png" alt="" />
            </div>
            <div class="titleFont">智伴Plus会员</div>
            <i></i>
        </div>

        <div class="swiper">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide class="swiperItem" v-for="(item, index) in swiperItem" :key="index">
                    <div class="swiperContent">
                        <div class="swiperTitle">
                            <div class="headImg">
                                <img class="bigImg" alt="" />
                                <img class="smallImg" src="../../public/img/zibPlusVip/member2.png" alt="" />
                            </div>
                            <div class="userInfo">
                                <h3>{{ item.userName }}</h3>
                                <h6>{{ item.userTime }}</h6>
                            </div>
                        </div>
                        <h5 class="swiperGift">
                            {{ item.gift }}
                        </h5>
                        <div class="swiperRenewal">
                            <h5>立即续费</h5>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="bigline"></div>

        <div class="weal">
            <div class="vipTitle">
                <div class="bigFont">
                    <img src="../../public/img/zibPlusVip/分组 9@2x.png" alt="" />
                    <h2>会员权益</h2>
                    <img src="../../public/img/zibPlusVip/分组 8@2x.png" alt="" />
                </div>
                <p>会员专属六大权益</p>
            </div>
            <div class="wealList">
                <div class="wealContent" v-for="(item, index) in weal" :key="index">
                    <img :src="item.img" alt="" />
                    <h6>{{ item.name }}</h6>
                </div>
            </div>
        </div>

        <div class="bigline"></div>

        <div class="curriculum">
            <div class="vipTitle">
                <div class="bigFont">
                    <img src="../../public/img/zibPlusVip/分组 9@2x.png" alt="" />
                    <h2>会员专属课程</h2>
                    <img src="../../public/img/zibPlusVip/分组 8@2x.png" alt="" />
                </div>
                <p>精选专属会员课 伴宝宝快速成长</p>
            </div>
            <div class="curriculumList">
                <div class="curriculumContent" v-for="(item, index) in curriculum" :key="index">
                    <img :src="item.img" alt="" />
                    <div class="curriculumItem">
                        <span class="itemTitle">{{ item.title }}</span>
                        <span class="itemPrice">{{ item.price }}</span>
                    </div>
                </div>
            </div>
            <div class="more">
                <div class="moreContent">
                    更多精品内容购买后请前往APP查看哦~
                    <img src="../../public/img/zibPlusVip/分组 4@2x.png" alt="" />
                </div>
            </div>
        </div>

        <div class="bigline"></div>

        <div class="buy">
            <div class="vipTitle">
                <div class="bigFont">
                    <img src="../../public/img/zibPlusVip/分组 9@2x.png" alt="" />
                    <h2>购课8折</h2>
                    <img src="../../public/img/zibPlusVip/分组 8@2x.png" alt="" />
                </div>
                <p>精品付费课程享8折福利</p>
            </div>
            <div class="buyList">
                <div class="buyContent" v-for="(item, index) in buy" :key="index">
                    <img :src="item.img" alt="" />
                    <h6>{{ item.title }}</h6>
                    <div class="buyItem">
                        <h6>{{ item.newPrice }}</h6>
                        <span>{{ item.oldPrice }}</span>
                    </div>
                </div>
            </div>
            <div class="change">
                <div class="changeContent">
                    换一换
                    <img src="../../public/img/zibPlusVip/分组 22@2x.png" alt="" />
                </div>
            </div>
        </div>

        <div class="bigline"></div>

        <div class="discount">
            <div class="vipTitle">
                <div class="bigFont">
                    <img src="../../public/img/zibPlusVip/分组 9@2x.png" alt="" />
                    <h2>千元优惠券</h2>
                    <img src="../../public/img/zibPlusVip/分组 8@2x.png" alt="" />
                </div>
                <p>会员年度专享优惠券</p>
            </div>
            <div class="discountList">
                <div class="discountContent" v-for="(item, index) in discount" :key="index">
                    <img :src="item.img" alt="" />
                    <div class="discountTitle">
                        <span>{{ item.type }}</span>
                        <h5>{{ item.title }}</h5>
                        <div class="discountTime">
                            <div class="use">立即使用</div>
                            <span>{{ item.time }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <p>千元礼券购买会员立即获得哦~</p>
        </div>

        <div class="bigline"></div>

        <div class="invite">
            <div class="vipTitle">
                <div class="bigFont">
                    <img src="../../public/img/zibPlusVip/分组 9@2x.png" alt="" />
                    <h2>邀好友享收益</h2>
                    <img src="../../public/img/zibPlusVip/分组 8@2x.png" alt="" />
                </div>
                <p>邀请好友加入会员赚收益</p>
            </div>
            <div class="inviteBanner"></div>
        </div>

        <div class="open">
            <span>立即开通 ¥388/<span>年</span></span>
        </div>
    </div>
</template>
<script>
    import weal from "../static/json/zibPlusVipWeal.json";
    import curriculum from "../static/json/zibPlusVipCurriculum.json";
    import buy from "../static/json/zibPlusVipBuy.json";
    import discount from "../static/json/zibPlusVipDiscount.json";
    import swiperItem from "../static/json/zibPlusVipSwiper.json";
    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper";
    export default {
        data() {
            return {
                weal,
                curriculum,
                buy,
                discount,
                swiperItem,
                swiperOption: {
                    spaceBetween: 15,
                    slidesPerView: "auto",
                    centeredSlides: true
                }
            };
        },
        components: {
            swiper,
            swiperSlide
        }
    };

</script>
<style scoped>
    .swiperRenewal {
        width: 80px;
        height: 24px;
        background: white;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-top:31px; */
    }

    .swiperRenewal>h5 {
        color: #ca8c0c;
        font-weight: 500;
    }

    .swiperGift {
        color: #c38300;
        font-size: 14px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .userInfo>h3 {
        color: #c38300;
        letter-spacing: 2px;
    }

    .userInfo>h6 {
        color: #ca8c0c;
        font-weight: 400;
    }

    .userInfo {
        margin-left: 12px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .swiperTitle {
        display: flex;
        /* margin-bottom:10px; */
    }

    .headImg {
        width: 40px;
        height: 40px;
        position: relative;
    }

    .bigImg {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: lightpink;
    }

    .smallImg {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 13px;
        height: 13px;
    }

    .swiperContent {
        border-radius: 6px;
        /* opacity:0.5; */
        border: 1px solid rgba(202, 140, 12, 0.5);
        padding: 19px 12px 16px;
        box-sizing: border-box;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .swiperItem {
        background: url("../../public/img/zibPlusVip/礼包@2x.png") no-repeat;
        background-size: 100%;
        width: 318px;
        height: 188px;
        padding: 8px;
        box-sizing: border-box;
    }

    .use {
        width: 60px;
        height: 24px;
        background: rgba(255, 244, 206, 1);
        border-radius: 4px;
        font-size: 12px;
        color: #c38300;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .open>span>span {
        font-size: 12px;
        color: white;
    }

    .open>span {
        color: white;
        font-size: 16px;
    }

    .open {
        height: 52px;
        background: linear-gradient(270deg,
                rgba(234, 45, 44, 1) 0%,
                rgba(254, 147, 108, 1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .invite {
        margin-bottom: 20px;
    }

    .inviteBanner {
        width: 100%;
        height: 245px;
        background: url("../../public/img/zibPlusVip/分组 23@2x.png") no-repeat;
        background-size: 100%;
    }

    .discount>p {
        color: #999999;
        text-align: center;
        font-size: 12px;
    }

    .discountTime>img {
        width: 60px;
        height: 24px;
    }

    .discountTime {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .discountTime>span {
        color: #999999;
        font-size: 8px;
    }

    .discountTitle>h5 {
        color: #c38300;
        font-weight: 500;
    }

    .discountTitle>span {
        width: 90px;
        height: 18px;
        border-radius: 12px;
        border: 1px solid rgba(195, 131, 0, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 8px;
        color: #c38300;
    }

    .discountTitle {
        padding: 12px 12px 8px 16px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 0px 8px 8px 0px;
        border: 1px solid rgba(233, 233, 233, 1);
        border-left: 0px;
        margin-left: -1px;
    }

    .discountContent>img {
        width: 130px;
        height: 100px;
    }

    .discountContent {
        display: flex;
        margin-bottom: 12px;
    }

    .discountList {
        padding: 0 16px 10px;
    }

    .change {
        display: flex;
        justify-content: center;
    }

    .changeContent {
        color: #c38300;
        font-size: 12px;
        width: 70px;
        height: 24px;
        background: rgba(255, 244, 206, 1);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .changeContent>img {
        width: 14px;
        height: 14px;
        margin-left: 4px;
    }

    .buyItem {
        display: flex;
        flex-direction: column;
    }

    .buyItem * {
        font-size: 10px;
    }

    .buyItem>span {
        color: #b3b3b3;
    }

    .buyItem>h6 {
        color: #fe2c2a;
        margin-bottom: 2px;
    }

    .buyContent>h6 {
        font-weight: 500;
        color: #333333;
        font-size: 12px;
        margin-bottom: 2px;
    }

    .buyList {
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .buyContent>img {
        width: 104px;
        height: 104px;
    }

    .buyContent {
        width: 30%;
        margin-bottom: 12px;
    }

    .moreContent>img {
        width: 14px;
        height: 14px;
        margin-left: 4px;
    }

    .moreContent {
        width: 244px;
        height: 24px;
        background: rgba(255, 244, 206, 1);
        border-radius: 12px;
        font-size: 12px;
        color: #c38300;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2px;
    }

    .more {
        display: flex;
        justify-content: center;
    }

    .itemPrice {
        font-size: 12px;
        color: #fe2c2a;
        font-weight: 600;
    }

    .itemTitle {
        font-size: 14px;
        color: #333333;
        margin-bottom: 3px;
    }

    .curriculumList {
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .curriculumItem>span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .curriculumItem {
        display: flex;
        flex-direction: column;
        padding: 8px 5px;
        background: rgba(255, 252, 240, 1);
        border-radius: 0px 0px 8px 8px;
        margin-top: -2px;
    }

    .curriculumContent {
        margin-bottom: 20px;
        width: 164px;
    }

    .curriculumContent>img {
        width: 164px;
        height: 105px;
    }

    .wealList {
        padding: 0 28px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .wealContent>h6 {
        font-size: 12px;
        color: #3e3e3e;
        font-weight: 500;
    }

    .wealContent {
        width: 26%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 12px;
    }

    .wealContent>img {
        width: 60px;
        height: 60px;
        margin-bottom: 8px;
    }

    .vipTitle {
        text-align: center;
        margin-bottom: 20px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    .titleFont {
        font-size: 17px;
        letter-spacing: 1px;
    }

    .title {
        display: flex;
        align-items: center;
        padding: 14px 15px;
    }

    .title>* {
        flex: 1;
    }

    .title>div>img {
        width: 10px;
        height: 19px;
    }

    .bigline {
        height: 8px;
        background: rgba(248, 248, 248, 1);
        width: 100%;
        margin: 22px 0;
    }

    .bigFont {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bigFont>img {
        width: 16px;
        height: 8px;
    }

    .bigFont>h2 {
        margin: 0 2px;
        font-size: 20px;
        letter-spacing: 3px;
        text-indent: 3px;
    }

    /* .bigFont>h2::before{
        background:url('../../public/img/zibPlusVip/member4.png')no-repeat center;
        width:16px;
        height:8px;
        display:inline-block;
        content:'';
        vertical-align:middle;
        margin-right:7px;
    }
    .bigFont>h2::after {
        background:url('../../public/img/zibPlusVip/member3.png')no-repeat center;
        width:16px;
        height:8px;
        display:inline-block;
        content:'';
        vertical-align:middle;
        margin-left:4px;
    } */
    .vipTitle>p {
        color: #b3b3b3;
        font-size: 12px;
        margin-top: 3px;
        letter-spacing: 1px;
    }

</style>
