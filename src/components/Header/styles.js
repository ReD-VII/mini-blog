import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    background: white;
    box-shadow: rgba(0,0,0, .15) 0px -2px 10px 0px;


    .cont_box{
        display: flex;
        align-items: center;
        height: 100%;
        /* background: yellowgreen; */
    }
    .cont_box:nth-child(1){
        justify-content: flex-end;
        padding-right: 8%;
        width: 32%;
        /* background: steelblue; */
    }
    .cont_box:nth-child(2){
        width: 46%;
        /* background: steelblue; */
    }
    .cont_box:nth-child(3){
        justify-content: flex-end;
        padding-right: 0px;
        width: 32%;
        /* background: steelblue; */
    }
    .cont_box img{
        width: 3em;
    }




    .nav_menu{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 100%;
        /* background: blue; */
    }
    .nav_menu ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* justify-content: center; */
        width: 100%;
        height: 100%;
    }
    .nav_menu ul li {
        display: flex;
        align-items: center;
        width: auto;
        margin: 0px 6px; 
        font-weight: bolder;
        text-decoration: none;
        list-style: none;
    }
    .nav_menu ul li a{
        font-size: 1em;
    }
   
    .nav_menu ul li .active{
        padding: 5px 10px;
        color: white;
        background: black;
        border-radius: 4px;
    }



    @media (max-width: 600px) {
        &{
            height: 50px;
        }
        .cont_box{
            height: 50px;
        }
        .cont_box:nth-child(1){
            justify-content: flex-start;
            margin-left: 20px;
        }
        .cont_box img{
            width: 2em;
        }
    }

`