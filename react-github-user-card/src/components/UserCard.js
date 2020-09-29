// Importing Dependancies

import React from 'react';
import styled from 'styled-components';


// Styling Cards


const Card = styled.div`
display: flex;
justify-content: center;
background: chocolate;
margin: 20% 300% 20% 150%;
width: 75%;
height: auto;
`;


const UserCard = (props) => {
    console.log(props);

    return(
        <Card>
            <img src={props.userInfo.avatar_url} />
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