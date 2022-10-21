import React, { useEffect, useState } from 'react'
import Color from '../../Constant/Colors/Color'
const options = ['email', 'password']

function FormComponent({ inputOptions = options, color = Color.cerah, result }) {
    const [state, setState] = useState(AddObject(inputOptions))

    function AddObject(data) {
        let res;
        data.reduce((accumulator, value) => {
            return res = { ...accumulator, [value]: '' };
        }, {})
        return res
    }

    function changeHandler(e) {
        setState(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    function submit(e) {
        e.preventDefault()
        result(state)
    }

    return (
        <div className=' w-full justify-between flex flex-col items-center h-full'>
            <form onSubmit={submit} className='flex flex-col items-start justify-center'>
                {inputOptions.map((input, i) => {
                    let inputName = input.slice(0, 1).toUpperCase() + input.slice(1, input.length)
                    return (
                        <div key={i}>
                            <label className="label">
                                <span className="label-text">Your {inputName}</span>
                            </label>
                            <label className="input-group">
                                <span style={{ backgroundColor: color }} className=' w-32 text-white'>{inputName}</span>
                                <input onChange={(e) => changeHandler(e)} minLength={4} name={input} type={input} required={true} placeholder={input} className="input input-bordered w-full bg-slate-50" />
                            </label>
                        </div>
                    )
                })}
                <button type='submit' style={{ backgroundColor: color }} className=' btn btn-md w-full border-0  mt-8 rounded-lg text-lg font-semibold text-white'>Sign In</button>
                <p className=' self-end  mt-3'>Recovery Password</p>
                <div className="divider lg:divider-horizontal">Or continue with</div>
            </form>
            <p className=' mt-40'>Not a member ? <span style={{ color: Color.cerah }} className=' cursor-pointer '>Register here</span></p>
        </div>
    )
}

export default FormComponent