import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import NavLinks from './NavLinks';
import { toggleSidebar } from '../features/user/userSlice';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
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
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
