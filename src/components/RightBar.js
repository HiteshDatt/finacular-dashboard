import '../styles/RightBar.css'
import illustration1 from '../assets/illustration1.png'
import illustration2 from '../assets/illustration2.png'

function RightBar() {
    return (
        <aside className="right-bar">
            <div className="top">
                <button>Actions</button>
            </div>
            <div className="card card-one">
                <img src={illustration1} alt="compounding"/>
                <span>
                    Understanding the power of compounding!!
                </span>
                <button>Learn Now</button>
            </div>
            <div className="card card-two">
                <img src={illustration2} alt="Track expenses"/>
                <span>
                    Track all your expenses on a daily basis
                </span>
                <button>Track Now</button>
            </div>
        </aside>
    )
}

export default RightBar
