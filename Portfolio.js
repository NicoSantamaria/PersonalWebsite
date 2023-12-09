import './App.css';


export function Portfolio() {
    return (
        <>
            <NicoSantamaria />
            <SyndromeDecoder />
            <NimPlayer />
            <ProjectEuler />
        </>
    );
}

export function NicoSantamaria () {
    return (
        <div>
            <Header title='Nico Santamaria' source_code='https://github.com/NicoSantamaria/PersonalWebsite' />
            <p>
                Nico-Santamaria.com was built from scratch using the React framework, including the interactive
                navigation bar (left) with functional dropdown menus. The highly modular structure of the site
                allows for new posts and pages to be added with minimal effort. 
            </p>
        </div>
    )
}

export function SyndromeDecoder() {
    // Add handleClick function for logic on display
    // LinearCode and MatrixMod components

    return (
        <div>
            <Header title='Syndrome Decoder' source_code='https://github.com/NicoSantamaria/SyndromeDecoder' />
            <p>
                How can you decipher
                a message once errors have been introduced into it? In particular, if a
                message is transmitted through an imperfect channel &#8212; that is, a channel
                with a non-zero probability of introducing errors into the message &#8212; how can
                the original message be safely recovered?
            </p>
            <p> 
                Most well-known, effective codes are linear codes. Linear codes are vector spaces over a finite field, 
                where messages 
                can be expressed as individual vectors. When an erroneous message is received, the goal is
                to decode the message to the "nearest" codeword within the vector space, with respect
                to a metric. 
                Syndrome decoding is a technique that allows for messages to be decoded
                with minimal storage space required after initial computations, harnessing the fact that
                many vectors within a vector space belong to the the same cosets within that vector space,
                and those cosets can be represented by computationally inexpensive syndromes. 
            </p>
            <p>
                In Syndrome Decoder, the Python module MatrixMod.py handles the background mathematics
                (linear algebra operations over a finite field), while LinearCode.py performs the syndrome
                decoding algorithm. Syndrome Decoder is a Python program which uses syndrome decoding to 
                correct for errors in linear codes. 
            </p>
            <p>
                For more on syndrome decoding, linear codes, and coding theory more generally, see: 
                <br></br>
                <cite>Hill, Raymond (1986). A first course in coding theory. Oxford Applied Mathematics and Computing 
                Science Series. Oxford University Press. ISBN 978-0-19-853803-5.</cite>
            </p>
        </div>
    );
}


export function NimPlayer() {
    return (
        <div>
            <Header title='Nim Player' source_code='https://github.com/NicoSantamaria/NimPlayer' />
            <p>
                Nim is a two-player strategy game where players take turn removing objects from distinct stacks. 
                Each turn,the player must remove at least one object, and can remove objects from only one stack
                 at a time. The player wins when her opponent is forced to take the last remaining object(s).
            </p>
            <p>
                Nim has been mathematically solved. For a player in a winning position at any point in the game, 
                there is an optimal strategy which guarantees victory for that player. The winning strategy is 
                to express the number ofobjects in each stack in binary, find the sum of the binary representations 
                as vectors over the finite field of order two, and choose the move which makes the resultant sum 
                equal to zero. 
            </p>
            <p>
                Nim Player allows the user to play Nim against an AI player using the mathematical optimal strategy
                or an AI player using a search algorithm to find winning game states. 
            </p>
        </div>
    )
}


export function ProjectEuler () {
    return (
        <div>
            <Header title='Project Euler' source_code='https://github.com/NicoSantamaria/ProjectEuler' />
            <p>
                <a href='https://projecteuler.net/about'>ProjectEuler.net</a> presents a series of puzzles, 
                mostly combinatorial in nature, which require 
                both mathematical insight and the use of computer programming to solve. The problems can be
                viewed <a href='https://projecteuler.net/archives'>here</a>. My collected Python solutions
                can be found on my GitHub (link above). 
            </p>
        </div>
    );
}

function Header({ title, source_code }) {
    return (
        <>
            <h1>{title}</h1>
            <p class='source_code'>
            View the source code <a href={source_code}>here</a>.
            </p>
        </>
    )
}
