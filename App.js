import { useState } from 'react';
import './App.css';
import { Home, AboutMe } from './Home.js';
import { Portfolio, SyndromeDecoder, ProjectEuler, NicoSantamaria, NimPlayer } from './Portfolio.js';
import { CurrentProjects, Project1, Project2 } from './CurrentProjects.js';
import { Blog } from './Blog.js'


function ChoosePage({ page_name }) {
  if (page_name == 'Portfolio') {
    return <Portfolio />
  } else if (page_name == 'Current Projects') {
    return <CurrentProjects />
  } else if (page_name == 'Blog') {
    return <Blog />
  } else if (page_name == 'About Me') {
    return <AboutMe />
  } else if (page_name == 'Project 1') {
    return <Project1 />
  // } else if (page_name == 'Project 2') {
  //   return <Project2 />
  } else if (page_name == 'Syndrome Decoder') {
    return <SyndromeDecoder />
  } else if (page_name == 'Project Euler') {
    return <ProjectEuler />
  } else if (page_name == 'Nico Santamaria') {
    return <NicoSantamaria />
  } else if (page_name == 'Nim Player') {
    return <NimPlayer />
  } else {
    return <Home />
  }
}


function DropdownMenu ( {value, handleClick} ) {
  if (value == 'Home') {
    return (
      <>
        <DropdownList value='About Me' onElemClick={() => handleClick('About Me')} />
      </>
    );
  } else if (value == 'Portfolio') {
    return (
      <>
        <DropdownList value='Nico Santamaria' onElemClick={() => handleClick('Nico Santamaria')}/>
        <DropdownList value='Syndrome Decoder' onElemClick={() => handleClick('Syndrome Decoder')}/>
        <DropdownList value='Nim Player' onElemClick={() => handleClick('Nim Player')}/>
        <DropdownList value='Project Euler' onElemClick={() => handleClick('Project Euler')}/>
      </>
    );
  } else if (value == 'Current Projects') {
    return (
      <>
        <DropdownList value='Project 1' onElemClick={() => handleClick('Project 1')}/>
        <DropdownList value='Project 2' onElemClick={() => handleClick('Project 2')}/>
      </>
    );
  } else if (value == 'Blog') {
    return (
      <>

      </>
    );
  }
}


function DropdownList( {value, onElemClick} ) {
  return (
    <div class="dropdown" onClick={onElemClick}>
      <b>{value}</b>
    </div>
  );
}


function ListElement({ selected, value, onElemClick, handleClick}) {
  if (selected) {
    return (
      <div class='list_element selected'>
        <h1 onClick={onElemClick}>{value}</h1>
        <DropdownMenu value={value} handleClick={handleClick} />
      </div>
    )
  } else {
    return (
      <div class='list_element' onClick={onElemClick}>
        <h1>{value}</h1>
      </div>
    );
  }
}


function MainPage() {
  const [name, setName] = useState(null);

  function handleClick(newName) {
    setName(newName);
  }

  return (
    <div class='container'>
      <div id='list_container'>
        <ListElement
          selected={[
            'Home',
            'About Me'
          ].includes(name)}
          value={'Home'}
          onElemClick={() => handleClick('Home')}
          handleClick={handleClick}
        />
        <ListElement
          selected={[
            'Portfolio',
            'Syndrome Decoder',
            'Project Euler',
            'Nico Santamaria',
            'Nim Player'
          ].includes(name)}
          value={'Portfolio'}
          onElemClick={() => handleClick('Portfolio')}
          handleClick={handleClick}
        />
        <ListElement
          selected={[
            'Current Projects',
            'Project 2',
            'Project 1'
          ].includes(name)}
          value={'Current Projects'}
          onElemClick={() => handleClick('Current Projects')}
          handleClick={handleClick}
        />
        <ListElement
          selected={[
            'Blog'
          ].includes(name)}
          value={'Blog'}
          onElemClick={() => handleClick('Blog')}
          handleClick={handleClick}
        />
      </div>
      <div class='homepage'>
        <ChoosePage page_name={name}/>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <>
      <body>
        <div id='header'>
          <h1><i>NICO SANTAMARIA</i></h1>
          <b>
            Mamaroneck, NY 10543&emsp;&emsp;&emsp;&emsp;&emsp;
            nsanta1101@outlook.com&emsp;&emsp;&emsp;&emsp;&emsp;
            (914) 462-6186
          </b>
        </div>
        <MainPage />
      </body>
    </>
  );
}