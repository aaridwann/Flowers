import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import AlertComponent from '../../src/Frontend/Components/Alert/AlertComponent'
import FormComponent from '../../src/Frontend/Components/Form'
import Color from '../../src/Frontend/Constant/Colors/Color'
import { AuthStore } from '../../src/Frontend/Utils/Store'


const options = ['email', 'password']

function LoginPage() {
  const router = useRouter()
  const { state, fetchUser } = AuthStore(state => state)

  async function submit(data) {
    await fetchUser(data)
  }

  useEffect(() => {
    if (state.state) router.push('/')
  }, [state.state])

  return (
    <div className=' w-full min-h-screen px-8 bg-slate-100 flex flex-col items-center justify-start overflow-hidden '>
      <AlertComponent message={state.message} error={state.error} />
      {/* {state.error && <AlertComponent message={state.message} error={state.error} />} */}
      <h2 className=' text-3xl font-bold mt-20'>Hello, Again !</h2>
      <p className=' mt-4 text-xl text-center'>Welcome back you have been missed!</p>

      <FormComponent options={options} color={Color.cerah} result={(e) => submit(e)} />
    </div>
  )
}

export default LoginPage

const initialState = {
  loading: false,
  error: false,
  success: false,
  message: '',
  token: null
}
const typeReducer = {
  startFetch: "START_FETCH",
  successFetch: "SUCCESS_FETCH",
  errorFetch: "ERROR_FETCH",
  turnOfError: "ERROR_OF",
}

function Reducers(state, actions) {
  const router = useRouter()
  const { payload } = actions
  switch (actions.type) {
    case typeReducer.startFetch:
      return ({ ...state, loading: true })
    case typeReducer.successFetch:
      return ({ ...state, loading: false, data: payload.data, success: true, token: payload.message })
    case typeReducer.errorFetch:
      return ({ ...state, loading: false, data: null, error: true, message: payload.message })
    case typeReducer.turnOfError:
      return ({ ...state, loading: false, data: null, error: false, message: '' })

    default:
      state
  }
}


// export function getServerSideProps(ctx) {
//   const token = ctx.req.cookies.token
//   if (token) return {
//     redirect: {
//       permanent: false,
//       destination: "/ ",
//     }
//   }

//   return {
//     props: {}
//   }
// }