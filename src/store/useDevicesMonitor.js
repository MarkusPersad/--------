import {defineStore} from "pinia";
import {ref} from "vue";
import {defaultAxios} from "../axios/index.js";

export const useDevicesMonitor =defineStore('devicesMonitor',()=>{
    const devices=ref(new Set())
    function addDevice(device){
        devices.value.add(device)
    }
    /**
     * Asynchronously fetches a list of device information objects.
     *
     * This function utilizes the default Axios instance to initiate a GET request to the '/getDevices' endpoint,
     * with the intention of obtaining a list of devices. Upon a successful request, it resolves with an array
     * containing objects that represent individual devices, each structured as follows:
     *
     * Device Object Structure:
     * {
     *   status: Number, // The status code indicating the device's operational state
     *   name: String,   // The human-readable name assigned to the device
     *   id: String,     // A unique identifier for the device
     *   websocketId: String, // An identifier linking the device to its WebSocket connection in the server's pool
     * }
     *
     * In the event of an error during the request, the issue is logged to the console.
     *
     * @returns {Promise<Array<Object>>} A promise resolving to an array of device information objects upon success.
     */
    async function getDevices(){
        try {
            // Await the completion of the GET request and extract the devices data from the response
            const {data:devices} = await defaultAxios.get('/getDevices')
            return devices
        }catch (error){
            // Handle error by logging it to the console
            console.log(error)
        }
    }

    function setDevices(){
        getDevices().then(devices=>{
            devices.forEach(device=>{
                addDevice(device)
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    return {devices,addDevice,setDevices}
})