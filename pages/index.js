import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LayoutComponent from '../src/Frontend/Components/Layout'
import { removeUser, updateUser } from '../src/Frontend/Redux/Slice/userSlice'
function Home() {
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()

  function click() {
    let data = {
      user: {
        name: 'ridwan',
        age: 20
      },
    }
    // if (user.user) return dispatch(removeUser())
    dispatch(updateUser(data))
  }
  useEffect(() => {
    click()
  }, [])


  // console.log(user);
  return (
    <LayoutComponent>
      <h1 className=' bg-white'>Homepage</h1>
      <h1 className=' bg-primary p-4 m-4 text-white'>{user?.user?.name}</h1>
      <button onClick={click} className='btn btn-sm' >Click</button>
    </LayoutComponent>
  )
}

export default Home