import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignUp } from '../Pages';

function App () {
  return (<div className='tst__app'>
        <Router>
            <header className="tst__header">
                <div className="tst__header__wrapper">
                    <h1>App Testing Library</h1>
                </div>
            </header>
            <main className="tst__content">
                <div className="tst__header__wrapper">
                    <Routes>
                        <Route path='/signup' element={<SignUp />} />
                    </Routes>
                </div>
            </main>
            <footer className="tst__footer">
                <div className="tst__header__wrapper">
                
                </div>
            </footer>
        </Router>
    </div>);
}

export default App;
