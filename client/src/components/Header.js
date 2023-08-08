import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <nav className='bg-slate-200 mb-4 p-0'>
            <div className=''>
                <a className='' href="/">
                    <div className='flex items-center'>
                        <img src={logo} alt="logo" className='mr-2' />
                        <div>ProjectMERN</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Header
