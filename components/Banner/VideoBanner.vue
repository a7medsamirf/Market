<template>
    <section id="Video-banner">

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-3 offset-md-3 mt-4 ">
                    <div class="icon-abs">
                        <a href="https://www.youtube.com/watch?v=56MhjXTcSCg" target="_blank" data-fancybox="gallery" class="icon pulse expand popup-youtube">
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

</section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
   #Video-banner{
        position: relative;
        background-image: url("/images/Banner/videobannerContainer.png");
        display: flex;
        padding: 200px;
        justify-content: center;
        align-items: center;
        background-size: contain;
 .icon-abs .icon {
    position: absolute;
    top: 50%;
    right: 50%;
    background: #62D0B6;
    color: #fff;
    display: inline;
    font-size: 20px;
    padding: 22px 28px;
    border-radius: 50%;
    transform: translateX(50%) translateY(-50%);
}
.pulse {
    -webkit-animation: pulse 1s infinite;
    animation: pulse 1s infinite;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
}
    }



@-webkit-keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 #62d0b693;
    }

    70% {
        box-shadow: 0 0 0 50px #62d0b600;
    }

    100% {
        box-shadow: 0 0 0 0 #62d0b600;
    }
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 #62d0b693;
    }

    70% {
        box-shadow: 0 0 0 50px #62d0b600;
    }

    100% {
        box-shadow: 0 0 0 0 #62d0b600;
    }
}


</style>

