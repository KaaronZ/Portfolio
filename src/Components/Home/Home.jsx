import "./Home.css"


const Home = ({selectedPage, setSelectedPage}) =>{
    return (
    
    <div className="mainHome">
        <div className="title">
            <p id='hey'>Hey</p>
            <p id='there'>There</p>
        </div>
        <div className="subTitle">
            <p id='Iam'>I am Gergo, passionate about</p>
            <p id='typeWriter'>Graphic Design</p>
        </div>
        <div className="paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae debitis delectus sint ipsam quod minus vitae deserunt totam vero, dolor eligendi saepe ratione, fuga suscipit. Perferendis, corrupti cum! Aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deserunt, sed unde vel atque quaerat ea quam nesciunt magni dolorum ducimus saepe, commodi non enim quas inventore possimus, esse nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis laborum aspernatur id quam esse voluptatem natus facere maxime voluptatum architecto qui, aliquam totam! Dolores aspernatur dolore laudantium ducimus adipisci!</p>
        </div>
        <div>
            <button className="explore" onClick={()=> setSelectedPage('About Me')}>Explore More</button>
        </div>
    </div>
)
}
export default Home