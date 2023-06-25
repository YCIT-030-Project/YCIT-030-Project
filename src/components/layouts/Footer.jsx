import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 10px auto;
  padding: 10px;
  background-color: #f5f5f5;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    justify-content: flex-end;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <footer className="footer">
        <div>
          <h3>Abdulrahman Al-Dukhn</h3>
        </div>
      </footer>
    </StyledFooter>
  );
};

export default Footer;
