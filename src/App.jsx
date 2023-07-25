import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Todo from './components/pages/Todo'
import Lyrics from './components/pages/Lyrics'
import Sentiment from './components/pages/Sentiment'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        
        <Route path="/features/lyrics" Component={Lyrics} />
        <Route path="/features/sentiment" Component={Sentiment} />
        <Route path="/features/todo" Component={Todo} />
        {/* <Route path="/features/gallery" Component={Gallery} /> */}
      </Routes>
    </>
  );
}

export default App;
