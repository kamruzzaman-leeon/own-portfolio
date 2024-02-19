import { Link } from 'react-router-dom';
import Home from '../Page/Home/Home';

const Main = () => {
    const navitem = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Skills</Link></li>
        <li><Link>Portfolio</Link></li>
        <li><Link>Testimonial</Link></li>
        <li><Link>contact</Link></li>
    </>
    return (
        <div className="drawer max-w-[1200px] mx-auto">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">LEEON</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {
                                navitem
                            }

                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <Home></Home>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {
                        navitem
                    }
                </ul>
            </div>
        </div>


    );
};

export default Main;