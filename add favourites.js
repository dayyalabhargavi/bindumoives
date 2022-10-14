const Addfavourites = () => {
    return ( 
        <div className="addfavourites">
            <div className="form">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt=""></img>
                <form action="">
                    <input type="text" placeholder="title"></input>
                    <input type="text" placeholder="genre"></input>
                    <input type="text" placeholder="language"></input>
                    <input type="number" min="0" max="10" placeholder="rating"></input>
                    <button>Add</button>
                </form>
            

            </div>
            <div className="content">
                <h1>Add your favourites moives and TV shows </h1>
            </div>
        </div>
     );
}
 
export default Addfavourites;