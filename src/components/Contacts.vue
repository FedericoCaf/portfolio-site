<template>
<div id="4" class="global-container-contacts">

     <div class="box-circles d-flex">

       <a href="#1"> 
          <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-one d-flex justify-content-center align-items-center">
             Home  
          </div>
       </a> 

       <a href="#2">
          <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-two d-flex justify-content-center align-items-center">
          About
         </div>
       </a>
       
       <a href="#5"> 
          <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-three d-flex justify-content-center align-items-center">
          Works
          </div>
       </a>
     
    </div>

  <div class="title-contacts-container">
      <h2 class="text-center"> Contattami </h2>
      <p class="text-center">Sono attualmente interessato a nuove oppurtunità lavorative. Non esitare a scrivermi per qualsiasi informazione</p>
      <div data-aos="fade-right" data-aos-duration="2000" v-if="isClicked"
       class="alert alert-success text-center" role="alert">
         Messaggio inviato correttamente
      </div>
  </div>
  
  <div class="wrapper-contacts d-flex justify-content-center flex-wrap">
    <div class="img-container">
       <img src="../assets/img/avatar-small2.png" alt="">
    </div>
    <div class="form-container text-white">
        <form @submit.prevent="sendEmail">
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
            required
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            required
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message"
            required>
            
          </textarea>
          
          <button class="btn-slide-line" type="submit" value="Send">Invia
          </button>
        </form>
     </div>
  </div>
</div>

    
</template>

<script>

import emailjs from 'emailjs-com';
import ButtonSlide from '../components/ButtonSlide.vue'

export default {
 name: 'Contacts',

 components:{
   ButtonSlide
 },

  data() {
    return {
      name: '',
      email: '',
      message: '',
      isClicked: false
    }
  },

   methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_jy15qte', 'template_qe1ptcy', e.target,
        'uww7Z9Wa45uTi8Wyg', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''

      this.isClicked = true;

      setTimeout(this.resetMessage, 5000);

    },

    resetMessage(){
      if(this.isClicked === true){
        this.isClicked = false;
      }
    }


  }
  
}
</script>

<style lang="scss" scoped>

@import "../assets/style/generals.scss";

// * {box-sizing: border-box;}

.global-container-contacts{
  // padding-bottom: 30px;
  position: relative;
  min-height: 100vh;
  background-color: #F5F3EA;
}

  .box-circles{
    position: absolute;
    top: 0;
    right:0;
    padding: 20px;
    // display: block;
    // max-width: 1000px;
    // width: 65%;
       a{
          color: white;
          font-size: 15px;
        }

         .fc-circle{
      // height: 24vw;
      // width: 24vw;
      border-radius: 50%;
      color: black;
       
    }

        .fc-one{
      // background-color: rgba(47, 201, 47, 0.808);
      // background-image: linear-gradient(to bottom left, rgba(0, 110, 255, 0.856) , rgba(235, 12, 235, 0.904));
      box-shadow: 5px 3px 8px 3px #9a0707e0;
       height: 100px;
      width: 100px;
      transition: all 0.5s;
         &:hover{
                  box-shadow: 0 0 1px 5px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 10px #ff0026f3,
                  0 0 1px 20px rgba(rgba(255, 0, 0, 0.824), 0.1);
              }
     
      }

     .fc-two{
     box-shadow: 5px 3px 8px 3px #260080;
      height: 100px;
      width: 100px;
        transition: all 0.5s;
         &:hover{
                  box-shadow: 0 0 1px 5px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 10px #002afff3,
                  0 0 1px 20px rgba(rgba(55, 0, 255, 0.856), 0.1);
              }
    }
    
    .fc-three{
      box-shadow: 5px 3px 8px 3px rgba(255, 98, 0, 0.801);
      height: 100px;
      width: 100px;
        transition: all 0.5s;
         &:hover{
                  box-shadow: 0 0 1px 5px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 10px #ff4d00f3,
                  0 0 1px 20px rgba(rgba(255, 89, 0, 0.824), 0.1);
              }
    }


  }

  .box-img-title{
    // width: 35%;
      h1{
        font-size: 80px;
        font-weight: 700;
      }
  }

.title-contacts-container{
  padding: 30px;
  height: 100px;
  background-color: #F5F3EA;
  color: black;
    h2{
      padding-top: 85px;
    }
}

