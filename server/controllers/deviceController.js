const uuid = require('uuid')

class DeviceController {
    async create(req, res){
        const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpeg"
    }

    async getAll(req, res){

    }

    async getOne(req, res){

    }

    async delete(req, res){

    }
}

module.exports = new DeviceController()