import { Route, Routes, Link } from 'react-router-dom';
import PagePeeds from './routes/page-peeds/page-peeds';
import PageLike from './routes/page-like/page-like';
import PageSearch from './routes/page-search/page-search';
import PageProfile from './routes/page-profile/page-profile';

import BtnHome from './components/buttons/btn-home';
import BtnLike from './components/buttons/btn-like';
import BtnSearch from './components/buttons/btn-search';
import Header from './components/header/header';
import Profile from './components/profile/profile';

import styles from './main.module.css';

const Main = (props) => {
    return(
        <div className={styles.mainWrap}>
            <Header />
            <Routes>
                <Route path="/home" element={<PagePeeds /> }></Route>
                <Route path="/search" element={<PageSearch />}></Route>
                <Route path="/like" element={<PageLike />}></Route>
                <Route path="/profile" element={<PageProfile />}></Route>
            </Routes>
            <footer>
                <ul>
                    <Link to="/home"><BtnHome /></Link>
                    <Link to="/search"><BtnSearch /></Link>
                    <Link to="/like"><BtnLike /></Link>
                    <Link to="/profile"><Profile /></Link>
                </ul>
            </footer>
        </div>
    )
};

export default Main;