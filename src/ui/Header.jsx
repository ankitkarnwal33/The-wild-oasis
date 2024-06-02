import styled from "styled-components";
import Logo from "../../public/Logo";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4rem;
  border-bottom: 1px solid var(--color-grey-100);
`;
function Header() {
  return <StyledHeader>header</StyledHeader>;
}

export default Header;
