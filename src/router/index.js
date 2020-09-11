import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home.vue";
import personalCenter from "@/pages/tabBar/personalCenter.vue"
import find from "@/pages/tabBar/find.vue"
import skills from "@/pages/tabBar/skills.vue"
import special from "@/pages/special.vue"
import tabBar from "@/components/tabBar.vue"
import swipers from "@/components/swipers.vue"
import zibPlusVip from "@/pages/zibPlusVip.vue"
import zone from "@/pages/zone.vue"
import directory from "@/pages/directory.vue"
import boutique from "@/pages/boutique.vue"
import benefit from "@/pages/benefit.vue"
import facility from "@/pages/facility.vue"
import recommend from "@/pages/recommend.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {path:"/personalCenter",name:"personalCenter",component:personalCenter},
        {path:"/find",name:"find",component:find},
        {path:"/special",name:"special",component:special},
        {path:"/tabBar",name:"tabBar",component:tabBar},
        {path:"/swipers",name:"swipers",component:swipers},
        {path:"/zibPlusVip",name:"zibPlusVip",component:zibPlusVip},
        {path:"/skills",name:"skills",component:skills},
        {path:"/zone",name:"zone",component:zone},
        {path:"/boutique",name:"boutique",component:boutique},
        {path:"/directory",name:"directory",component:directory},
        {path:"/benefit",name:"benefit",component:benefit},
        {path:"/facility",name:"facility",component:facility},
        {path:"/recommend",name:"recommend",component:recommend},
    ]
});
