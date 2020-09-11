<template>
    <div class="tabBar">
        <van-tabbar v-model="active" fixed>
            <van-tabbar-item v-for="(item,index) in tabBar" :key="index" :icon="item.icon">{{item.name}}</van-tabbar-item>

        </van-tabbar>
    </div>
</template>
<script>
import tabBar from '../static/json/tabBar.json'
export default {
    data() {
        return {
            active:0,
            tabBar
        }
    }
}
</script>
<style scoped>
    .tabBar{
        margin-top:50px;
    }
</style>