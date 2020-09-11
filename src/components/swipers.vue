<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in swiperItem" :key="index">
                <slot name="swip" :data="item"></slot>
            </swiper-slide>
        </swiper>
         <!-- <div class="swiper-pagination"></div> -->
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    created() {
        // console.log(this.skillsSwiper,123)
    },
    data() {
        return {
            // swiperOption:this.swiperOptions,
            // swiperItem:this.skillsSwiper,
        }
    },
    props:['swiperOptions','skillsSwiper'],
    components:{
        swiper,
        swiperSlide
    },
    // watch: {
    //     swiperOptions(){
    //         this.swiperOption=this.swiperOptions
    //     }
    // },
    computed: {
        swiperOption(){
            let options = this.swiperOptions
            return options
        },
        swiperItem(){
            let item = this.skillsSwiper
            return item
        }
    },
}
</script>
<style scoped>
    
</style>