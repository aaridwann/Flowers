var jwt = require('jsonwebtoken');

const accessKey = process.env.ACCESS_TOKEN

export default async function GenerateToken(data) {
    return jwt.sign(data, accessKey, { expiresIn: '24h' });
}
