import LoginController from "../../../src/Backend/User/Controllers/Login/LoginController"
import ResponseJson from "../../../src/Backend/Utils/Response/ResponseJson"

export default async function LoginService(req, res) {
    if (req.method !== 'POST') return ResponseJson(res, { state: false, message: 'method not allowed', code: 401 })
    const process = await LoginController(req.body)
    if (!process.state) return ResponseJson(res, process)
    return ResponseJson(res, process)
    // ResponseJson(res,process)
}