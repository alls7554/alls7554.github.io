import styled from "styled-components";

export default function Owner() {
  return (
    <Container>
      <OwnerTitle>Blog By </OwnerTitle>
      <Name>Charlie</Name>
    </Container>
  );
}

const Container = styled.div`
  top: 0;
  writing-mode: vertical-rl;
  line-height: 1.75rem;
  padding: 3rem 0;
  width: 4rem;
  white-space: nowrap;
  align-items: center;
  flex: none;
  position: sticky;
  display: flex;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const OwnerTitle = styled.span`
  font-family: --font-mono;
  color: rgb(100 116 139 / var(--text-opacity));
`;

const Name = styled.span`
  color: rgb(15 23 42 / var(--text-opacity));
  font-weight: 700;
  gap: 1.5rem;
  margin-top: 1.5rem;
  display: flex;
`;
