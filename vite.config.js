import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {templateCompilerOptions} from '@tresjs/core'
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(
          {
            ...templateCompilerOptions
          }
      ),
      viteCompression(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
    base:'./',
    build:{
      rollupOptions:{
          output:{
              manualChunks:id =>{
                  if(id.includes('node_modules')) {
                      return 'vendor'
                  }
              }
          }
      }
    }
})
