import React from 'react'
import "./index.scss"

const SearchCourse = () => {
    return (
        <section id='searchcourse'>
            <div className="searchcourseleft">
                <div className="leftdiv">
                    <h1>Register now and get a discount <br /> <span>50%</span> discount until 1 January</h1>
                    <p class="register_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor <br /> nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. <br /> Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                    <button>REGISTER NOW</button>
                </div>

            </div>
            <div className="searchcourseright">
                <div className="bgcolor"></div>
                <div className="inputs">
                    <h1>Search for your course</h1>
                    <input type="text" placeholder='Course Name' />
                    <input type="text" placeholder='Category' />
                    <input type="text" placeholder='Degree' />
                    <button>Search Course</button>
                </div>
            </div>
        </section>
    )
}

export default SearchCourse