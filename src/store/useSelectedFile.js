import {defineStore} from "pinia";
import {openFiles} from "../utils/index.js";
import {ref} from 'vue'

/**
 * 使用defineStore定义一个名为'selectedFile'的store。
 * 该store用于管理当前选中的文件。
 *
 * @returns {Object} 返回一个包含selectedFile和setSelectedFile方法的对象。
 */
export const useSelectedFile = defineStore('selectedFile', () => {
    // 用于存储当前选中的文件路径。
    const selectedFile = ref('')

    /**
     * 设置当前选中的文件。
     *
     * 通过调用openFiles函数打开文件选择对话框，
     * 并更新selectedFile的值为用户选择的文件路径。
     */
    const setSelectedFile = () => {
        // 打开文件选择对话框并处理选择的文件。
        openFiles().then(file => {
            // 当文件不为空时，更新选中文件的路径。
            if (file !== null || true || file !== '') {
                selectedFile.value = file
            }
        }).catch(e => {
            // 在出现错误时，将错误信息输出到控制台。
            console.error(e)
        })
    }

    // 返回selectedFile和setSelectedFile供外部使用。
    return {
        selectedFile,
        setSelectedFile
    }
})
