import styled from "styled-components";

interface TextProps {
  $align?: "center" | "left" | "right";
  color?: string;
}

const Text = styled.p<TextProps>`
  font-family: Poppins;
  font-size: 14px;
  color: ${({ theme, color }) => (color ? theme[color] : theme.text)};
  text-align: ${({ $align }) => $align ?? "left"};
`;
export default Text;
