import styled from "styled-components";


export const Conteiner = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ddd;
    font-size: 1.5em;
    overflow-y: hidden;


    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    ul li{
        list-style: none;
        margin: 8px auto;
        font-weight: 700;
        text-transform: uppercase;
        font-family: sans-serif;
    }
    ul li .active{
        padding: 5px 10px;
        color: white;
        background: black;
        border-radius: 4px;
    }
`