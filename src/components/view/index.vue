<script setup>
import {TresCanvas} from "@tresjs/core";
import {GLTFModel, Html, OrbitControls} from "@tresjs/cientos";
import {findParent} from '../../utils/index.js'
import {onMounted, ref} from "vue";
import {useSelectedFile} from "../../store/index.js";
import {PCFSoftShadowMap, SRGBColorSpace} from "three";
import {router} from "../../router/index.js";
defineOptions({
  name:'View'
})
const htmlPosition = ref([])
const Model = ref()
onMounted(()=>{
  console.log('Model:',Model.value)
})
const { selectedFile } = useSelectedFile()
onMounted(()=>{
  router.push('/')
})
</script>

<template>
<div id="container">
  <TresCanvas window-size shadows :output-color-space="SRGBColorSpace" :shadowMap="true" :shadow-map-type="PCFSoftShadowMap" >
    <TresAmbientLight/>
    <TresDirectionalLight/>
<!--    <TresPerspectiveCamera />-->
    <OrbitControls enable-damping :damping-factor="0.05" />
    <Html
        center
        transform
        :distance-factor="4"
        :position="htmlPosition.value?[htmlPosition.value[0],10, htmlPosition.value[2]]:[0, 10, 0.65]"
        :scale="[0.75, 0.75, 0.75]"
    >
    <div class="html-context"><h1>I'm a Box！😀</h1></div>
    </Html>
    <Suspense>
      <GLTFModel  :ref="Model" :path="selectedFile?selectedFile:'3dModels/city.glb'" draco @click="(interaction)=>{
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
.html-context{
  background: white;
  @media (prefers-color-scheme: dark) {
    background: #333;
  }
  padding: 0.25rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
}
</style>