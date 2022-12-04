import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  height: 500px;
`;

export const ElWrapper = styled.div`
  background-image: ${(props: any) => props.testImg};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 580px;
`;
