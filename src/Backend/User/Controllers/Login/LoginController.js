import ReturnState from '../../../Utils/ReturnState'
import UserDb from '../../Models'

 const bcrypt = require('bcryptjs')


export default async function LoginController(body) {
    const { email, password } = body
    if (!email || !password) return ReturnState(false,'data tidak lengkap')

    const user = await UserDb.findOne({email:email})
    if(!user) return ReturnState(false,'user not found')

    const compare = await bcrypt.compare(password,user.password)
    if(!compare) return ReturnState(false,'password not match')
    // console.log(user);
    ReturnState(true, {user})

}
