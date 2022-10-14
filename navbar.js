const Navbar = () => {
    let navbar_links =[
        {link:"Home", path:"/" },
        {link:"About", path:"/about"},
        {link:"Favourites", path:"/favourites"},
        {link:"Signup", path:"/addfavourites"}]
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"alt="" />
            </div>
            <div className="links">
                {navbar_links.map((data)=>{
                    return(
                        <a href={data.path}>{data.link}</a>
                    )
                }

                )}
                
            </div>

        </div>
     );
}
 
export default Navbar;