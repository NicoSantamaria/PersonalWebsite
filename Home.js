import './App.css';


export function Home() {
    return (
        <>
          <Introduction />
          <AboutMe />
        </>
    );
}

function Introduction () {
    return (
        <div>
            <h1>Welcome!</h1>
            <p>
                I love pursuing and discovering creative, elegant solutions to thorny problems,
                and learning above all else. I offer a
                broad, versatile base of academic and professional experience in mathematics, 
                computer science, Spanish, effective written and oral communication, administrative 
                and organizational work, and music. I am excited by challenges and opportunities for growth.
            </p>
            <table>
                <tr>
                    <td>
                        <h3>Education</h3>
                        <p>
                            Pomona College, <i>Claremont, California</i>
                        </p>
                        <p>
                            BA, <i>Mathematics & Statistics, Philosophy</i>
                        </p>
                        <p class='graduation'>August 2021 - May 2025</p>
                        <br></br>
                        <p>
                            Universidad de Buenos Aires, <i>Buenos Aires, Argentina</i>
                        </p>
                        <p>
                            <i>Faculty of Philosophy and Letters</i>
                        </p>
                        <p class='graduation'>February 2024 - July 2024</p>
                        <br></br>
                        <img src={require('./media/2025-Santamaria-Nico.jpeg')} id='portrait' alt='Self portrait' />
                    </td>
                        <td>
                        <h3>Skills</h3>
                        <p>
                            <i>Computer Science: </i>Python, Haskell, React, JavaScript, HTML, CSS, R, Git.
                        </p>
                        <p>
                            Object-oriented programming, Functional programming, Strongly typed languages.
                        </p>
                        <br></br>
                        <p>
                            <i>Mathematics: </i>Linear Algebra, Combinatorics, Cryptography,
                            Number Theory, Abstract Algebra,
                            Discrete Mathematics, Coding Theory.
                        </p>
                        <br></br>
                        <p>
                            <i>Software: </i>Microsoft Office, Salesforce, JIRA, Confluence, RStudio.
                        </p>
                        <br></br>
                        <p>
                            <i>Soft Skills: </i>Written communication, Oral communication, Problem-solving.
                        </p>
                        <br></br>
                        <p>
                            <i>Languages: </i>English, Spanish.
                        </p>
                        <br></br>
                        <h3>Coursework</h3>
                        <p>
                            <i>Computer Science: </i>Intro to Python w/ Topics in AI (Python), Discrete Math and 
                            Functional Programming (Haskell).
                        </p>
                        <br></br>
                        <p>
                            <i>Mathematics: </i>Linear Algebra, Vector Calculus, Intro to Statistics (R), Combinatorial Mathematics,
                            Number Theory & Cryptography, Abstract Algebra I, Advanced Topics - Coding Theory, Principles of Real Analysis.
                        </p>
                        <br></br>
                    </td>
                    <td>
                        <h3>Projects</h3>
                        <p>
                            <b><a href='https://github.com/NicoSantamaria/PersonalWebsite'>Nico-Santamaria.com:</a>
                            </b> Personal website designed from scratch with React,
                            featuring interactive sidebar with functional drop-down menus.
                        </p>
                        <p>
                            <ul>
                                <li>
                                    <i><b>Skills: </b>React, JavaScript, HTML, CSS.</i>
                                </li>
                            </ul>
                        </p>
                        <br></br>
                        <p>
                            <b><a href='https://github.com/NicoSantamaria/SyndromeDecoder'>SyndromeDecoder:</a>
                            </b> Python program for decoding transmitted messages efficiently
                            using syndrome decoding, making use of a custom Python module MatrixMod for linear
                            algebra over finite fields using the Python standard library.
                        </p>
                        <p>
                            <ul>
                                <li>
                                    <i><b>Skills: </b>Python, Linear Algebra, Abstract Algebra, Coding Theory,
                                    Object-Oriented Programming.</i>
                                </li>
                            </ul>
                        </p>
                        <br></br>
                        <p>
                            <b><a href='https://github.com/NicoSantamaria/NimPlayer'>NimPlayer:</a></b> Python
                            AI players for the mathematical game Nim, using either a search algorithm or the theoretically 
                            optimal strategy.
                        </p>
                        <p>
                            <ul>
                                <li>
                                    <i><b>Skills: </b>Python, Algorithms, Object-Oriented Programming, Game Theory</i>
                                </li>
                            </ul>
                        </p>
                        <br></br>
                        <p>
                            <b><a href='https://github.com/NicoSantamaria/ProjectEuler'>Project Euler:</a></b> Efficient
                            Python solutions for the computational puzzles
                            offered by <a href='https://projecteuler.net'>Project Euler</a>.
                        </p>
                        <p>
                            <ul>
                                <li>
                                    <i><b>Skills: </b>Python, Combinatorics, Problem-Solving.</i>
                                </li>
                            </ul>
                        </p>
                        <br></br>
                        <h3>Awards & Honors</h3>
                        <p>
                            <ul>
                                <li>
                                    <i>National Merit Scholar</i>
                                </li>
                                <li>
                                    <i>National AP Scholar</i>
                                </li>
                                <li>
                                    <i>Pomona College Scholar</i>
                                </li>
                                <li>
                                    <i>Scholastic Art & Writing Award</i>
                                </li>
                            </ul>
                        </p>
                    </td>
                </tr>
            </table>
            <p>
                Please feel free to browse the rest of this site to see my projects and other work. All my finished
                projects can be found from the Portfolio tab. You can also find
                source code for everything hosted here on my <a href='https://github.com/NicoSantamaria'>GitHub.</a>
            </p>
        </div>
    );
}

export function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <p>
                I am currently a junior at Pomona College studying math and philosophy. Specifically, I hope to focus my
                studies in pure mathematics, the philosophy of mathematics, and logic, fields which I find exciting and challenging.
                Through coursework and personal interest, I have also been exploring computer science, which this site aims to
                showcase. I love the depth of computer science and the incredibly wide variety of ways computers can be powerful 
                tools. As a result, I am looking to start a career in Software Engineering after graduation.  
            </p>
            <p>
                Though this site focuses on my work in
                math and computer science, I am also passionate about philosophy and music, jazz in particular. Here at Pomona,
                my leisure time is filled with playing trumpet, bass, and piano in bands and enjoying the live music of others. I am preparing
                to study abroad next semester at the Universidad de Buenos Aires in Argentina through Middlebury College, and 
                look foward to immersing myself in a new culture and improving my Spanish.
            </p>
            <p>
                In the time before leaving for Buenos Aires at the end of February, I'll be taking some time off with my family, working on some personal
                coding projects (see the Current Projects tab), practicing Spanish, and reading into lattice-based cryptography
                with Professor Lenny Fukshansky at Claremont McKenna College.
            </p>
            <p>
                Enjoy browsing the site and please do not hesitate to reach out for any reason.
            </p>
        </div>
    );
}