import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DopButtonProps {}

const StyledButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  padding: 0 10px;
  background-color: #cfc;
  border: 1px solid #cfc;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border-color: #cfc;
  }
`

export function DopButton(props: DopButtonProps) {
  return (
    <StyledButton>
      DopButton!
    </StyledButton>
  );
}

export default DopButton;
