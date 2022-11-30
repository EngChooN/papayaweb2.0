import styled from "@emotion/styled";
import { imgUrl } from "../../../ts/url";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

const LocalImg = styled.img``;

export default function LocalBtn() {
  return (
    <Wrapper>
      <LocalImg src={imgUrl.localImg} />
    </Wrapper>
  );
}