.wrapper-contacts{
  // min-height: 100vh;
  // background-color: #F5F3EA;
  // padding-bottom: 60px;
  padding-top: 150px;
      .img-container{
        width: 500px;
        height: 500px;
        margin: 20px;
        padding: 20px;
        background-image: linear-gradient(to bottom right, rgba(76, 25, 177, 0.824) , rgba(255, 0, 0, 0.856));;
        border-radius: 50%;
        // overflow: hidden;
           img{
             height: 100%;
             object-fit: cover;
           }
      }

      .form-container{        
          text-align: center;
          border-radius: 10px;
          background-image: linear-gradient(to bottom right, rgba(76, 25, 177, 0.824) , rgba(255, 0, 0, 0.856));
          margin: 20px;
          padding: 20px;
          width: 650px;
      }
}



label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

button[type=submit] {
                  position: relative;
                      // margin-top: 100px;
                      padding: 5px 12px;
                      height: 60px;
                      width: 170px;
                      outline: none;
                      text-decoration: none;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      cursor: pointer;
                      // text-transform: uppercase;
                      background-color: white;
                      border: 1px solid white;
                      // border-radius: 10px;
                      color: black;
                      // font-weight: 400;
                      // font-size: 23px;
                      // font-family: inherit;
                      // z-index: 0;
                      // overflow: hidden;
                      transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
                      span {
                        color: white;
                        font-size: 12px;
                        // font-weight: 500;
                        letter-spacing: 1.2px;
                      }
                      &:hover {
                        animation: rotate 0.7s ease-in-out both;
                        span {
                          animation: storm 0.7s ease-in-out both;
                          animation-delay: 0.06s;
                        }
                      }
}

 @keyframes rotate {
                      0% {
                        transform: rotate(0deg) translate3d(0, 0, 0);
                      }
                      25% {
                        transform: rotate(3deg) translate3d(0, 0, 0);
                      }
                      50% {
                        transform: rotate(-3deg) translate3d(0, 0, 0);
                      }
                      75% {
                        transform: rotate(1deg) translate3d(0, 0, 0);
                      }
                      100% {
                        transform: rotate(0deg) translate3d(0, 0, 0);
                      }
                    }
                    @keyframes storm {
                      0% {
                        transform: translate3d(0, 0, 0) translateZ(0);
                      }
                      25% {
                        transform: translate3d(4px, 0, 0) translateZ(0);
                      }
                      50% {
                        transform: translate3d(-3px, 0, 0) translateZ(0);
                      }
                      75% {
                        transform: translate3d(2px, 0, 0) translateZ(0);
                      }
                      100% {
                        transform: translate3d(0, 0, 0) translateZ(0);
                      }
                    }

                       .btn-slide-line {
                      &.center {
                        &:after {
                          left: 50%;
                        }
                      }
                      &:after {
                        position: absolute;
                        right: 0;
                        left: auto;
                        transition: .3s;
                        content: '';
                        width: 0;
                        bottom: 0;
                        height: 3px;
                        background-image: linear-gradient(to bottom right, rgba(76, 25, 177, 0.824) , rgba(255, 0, 0, 0.856));

                      }
                      &:hover {
                        cursor: pointer;
                        &:after {
                          width: 100%;
                          left: 0;
                        }
                      }
                    }

// input[type=submit]:hover {
//   background-color: #45a049;
// }

@media (max-width: 750px){

  .box-circles{ 
    visibility: hidden;
  }

  .title-contacts-container{
 
    h2{
      padding-top: 0;
    }
}

}

@media (max-width: 1250px){
  .wrapper-contacts{

    padding-top: 0;
    margin-top: 20px;
    
       .img-container{
          width: 500px;
          height: 500px;
          // margin-right: 0px;
          margin-top: 115px;
          margin-bottom: 30px;
          
          // overflow: hidden;
          
        }

      .form-container{        
          text-align: center;
          border-radius: 10px;
          background-image: linear-gradient(to bottom right, rgba(76, 25, 177, 0.824) , rgba(255, 0, 0, 0.856));
          padding: 20px;
          width: 800px;
      }
}
}

@media (max-width: 570px){
  .wrapper-contacts{

    
    
       .img-container{
          width: 400px;
          height: 400px;
          // margin-right: 0px;
          // margin-top: 135px;
          margin-bottom: 30px;
          
          // overflow: hidden;
          
        }

      // .form-container{        
      //     text-align: center;
      //     border-radius: 10px;
      //     background-image: linear-gradient(to bottom right, rgba(76, 25, 177, 0.824) , rgba(255, 0, 0, 0.856));
      //     padding: 20px;
      //     width: 650px;
      // }
}
}



</style>