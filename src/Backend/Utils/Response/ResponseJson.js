import React from 'react'

export default function ResponseJson(res, data) {
    return res.status(data.code || data.state ? 200 : 406).json({ state: data.state, message: data.message })
}
