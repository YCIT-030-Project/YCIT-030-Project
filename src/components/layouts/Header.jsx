import styled from "styled-components";

const StyledHeader = styled.header`
  .heroBanner {
    height: 100%;
  }
  .heroBanner > div {
    height: 100%;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    background-size: auto;
    background-position-x: left;
    display: flex;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position-y: 60%;
  }
  .heroBanner > div > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <header className="heroBanner">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),url(${"https://images.unsplash.com/photo-1497214068716-571605b05ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"})`,
          }}
        >
          <div>
            <h2>Home Page</h2>
          </div>
        </div>
      </header>
    </StyledHeader>
  );
};

export default Header;
