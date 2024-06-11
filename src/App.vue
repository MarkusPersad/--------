<script setup>
import Layout from "./components/layout/index.vue"
import tDevices from './test/devices.json'
import {onMounted} from "vue";
import {useDevicesMonitor} from "./store/index.js";
const {devices:Devices,addDevice} = useDevicesMonitor()
onMounted(()=>{
  tDevices.devices.forEach(device=>{
    addDevice(device)
  })
  console.log(Devices)
})
</script>
<template>
<Layout></Layout>
</template>
<style scoped>

</style>