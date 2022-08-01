import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './Logo';
import { useSelector } from 'react-redux';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <Link className="nav-link active" to="/">
              stats
            </Link>
            <Link className="nav-link" to="/all-jobs">
              all jobs
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
