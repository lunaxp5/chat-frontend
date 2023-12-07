import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerSt = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 2s linear infinite;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface SpinnerProps {
  page?: boolean;
}
const Spinner = ({ page }: SpinnerProps) => {
  if (page) {
    return (
      <Wrapper>
        <SpinnerSt />
      </Wrapper>
    );
  }
  return <SpinnerSt />;
};

export default Spinner;
