import React, { useContext } from 'react'
import assets from '../../assets/assets'
import { AuthContext } from '../../../context/AuthContext';

const Navbar = () => {
  const {authUser}=useContext(AuthContext);
  return (
    <div className='flex flex-row justify-around py-1 bg-white items-center'>
      {/*left section*/}

      <div className='flex flex-row items-center'>
        <img className='w-20 rounded-2xl'  src={assets.resume_logo} alt="resume logo" />
        <p className='text-2xl font-medium text-cyan-800'>Resume Analyzer</p>
      </div>
      {/*center section*/}
      <p className='text-2xl font-medium text-cyan-800'>{authUser?.name}</p>
      {/*right section*/}
      <p>Resume Analyzer</p>

    </div>
  )
}

export default Navbar