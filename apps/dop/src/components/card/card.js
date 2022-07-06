import styled from 'styled-components';

const StyledCard = styled.div`
  color: pink;
`;

export function Card(props) {
  return (
    <StyledCard>
      <h1>Welcome to Card!</h1>
    </StyledCard>
  );
}
export default Card;
