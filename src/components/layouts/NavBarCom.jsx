import styled from "styled-components";

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #d3d3d3;
    display: flex;
    justify-content: center;
  }

  li {
    float: none;
  }

  li a {
    display: block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #555555;
  }
`;

const NavBarCom = () => {
  return (
    <StyledNav>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
};

export default NavBarCom;
