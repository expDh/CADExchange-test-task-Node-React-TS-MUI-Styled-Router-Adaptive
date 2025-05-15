import styled from "styled-components";

const formCss = {
    ContactContainer: styled.div`
        width: 100%;
        height: 1000px;
        background-color: rgb(239, 239, 239);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -100px;
        

        h1 {
            margin-bottom: 25px;
            font-size: 50px;
        }
        @media (max-width: 600px) {
            width: 600px;
        }
    `,




    FormContainer: styled.form`
        width: 400px;
        height: 65%;
        background-color: #ffffff;
        border-radius: 30px;
        padding: 50px;
        -webkit-box-shadow: 0px 0px 9px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 0px 0px 9px 0px rgba(66, 68, 90, 1);
        box-shadow: 0px 0px 9px 0px rgba(66, 68, 90, 1);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        



    `,
    Label: styled.label`
        font-size: 24px;
        margin-bottom: 10px;
        
        
        
        
    `,
    Input: styled.input`
        width: 100%;
        height: 50px;
        padding-left: 10px;
        font-size: 16px;
        border-radius: 5px;
        
        border: 1px solid #000000;
        transition: border-color 0.3s;

        &:focus {
            outline: none;
            border-color: #3f51b5;
        }
    `,
    Area: styled.textarea`
        padding: 10px;
        font-size: 16px;
        height: 150px;
        width: 100%;
        resize: vertical;
        border-radius: 5px;
        border: 1px solid #000000;
        transition: border-color 0.3s;

        &:focus {
            outline: none;
            border-color: #3f51b5;
        }
    `,
    Button: styled.button`
        align-items: center;
        width: 250px;
        height: 70px;
        background-color: rgb(28, 28, 28);
        color: white;
        font-size: 20px;
        cursor: pointer;
        border-radius: 10px;
        margin: 20px;
        align-self: center;

        a {
            text-decoration: none;
            color: inherit;

        }

        &:hover {
            background-color: rgb(101, 101, 101);
            color: #000000;
        }
    `,ButtonWrapper: styled.div`
        width: 300px;
        margin-top: 20px;
        
    `






}
export default formCss;
