import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Телевизоры"},
            {id: 4, name: "Ноутбуки"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "LG"},
            {id: 4, name: "Lenovo"},

        ]
        this._devices = [
            {id: 1, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 2, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 3, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 4, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 5, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 6, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 7, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 8, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 9, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
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
    get selectedType(){
        return  this._selectedType
    }
    get selectedBrand(){
        return  this._selectedBrand
    }
}