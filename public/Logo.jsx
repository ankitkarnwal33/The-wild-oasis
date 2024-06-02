import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

function Logo() {
  return (
    <StyledLogo>
      <Link to={"/"}>
        <img
          src="/logo-light.png"
          alt="Logo"
          style={{ height: "9.6rem", width: "auto" }}
        />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
