import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: black;
    width: 50%;
    margin: 0 auto;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 6px 6px 6px #2f2e2e;
    margin-top: 5em;
`;

export const Name = styled.h1`
    font-family: arial;
    color: white
`;

export const Text = styled.h2`
    font-family: arial;
    color: white;
    
`;
export const Img = styled.img`
    height: 200px;
    width: 200px;
    border: 3px solid white;
    border-radius: 50%;
    margin-top: 10px
`;

export const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 100%
`;

export const BotaoLinkedIn = styled.a`
    background-color: #0a66c2;
    border-radius: 3px;
    font-family: arial;
    color: white;
    padding: 10px 10px;
    font-size: 20px;
    margin-right: 50px;
    width: 50%;
    height: 100%;
    text-decoration: none;
`;

export const BotaoTwitter = styled.a`
    background-color: rgb(29 161 242);
    border-radius: 3px;
    font-family: arial;
    color: white;
    padding: 10px 10px;
    font-size: 20px;
    width: 50%;
    height: 100%;
    text-decoration: none;
`;

export const Li = styled.li`
    font-family: arial;
    font-size: 20px;
    color: white;
    justify-content: flex-start;
`;