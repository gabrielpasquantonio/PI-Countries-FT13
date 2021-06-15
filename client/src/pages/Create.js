import Header from "../components/Header";
import CreateForm from "../components/CreateForm";
import styled from "styled-components";
import PhoneHeader from "../components/PhoneHeader";
import Footer from "../components/Footer";

function Create() {
  return (
    <div>
      <Header />
      <PhoneHeader/>
      <Container>
    
          <InnerLayout className={"contact-section"}>
            <div className="left-content">
              <CreateForm />
            </div>
           
          </InnerLayout>
     
      </Container>
      <Footer/>
    </div>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
`;
const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 100%;
      }
    }
  }
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
 
  height: auto;
`;
const Title = styled.div`
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`

height: 100%;

`;

const InnerLayout = styled.div`
    padding: 5rem 0;
`;


export default Create;
