import ReturnState from '../../../Utils/ReturnState'
import UserDb from '../../Models'
import GenerateToken from '../../../Utils/Token/GenerateToken'
import RefreshToken from '../../../Utils/Token/RefreshToken'



const bcrypt = require('bcryptjs')


export default async function LoginController(body) {
    const { email, password } = body
    if (!email || !password) return ReturnState(false, 'data is not complete')

    try {
        let user = await UserDb.findOne({ email: email })
        if (!user) return ReturnState(false, 'user not found')

        const compare = await bcrypt.compare(password, user.password)
        if (!compare) return ReturnState(false, 'password not match')

        let data = { _id: user.id, name: user.name, email: user.email }

        // ?  === Create Token === 
        const token = await GenerateToken(data)
        const refreshToken = await RefreshToken(data)
        
        // ? === create refresh token in db ===
        await UserDb.updateOne({ _id: data._id }, { $set: { refreshToken: refreshToken } })

        return ReturnState(true, { token })
    } catch (error) {
        return ReturnState(false, error)
    }

}
