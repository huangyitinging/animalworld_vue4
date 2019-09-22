<template>
    <div>
         <Alert></Alert>
        <Carousel></Carousel>
        <Ad></Ad>
        <BestSell></BestSell>
        <Subscribe></Subscribe>
    </div>
</template>


<script>
import Alert from './AlertMessage';
import NavbarFront from './NavbarFront';
import Carousel from './Carousel';
import Ad from './Ad';
import BestSell from './BestSell';
import Subscribe from './Subscribe';


export default {
    components:{
        Alert,
        NavbarFront,
        Carousel,
        Ad,
        BestSell,
        Subscribe,
    }
}
</script>

