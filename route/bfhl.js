import express from "express"
const router = express.Router()

import {bfhlGet,bfhlPost} from '../controller/bfhl.js'

router.get('/',bfhlGet)
router.post('/',bfhlPost)

export default router;