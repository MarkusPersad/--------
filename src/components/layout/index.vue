<script setup>
import { ref} from "vue";
import {Expand, Fold, Grid, Monitor, TrendCharts} from "@element-plus/icons-vue";
import {useDevicesMonitor} from "../../store/index.js";
import {useRouter} from "vue-router";
defineOptions({
  name:'Layout'
})
const router = useRouter()
const isCollapse = ref(true)
const {devices} = useDevicesMonitor()

const handleOpen=(key,keyPath)=>{
  console.log(key,keyPath)
}

const handleClose=(key,keyPath)=>{
  console.log(key,keyPath)
}
</script>

<template>
<div class="layout">
  <div class="layout-sidebar">
    <ElMenu
    default-active="1"
    class="sidebar-menu"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    >
      <ElSubMenu index="1" @click.stop="router.push('/view')">
        <template #title>
            <ElIcon><Monitor/></ElIcon>
            <span>Device Monitor</span>
        </template>
        <ElMenuItemGroup>
          <template #title><span>Devices</span></template>
          <ElMenuItem v-for="item in devices" :key="item.id" :index="'1-'+item.id">
            {{item.name}}
          </ElMenuItem>
        </ElMenuItemGroup>
      </ElSubMenu>
      <ElMenuItem index="2" @click="router.push('/working')">
        <ElIcon><Grid/></ElIcon>
        <span>Device Information</span>
      </ElMenuItem>
      <ElMenuItem index="3">
        <ElIcon><TrendCharts/></ElIcon>
        <span>Changes History</span>
      </ElMenuItem>
      <ElMenuItem index="4">
        <div v-show="isCollapse===true" @click="isCollapse=!isCollapse">
          <ElIcon><Expand/></ElIcon>
        </div>
        <div v-show="isCollapse===false" @click="isCollapse=!isCollapse">
          <ElIcon><Fold/></ElIcon>
          <span>折叠</span>
        </div>
      </ElMenuItem>
    </ElMenu>
  </div>
  <div class="layout-context">
    <RouterView></RouterView>
  </div>
</div>
</template>

<style scoped>
.layout{
  display: flex;
  width: 100vw;
  height: 100vh;
}
.layout-sidebar{
  background: rgb(247,247,247);
}
.layout-context{
  flex-grow: 1;
  overflow: auto;
  height: 100%;
}
.sidebar-menu{
  width: 100%;
  height: 100%;
}
</style>