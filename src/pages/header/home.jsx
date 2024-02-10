import Footer from "../../componets/Footer"
import Header from "../../componets/Header"
import "../../css/home.css"

function Home(){
    return(
        <>
            <Header />
            <HomeContent />
            <Footer/>
        </>
    )
}

function HomeContent(){
    return(
        <>
        <section className="home">
            <video className="video-slide" src="../src/assets/video.mp4" autoPlay muted loop></video>
            <div className="content">
                <h1 className="homeH1">Signal<br></br>Network</h1>
                <p className="pH1">Use the potential of artificial intelligence.<br></br>Time is running out, join now or get left behind.</p>
                <a href="/options">Check Out!</a>
            </div>
        </section>
        <div>
            <div className="home-crypto"><h1>Crypto</h1></div>
            <div className="home-dropshipp"><h1>E-commerce</h1></div>
            <div className="home-socials"><h1>Socials</h1></div>
        </div>
        </>
    )
}

export default Home