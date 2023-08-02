const Navbar = () => {
    return (
        <nav className="bg-transparent-30">
            <div className="container_wrapper py-5 flex items-center justify-between mx-auto">
                <a href="#" className="flex">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">LOGO</span>
                </a>
                <div className="">
                    <ul className='flex items-center space-x-3'>
                        <li className=''><a href="#">Link1</a></li>
                        <li className=''><a href="#">Link2</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;