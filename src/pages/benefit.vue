<template>
    <div class="benefit">
        <div class="title">
            <img src="/img/benefit/合并形状@2x.png" alt="">
            <h4>我的收益</h4>
            <i></i>
        </div>
        <div class="record">
            <i></i>
            <div :class="{recordTitle:recordActive==index}" v-for="(item,index) in record" :key="index" @click="recordColor(index)">{{item.name}} <img v-if="recordActive==index" src="/img/benefit/图层 2.png"> </div>
            <i></i>
        </div>
        <div v-if="recordActive==0" class="gain">
            <div v-for="(item,index) in gain" :key="index">
                <div class="titleBar">
                    <h6>{{item.titleTime}}</h6>
                    <span>{{item.income}}</span>
                </div>
                <div class="gainContent" v-for="(items,index1) in item.content" :key="index1">
                    <div class="contentTop">
                        <h5>成功邀请 <span>{{items.name}}</span> 加入Plus会员</h5>
                        <span>{{items.price}}</span>
                    </div>
                    <div class="contentBottom">
                        <p>{{items.time}}</p>
                        <span>{{items.close}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="recordActive==1" class="deposit">
            <div v-for="(item,index) in deposit" :key="index">
                <div class="titleBar depositTitle">
                    <h6>{{item.titleTime}}</h6>
                    <span>{{item.income}}</span>
                </div>
                <div class="depositContent" v-for="(items,index1) in item.content" :key="index1">
                    <div>
                        <div class="depositLeft">
                            <h5>{{items.name}}<span>{{items.price}}</span></h5>
                            <p>{{items.time}}</p>
                        </div>
                        <p :style="{color:items.color}">{{items.result}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import record from "@/static/json/benefitRecord.json"
import gain from "@/static/json/benefitGain.json"
import deposit from "@/static/json/benefitDeposit.json"
export default {
    data(){
        return{
            record,
            gain,
            deposit,
            recordActive:0,
        }
    },
    methods: {
        recordColor(index){
            this.recordActive=index;
        }
    },
}
</script>
<style scoped>
    .depositContent>div{
        border-bottom:1px solid rgba(244,244,244,1);
        display:flex;
        align-items: center;
        padding-bottom:16px;
        width:100%;
    }
    .depositContent>div>p{
        font-size:14px;
    }
    .depositLeft>p{
        font-size:12px;
        color:#666666;
    }
    .depositLeft>h5>span{
        margin-left:10px;
        font-size:14px;
        color:#3F8DFD;
    }
    .depositLeft>h5{
        font-size:14px;
        color:#333333;
        margin-bottom:8px;
    }
    .depositContent{
        display:flex;
        align-items: center;
        padding:16px 16px 0;
    }
    .depositContent>div>p{
        margin-left:auto;
    }
    .depositLeft{
        display:flex;
        flex-direction: column;
    }
    .depositTitle >span{
        color:#3F8DFD !important;
    }
    .recordTitle{
        color:#3F8DFD !important;
    }
    .record>div>img{
        width:100%;
        height:4px;
        position:absolute;
        bottom:-7px;

    }
    .gainContent>div>span{
        margin-left:auto;
    }
    .gainContent>div{
        display:flex;
        align-items: center;
    }
    .contentBottom p{
        color:#666666;
        font-size:12px;
    }
    .contentBottom span{
        color:#3F8DFD;
        font-size:14px;
        /* font-weight: bold; */
    }
    .contentTop h5>span{
        color:#3F8DFD;
        font-size:15px;
        font-weight:bold;
    }
    .contentTop h5{
        font-weight: 500;
        font-size:15px;
        margin-bottom:5px;
    }
    .contentTop span{
        color:#FE2C2A;
        font-size:14px;
        font-weight: bold;
    }
    .contentTop{
        margin-bottom:5px;
    }
    .gainContent:last-child{
        border-bottom:unset;
    }
    .gainContent{
        padding:16px 16px;
        border-bottom:1px solid rgba(244,244,244,1);
    }
    .titleBar>h6{
        color:#666666;
        font-weight: 500;
    }
    .titleBar>span{
        font-size:12px;
        color:#FE2C2A;
    }
    .titleBar{
        display:flex;
        justify-content: space-between;
        align-items: center;
        background:#F4F5F7;
        padding:17px 16px;
    }
    .record>div{
        color:#999999;
        margin-bottom:7px;
        position:relative;
    }
    .record{
        padding:0 16px;
        display:flex;
        justify-content: space-around;
    }
    .title>h4{
        font-size:17px;
        color:#333333;
        font-weight: 500;
    }
    .title>img{
        width:10px;
        height:20px;
    }
    .title{
        display:flex;
        justify-content:space-between;
        align-items: center;
        padding:0 16px;
        margin:15px 0 18px;
    }
</style>