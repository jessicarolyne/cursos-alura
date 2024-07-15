import styled from "styled-components";
import InputText from "../inputText";

const HeaderEstilizado = styled.header`
 padding : 60px 0;
 display: flex;
 justify-content: space-between;
 img {
  max-width: 212px;
 }
`
const Header = () => {
  return(
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="Logo" />
      <InputText />
    </HeaderEstilizado>
  )
}
export default Header;