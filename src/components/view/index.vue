<script setup>
import {TresCanvas} from "@tresjs/core";
import {GLTFModel, Html, OrbitControls} from "@tresjs/cientos";
import {findParent} from '../../utils/index.js'
import {onMounted, ref} from "vue";
defineOptions({
  name:'View'
})
const htmlPosition = ref([])
const Model = ref()
onMounted(()=>{
  console.log('Model:',Model.value)
})
</script>

<template>
<div id="container">
  <TresCanvas>
    <TresPerspectiveCamera/>
    <TresAmbientLight/>
    <TresDirectionalLight/>
    <OrbitControls/>
    <Html
        center
        transform
        :distance-factor="4"
        :position="htmlPosition.value?[htmlPosition.value[0],10, htmlPosition.value[2]]:[0, 10, 0.65]"
        :scale="[0.75, 0.75, 0.75]"
    >
    <h1 class="bg-white dark:bg-dark text-xs p-1 rounded">
      I'm a Box 📦
    </h1>
    </Html>
    <Suspense>
      <GLTFModel :ref="Model" path="3dModels/city.glb" draco @click="(interaction)=>{
        console.log('click:',interaction.intersections)
        let pos = findParent(interaction)
        htmlPosition.value=[pos.x,pos.y,pos.z]
        console.log('htmlPosition:',htmlPosition.value)
      }"/>
    </Suspense>
  </TresCanvas>
</div>
</template>

<style scoped>
#container{
  width: 100%;
  height: 100%;
}
</style>