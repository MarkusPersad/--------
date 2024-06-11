import {filter} from "lodash";
import {Object3D} from 'three'
/**
 * @param {Record<string,Object3D>} nodes
 * */
export function classifyNode(nodes){
    return filter(Object.values(nodes),(node)=>{
        return node.parent?.name === 'Scene'&&node.parent?.type ==='Group'
    })
}