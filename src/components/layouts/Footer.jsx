import styled from "styled-components";

const StyledFooter = styled.footer`
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(121, 121, 121);
    color: white;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </StyledFooter>
  );
};

export default Footer;
