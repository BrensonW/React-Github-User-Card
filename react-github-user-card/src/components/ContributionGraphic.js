import React from 'react';
import {Container, Col} from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';

const Graph = styled.div` 
background-color: chocolate;
width: 65%;
margin-left: 20%;
`;

const graphic = document.getElementsByClassName("graphic");

class ContributionGraphic extends React.Component {

    componentDidMount() {
        const proxyURL = "https://cors-anywhere.herokuapp.com/";
        const contributeURL = "https://github.com/users/BrensonW/contributions";
        
        axios.get(proxyURL + contributeURL).then(response => {
            console.log(response);
            graphic[0].insertAdjacentHTML("afterbegin", response.data);
          });
      }
  
      render(){
          return(
              <Graph>
              <Container>
                  <Col xs="auto" className="graphic text-center"></Col>
              </Container>
              </Graph>
  
          );
      }
  
  }
  
  export default ContributionGraphic;
    