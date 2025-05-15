import styled from "styled-components";

const css = {
    ButtonUI: styled.button`
        width: 150px;
        height: 40px;
        background-color: rgb(28, 28, 28);
        color: white;
        font-size: 20px;
        cursor: pointer;
        border-radius: 10px;
        margin: 20px;

        a {
            text-decoration: none;
            color: inherit;

        }

        &:hover {
            background-color: rgb(214, 214, 214);
            color: #000000;
        }


    `,
    HeaderContainer: styled.header`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 1000;
        width: 100%;
        
        background-color: rgb(255, 255, 255);
        padding: 30px;
        box-shadow: 0px -4px 5px -5px rgba(34, 60, 80, 0.6) inset;

        height: 10vh;
        min-height: 80px;
        max-height: 120px;
        flex-shrink: 0;

        @media (max-width: 1200px) {
            
            padding: 70px;
            height: auto;
        }
        @media (max-width: 600px) {
            width: 600px;
        }
    `,
    FooterContainer: styled.footer`
        display: flex;
        flex-direction: row;
        align-items: center;
        position: sticky;
        justify-content: space-between;
        bottom: 0;
        z-index: 1000;
        width: 100%;
        
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;

        height: 10vh;
        min-height: 80px;
        max-height: 120px;
        flex-shrink: 0;
        @media (max-width: 600px) {
            width: 600px;
        }
       
    `,
    HeaderCSS: {
        Logo: styled.div`
            font-size: 24px;
            color: rgb(0, 0, 0);
            font-weight: 600;

        `,
        MenuContainer: styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            position: relative;
            font-size: 24px;
            font-weight: 600;

            color: rgb(0, 0, 0);
        `,


    },
    FooterCSS: {
        Text: styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            width: 100%;
            height: 100px;
            font-weight: 600;
            color: #000000;
        `
    },
    MainContainer: styled.main`
        width: 100%;
        height: 1500px;
        overflow-y: auto;
        flex: 1;
        background-color: rgb(255, 255, 255);
        @media (max-width: 1200px) {
            height: 1400px;
        }
        @media (max-width: 600px) {
            width: 600px;
        }
    `,



    MainVideo: {

        Section: styled.div`
            width: 100%;
            background-color: rgb(239, 239, 239);
            height: 30%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-right: 100px;
            padding-left: 100px;
            align-items: center;
            
            @media (max-width: 1200px) {
                height: auto;
                flex-direction: column;
                padding-right: 20px;
                padding-left: 20px;
                p{font-size: 30px}
            }
            @media (max-width: 600px) {
                width: 600px;
                padding: 0;
            }
        `,
        VideoContainer: styled.div`
            width: 40%;
            height: 350px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            iframe {
                width: 100%;
                height: 100%;
                border: none;
            }
            @media (max-width: 1200px) {
                width: 80%;
                flex-direction: column;
                margin-bottom: 50px;

            }
        `,
        TextContainer: styled.div`
            display: flex;
            flex-direction: column;
            gap:30px;
            width: 40%;
            p{font-size: 18px}
            @media (max-width: 1200px) {
                padding: 0;
                width: 70%;
                h1{ margin-top: 20px;
                    font-size: 30px}
                p{font-size: 24px;
                margin-bottom: 20px;}
            }
            

        `

    },
    MainCard: {

        Section: styled.div`
            width: 100%;
            background-color: rgb(255, 255, 255);
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-right: 100px;
            padding-left: 100px;
            align-items: center;
            box-shadow: 0px 4px 5px -5px rgba(34, 60, 80, 0.6) inset;

            h1 {
                font-size: 40px;
                padding-bottom: 50px;
                padding-top: 50px;
                
            }
            @media (max-width: 1200px) {
                height: auto;
            }
            @media (max-width: 600px) {
                width: 600px;
                padding-right: 40px;
                padding-left: 40px;
            }
        `,
        CardSection: styled.div`
            width: 100%;
            
            height: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-right: 50px;
            padding-left: 50px;
            align-items: center;
            gap:50px;
            
            @media (max-width: 900px) {
                padding-right: 0px;
                padding-left: 0px
            }
            
        `,
        CardContainer: styled.div`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-end;
            width:25%;
            h2{
                font-size: 32px;
            }
            @media (max-width: 1200px) {
                width:40%;
            }
            
        `,
        ItemContainer: styled.div`
            display: flex;
            flex-direction: column;
            
            justify-content: space-around;
            align-items: center;
            width: 100%;
            font-size: 20px;
            
        `,
        TextContainer: styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            flex-direction: column;
            gap:30px;
            width: 60%;
            
            

        `

    },





    MainSend: {

        Section: styled.div`
            width: 100%;
            background-color: rgb(239, 239, 239);
            height: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding-right: 100px;
            padding-left: 100px;
            align-items: center;
            box-shadow: 0px 4px 5px -5px rgba(34, 60, 80, 0.6) inset;
            h1{
                font-size: 40px;
            }
        `

    },


}

export default css;
