import userMD from '../models/user.md';
import bcrypt  from 'bcrypt';

module.exports = {
    register: async (req, res) => {
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword;
        //let check = await bcrypt.compare(req.body.password, dbpass); => true or false
        if (req.file) {
            req.body.avatar = `images/users/${req.file.filename}`
        }
        try {
            let modelRes = await userMD.register( req.body);
            if (modelRes.status) {
                return res.status(200).json(modelRes)
            }
            return res.status(500).json(modelRes)
        }catch(err) {
            return res.status(500).json({
                message: "Lỗi controller!"
            })
        }
    },
    find: async (req, res) => {
        try {
            let modelRes = await userMD.find();
            if (modelRes.status) {
                return res.status(200).json(modelRes)
            }
            return res.status(500).json(modelRes)
        }catch(err) {
            return res.status(500).json({
                message: "Lỗi controller!"
            })
        }
    },
}