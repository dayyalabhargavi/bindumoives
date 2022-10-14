const Home = () => {
    let images=[
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQSVw765r8lrV9ffNukGvxJuZv0dCaytQ2w&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK3BQlDqPjp-tCROtuQFkKRZiZjxqo_BS7g&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSGENX1pihvzEOMqq4HembEptTSpAj2gMLA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwMsAlHvVlCjGKGowxPoD3qnz-iwxvwsTRQ&usqp=CAU" },
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGIQ0rbLYo--ieIPSJf6sRNoUmk6Qqgd-BQ&usqp=CAU"}

    ]
    return ( 
        <div className="home">
            <div className="poster">
                <img width="1500" height="500" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6829/1306829-h-ce6bbfe52849" alt="" />
            </div>
            <div className="moives_list">
                { images.map((data)=>{
                    return(
                        <img height="375" width="270" src={data.img} alt="" />

                    )
                })}

            
                
            
            </div>

        </div>
     );
}
 
export default Home;