const deathModel = require("../models/deathModels");

class DeathController {
    deathCreate = async (req, res) => {
        try {
            let {name,img,date} = req.body;
            if (!name){
                return res.status(400).json({
                    status: 'fail',
                    msg : 'Please enter name'
                });
            }else if (!img){
                return res.status(400).json({
                    status: 'fail',
                    msg : 'Please enter img'
                });
            }else if (!date){
                return res.status(400).json({
                    status: 'fail',
                    msg : 'Please enter a date'
                });
            }else {
                let reqBody = req.body;
                let data = await deathModel.create(reqBody);
                return res.status(201).json({
                    status: 'success',
                    data:data
                });
            }
        }catch (e) {
            return res.status(500).json({
                status: 'fail',
                msg: 'Something went wrong'
            })

        }
    }
}

const deathControllers = new DeathController();

module.exports = deathControllers;