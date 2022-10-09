const jwt = require('jsonwebtoken')



export default async function VerifyToken(token) {
    try {
        const compare = jwt.verify(token, process.env.ACCESS_TOKEN)
        if (!compare) return { state: false, message: 'token not valid', code: 403 }
        const decode = jwt.decode(token)
        return { state: true, message: decode }
    } catch (error) {
        return { state: false, message: error, code: 403 }
    }
}
