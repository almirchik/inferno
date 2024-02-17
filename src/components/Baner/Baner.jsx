import "./Baner.css";


export default function Baner(){
    return(
        <>
        
        <div className="baner">
            <div className="baner-text">
            <p>Inferno</p>
            </div>
            <div className="baner-category">
                <div className="baner-category1">
                    <button>Мужчины</button>
                </div>
                <div className="baner-category1 cat2">
                    <button>Женщины</button>
                </div>
                <div className="baner-category1 cat3">
                    <button>Аксессуары</button> 
                </div>
            </div>
        </div>
        
        </>
    )
}