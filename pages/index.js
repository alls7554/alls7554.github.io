import styled from 'styled-components';
import Contents from '../components/Contents';
import Header from '../components/Header';
import Owner from '../components/Owner';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <SideBar>
        <Owner />
        <Profile />
      </SideBar>
      <ContentsField >
        <Contents />
      </ContentsField>
    </div>
  )
}

const SideBar = styled.div`
  display: flex;
  width: 25%;
`;

const ContentsField = styled.div`
  display: flex;
  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.borderColor};
  flex-direction: column; 
  width: 100%;
  color: rgb(51 65 85/var(--text-opacity))
`