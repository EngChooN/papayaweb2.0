import styled from "@emotion/styled";
import Header from "./header/Header.container";

export default function Layout(props: any) {
  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;

  const Body = styled.main``;

  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
