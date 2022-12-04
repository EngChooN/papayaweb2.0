import styled from "@emotion/styled";
import Footer from "./papaya/footer/Footer";
import Header from "./papaya/header/Header.container";

export default function Layout(props: any) {
  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;

  const Body = styled.main`
    min-height: 100%;
  `;

  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
      <Footer />
    </Wrapper>
  );
}
