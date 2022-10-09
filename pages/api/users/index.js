import ResponseJson from "../../../src/Backend/Utils/Response/ResponseJson";
import VerifyToken from "../../../src/Backend/Utils/Token/VerifyToken";



export default async function handler(req, res) {
    let token = req.headers.authorization
    if(token) token = token.split(' ')[1]
    if (!token) return ResponseJson(res, { state: false, message: 'token is null' ,code:403})
    const verify = await VerifyToken(token)
    if (!verify.state) return ResponseJson(res, verify)
    console.log(verify);
    return ResponseJson(res, verify)

}