<template>
<div class="global-container-contacts">
  <div class="title-contacts-container">
      <h2 id="4" class="text-center"> Contattami </h2>
      <p class="text-center">Sono attualmente interessato a nuove oppurtunità lavorative. Non esitare a scrivermi per qualsiasi informazione</p>
  </div>
  <div class="wrapper-contacts d-flex justify-content-center align-items-center">
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
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
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
      message: ''
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
    },
  }
  
}
</script>

<style lang="scss" scoped>

@import "../assets/style/generals.scss";

// * {box-sizing: border-box;}

.title-contacts-container{
  padding: 30px;
  height: 100px;
  background-color: #F5F3EA;
  color: black;
}

.wrapper-contacts{
  height: calc(100vh - 100px);
  background-color: #F5F3EA;
      .img-container{
        width: 550px;
        height: 550px;
        margin-right: 30px;
        background-image: linear-gradient(to bottom right, rgba(76, 25, 177, 0.824) , rgba(255, 0, 0, 0.856));;
        border-radius: 50%;
        // overflow: hidden;
           img{
             height: 100%;
             object-fit: cover;
           }
      }
}

.form-container {
  // display: block;
  // margin:auto;
  text-align: center;
  border-radius: 10px;
  background-image: linear-gradient(to bottom right, rgba(76, 25, 177, 0.824) , rgba(255, 0, 0, 0.856));
  padding: 20px;
  width: 40%;
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

// input[type=submit] {
//   background-color: #4CAF50;
//   color: white;
//   padding: 12px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// }
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



</style>