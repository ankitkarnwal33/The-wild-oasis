import styled from "styled-components";
import Logo from "../../public/Logo";
import MainNav from "./MainNav";
const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 3.2rem 2.4rem;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 2.4 3rem;
`;
function Siderbar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />
    </StyledSideBar>
  );
}

export default Siderbar;
