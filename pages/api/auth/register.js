import RegisterController from '../../../src/Backend/User/Controllers/Register'
import ConnectionDb from '../../../src/Backend/Utils/Connection/Mongoose'
import ResponseJson from '../../../src/Backend/Utils/Response/ResponseJson'



export default async function RegisterService(req, res) {
    if (req.method !== 'POST') return ResponseJson(res, { code: 404, message: 'gada', state: false })
    const reg = await RegisterController(req.body)
    return ResponseJson(res, reg)
}
