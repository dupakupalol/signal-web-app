import Footer from "../componets/Footer"
import Header from "../componets/Header"

function Options(){
    return(
        <>
            <Header />
            <OptionsContent />
            <Footer/>
        </>
    )
}
function OptionsContent(){
    return(
        <>
            <h1>Options</h1>
            <a href="/crypto" target="_blank">Crypto</a>&nbsp;
            <a href="/dropshipp" target="_blank">Dropshipp</a>&nbsp;
            <a href="/socials" target="_blank">Socials</a>
        </>
    )
}

export default Options