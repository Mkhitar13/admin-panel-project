import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledAppBar = styled('div')({
      backgroundColor: 'transparent',
      border: '2px solid #2196f3', // Replace with your desired border color
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
});

const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;
  color: white;

  &.active {
    color: #2196f3; /* Change to your desired active color */
    font-weight: bold; /* Add any other styles for the active link */
  }
`;

const Header = () => {
      return (
            <StyledAppBar>
                  <StyledNavLink to="/all-products">
                        All Products
                  </StyledNavLink>
                  <StyledNavLink to="/admin-list">
                        All Admin List
                  </StyledNavLink>
            </StyledAppBar>
      );
};

export default Header;
