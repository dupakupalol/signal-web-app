import Footer from "../../componets/Footer"
import Header from "../../componets/Header"
import "../../css/home.css"

function Home(){
    return(
        <>
            <Header />
            <div className="box">
                <h1>
                Smart Profit with AI.<br></br>
                Start Earning,<br></br>
                Right Now!
                </h1>
                <p>
                Use the potential of artificial intelligence.<br></br>
                Time is running out, join now or get left behind.
                </p>
            </div>
            <a href="/options"><button>Check Out!</button></a>
            <Footer/>
        </>
    )
}

export default Home