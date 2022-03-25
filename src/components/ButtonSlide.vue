<template>
  
        <a href="#">
            <button class="btn-slide-line">
                <span> {{name}} </span>
            </button>
        </a>

</template>

<script>
export default {

   name: 'ButtonSlide',
   props: {
      'name': String
   } 

}
</script>

<style lang="scss">

@import "../assets/style/generals.scss";

       button {
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
                      text-transform: uppercase;
                      background-color: #070707;
                      border: 1px solid white;
                      // border-radius: 10px;
                      color: yellowgreen;
                      // font-weight: 400;
                      font-size: 23px;
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
                         background: rgb(161, 20, 50);

                      }
                      &:hover {
                        cursor: pointer;
                        &:after {
                          width: 100%;
                          left: 0;
                        }
                      }
                    }

</style>