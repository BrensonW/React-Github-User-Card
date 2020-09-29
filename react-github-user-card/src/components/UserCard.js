// Importing Dependancies

import React from 'react';
import styled from 'styled-components';


// Styling Cards


const Card = styled.div`
display: flex;
justify-content: center;
background: chocolate;
margin: 7% 0 7% 35%;
width: 30%;
height: auto;
box-shadow: 7px 20px 15px 5px;
`;


const UserCard = (props) => {
    console.log(props);

    return(
        <Card>
            <img width="200"  src={props.userInfo.avatar_url} alt="Profile Pictures of account" />
            <div>
                <h3>{props.userInfo.name}</h3>
                <p>{props.userInfo.login}</p>
                <p>{props.userInfo.location}</p>
                < a href={props.userInfo.html_url}>{props.userInfo.login}'s Profile</a>
            </div>
        </Card>
    );
};
export default UserCard;