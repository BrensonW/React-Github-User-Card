import React, {Component} from 'react';
import styled from 'styled-components';
import './App.css';
import UserCard from './components/UserCard';
import ContributionGraphic from './components/ContributionGraphic';

// styling


const Body = styled.div`
background-image: url("https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80") ;
`;


const Headline = styled.h1`
font-size: 2rem;
display: flex;
align-items: center;
justify-content: center;
background: chocolate;
color: blueviolet;
padding-bottom: 5%;
`;

class App extends Component {
  state = {
    userInfo: {},
    followers: [],
    
  };
  

  componentDidMount() {
    console.log("SV: App.js: App, CDM: CDM running");

    // Fetching User Profile

  fetch("https://api.github.com/users/brensonw")
    .then((res) => res.json())
    .then((json) => {
      this.setState({userInfo: json});
      console.log("SV: App.js: CMD: success!", this.state.userInfo);
  })
  .catch((err) => console.log(err));


// Fetching User Followers
 fetch("https://api.github.com/users/brensonw/followers")
.then((res) => res.json())
.then((json) => {
  this.setState({followers: json});
  console.log("SV: App.js: CMD: success!", this.state.followers);
})
.catch((err) => console.log(err));
 }


 // Render To DOM


 render() {
   console.log("SV: App.js: App, render");
   return(
     <Body>
       <Headline>Github User Profiles!</Headline>
       <UserCard userInfo={this.state.userInfo}   />
       <ContributionGraphic />
       {this.state.followers.map((follower) => {
         return <UserCard key={follower.id} userInfo={follower} />
       })}
     </Body>
   );
 }
}


export default App;