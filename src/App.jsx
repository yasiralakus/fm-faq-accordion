import { useState } from "react"

export default function App() {

    const [isClicked1, setIsClicked1] = useState(true);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);


    return (
        <div className="full-page">

            <div className="background-img"></div>

            <div className="main-box">

                <header>
                    <img src="./images/icon-star.svg" alt="" />
                    <h1>FAQs</h1>
                </header>

                <main>

                    <div className="faq-element" onClick={() => (isClicked1 === true ? setIsClicked1(false) : setIsClicked1(true) )}>

                        <header>
                            <h3>What is Frontend Mentor, and how will it help me?</h3>

                            <button>{isClicked1 ? <img src="./images/icon-minus.svg" alt="" /> : <img src="./images/icon-plus.svg" alt="" />}</button>
                        </header>

                        {isClicked1 && 

                            <main>
                                <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.</p>
                            </main>
                            
                        }

                    </div>

                    <div className="faq-element"  onClick={() => (isClicked2 === true ? setIsClicked2(false) : setIsClicked2(true) )}>

                        <header>
                            <h3>Is Frontend Mentor free?</h3>

                            <button>{isClicked2 ? <img src="./images/icon-minus.svg" alt="" /> : <img src="./images/icon-plus.svg" alt="" />}</button>
                        </header>

                        {isClicked2 && 

                            <main>
                                <p>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
                            </main>
                            
                        }

                    </div>

                    <div className="faq-element"  onClick={() => (isClicked3 === true ? setIsClicked3(false) : setIsClicked3(true) )}>

                        <header>
                            <h3>Can I use Frontend Mentor projects in my portfolio?</h3>

                            <button>{isClicked3 ? <img src="./images/icon-minus.svg" alt="" /> : <img src="./images/icon-plus.svg" alt="" />}</button>
                        </header>

                        {isClicked3 && 

                            <main>
                                <p>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
                            </main>
                            
                        }

                    </div>

                    <div className="faq-element"  onClick={() => (isClicked4 === true ? setIsClicked4(false) : setIsClicked4(true) )}>

                        <header>
                            <h3>How can I get help if I'm stuck on a challenge?</h3>

                            <button>{isClicked4 ? <img src="./images/icon-minus.svg" alt="" /> : <img src="./images/icon-plus.svg" alt="" />}</button>
                        </header>

                        {isClicked4 && 

                            <main>
                                <p>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
                            </main>
                            
                        }

                    </div>

                </main>

            </div>

        </div>
    )
}