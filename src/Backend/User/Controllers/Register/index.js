import ConnectionDb from '../../../Utils/Connection/Mongoose';
import UserDb from '../../Models';

var bcrypt = require('bcryptjs');

export default async function RegisterController(body) {
    let { name, email, password } = body
    if (!name || !email || !password) return { state: false, message: 'data not complete', code: 406 }

    var salt = bcrypt.genSaltSync(12);
    body.password = await bcrypt.hash(password, salt)

    await ConnectionDb()

    try {
        const insert = await new UserDb(body).save()
        return { state: true, message: 'success created', code: 201 }
    } catch (error) {
        return { state: false, message: { error }, code: 406 }

    }
}
