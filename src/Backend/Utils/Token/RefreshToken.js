
var jwt = require('jsonwebtoken');

const RefreshKey = process.env.REFRESH_TOKEN


export default async function RefreshToken(payload) {
    return jwt.sign(payload, RefreshKey, { expiresIn: '24h' })
}
