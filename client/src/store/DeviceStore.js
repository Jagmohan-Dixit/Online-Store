import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 1, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 1, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 1, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }

    get types() {
        return  this._types
    }
    get brands(){
        return  this._brands
    }
    get devices(){
        return  this._devices
    }
}