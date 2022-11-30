import styled from "@emotion/styled";
import Header from "./header/Header.container";

export default function Layout(props: any) {
  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
  `;

  const Body = styled.main`
    /* width: 100%;
    height: 100%; */
  `;

  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
