import LoginController from "../../../src/Backend/User/Controllers/Login/LoginController"
import ConnectionDb from "../../../src/Backend/Utils/Connection/Mongoose"
import ResponseJson from "../../../src/Backend/Utils/Response/ResponseJson"
import { setCookie, deleteCookie } from 'cookies-next';


export default async function LoginService(req, res) {
    if (req.method !== 'POST') return ResponseJson(res, { state: false, message: 'method not allowed', code: 401 })
    await ConnectionDb()
    const process = await LoginController(req.body)
    if (!process.state) return ResponseJson(res, process)
    // console.log(process.message.token)
    setCookie('token', process.message.token, { req, res });
    // deleteCookie('key', { req, res });
    return ResponseJson(res, process)
}