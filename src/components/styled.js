import styled from "styled-components";
import background from './images/background.jpg';



export const Main = styled.div`
font-family: "Poppins", sans-serif;
  background-image: url(${background});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Card = styled.div`
 font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 719px;
  width: 765px;
  border-radius: 0px;
  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 3px 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
    backdrop-filter: blur(2rem);
    

    .tittle{
  height: 57px;
  width: 210px;
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
    }

   
  .wrapper{
  max-width: 450px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
}
.wrapper .search-input{
  background: #fff;
  width: 450px;
  border-radius: 3px;
  position: relative;
}
.search-input input{
  height: 55px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 16px;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
  letter-spacing: 0.15px;
  line-height: 24px;
}


.search-input .icon{
  position: absolute;
  right: 0px;
  top: 0px;
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 55px;
  font-size: 17px;
  cursor: pointer;
  margin-top: 5px;
}

.searchButton{
  background-color:#fff;
  width: 45px;
  height: 45px;
  border: 1px solid #fff;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
}
    

.imagen{
 height: 130px;
 width: 260px;
 margin-top: 49px;
  text-align: center;
  display: flex;
  justify-content: center;
  
  
  img{
   max-width: 50%;
   height: 130px;
  }
}

.h1{
  height: 57px;
  width: 400px;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 600;
  margin: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.h2{
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 500;
  padding-left: 20px;
  
}


.h3{
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 5px;
  
}

p{
      margin-top:5px;    
      font-size: 16px;
      color: #5D5D5D;
      display: flex;
      justify-items: flex-start;

      
    }

.description{
    width: 725px;
    height: 80px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  
    }

.container{
  height: 719px;
  width: 100%;
  margin-top:10px;
  display: flex;
  flex-direction: row;

.card-types{
    width: 80%;
    height: 150px;

  }

 .card-stats{
    width: 60%;
    height: 150px;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
  
  }

  .card-values{
    width: 50%;
    height: 150px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  
  }

  
}
.stats-mini{
  height: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  }

.stats-values{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top:27px;
    margin-left: 20px;
    margin-bottom: 50px;
}



    
`;







