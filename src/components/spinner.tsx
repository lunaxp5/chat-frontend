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

const Spinner = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 2s linear infinite;
`;

export default Spinner;
