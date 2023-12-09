import './App.css';

export function CurrentProjects() {
    return (
        <>
            <Project1 />
            {/* <Project2 /> */}
        </>
    );
}

export function Project1 () {
    return (
        <div>
            I am currently working on using Haskell for an implementation of RSA encryption. Skills: Haskell, Cryptography,
            Functional Programming

        </div>
    )
}

export function Project2 () {
    return (
        <div>
            I am also currently working on a Python web-crawler to test the urban legend that 
            all wikipedia pages link back to the philosophy page. Skills: Python 
        </div>
    )
}