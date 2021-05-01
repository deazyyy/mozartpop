import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Gilroy', sans-serif;
    font-weight:600 
  }
  body {
    background-color: #fff;
    background:url("images/mozart/background.png");
    background-size: contain;
    background-position:top 3vh left;
	min-height: 100vh;

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .home{
	  min-height:100vh;
  }

  .claimmodelouter{
    padding:20px;
    border: 2px solid #ededed;
    border-radius:20px;
    background:#fff;
    h2{
      font-size:22px;
      font-weight:700;
    }
    h3{
      font-size:18px;
      font-weight:600;
    }
    .mozarrthead{
      position:absolute;
      height:90px;
      width:auto;
      top:0;
      left:50%;
      transform:translate(-50%,-50%);
    }
    .modalouter{
      margin-top:40px;
      color:#000;
      .type{
        text-decoration:underline;
		color:#000;
      }
      .gbg{
        border-radius: 15px;
        background-color: rgba(246,246,246,1);
        padding:16px;
        line-height:1.5;
      }
    }
    
  }
  .claimairdrop{
    padding:60px 20px;
    text-align:center;
    margin-top:14px;
  }
  .btn-red{
    align-items: center;
    border: 0px;
    border-radius: 16px;
    box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0px;
    transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
    height: auto;
    padding: 14px 28px;
    background-color: rgb(217, 37, 49);
    color: white;
	&:focus{
		outline:none;
	}
  }

`

export default GlobalStyle
