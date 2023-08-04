import express from 'express';
const router = express.Router();
import multer from 'multer';

import userCL from '../../controllers/user.ctl'

const userStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, `user_${Date.now() * Math.random()}.${file.mimetype.split('/')[1]}`)
    }
  })
  
const uploadUserAvatar = multer({ storage: userStorage })

router.post('/',uploadUserAvatar.single("avatar"), userCL.register)
router.get('/', userCL.find)

module.exports = router;