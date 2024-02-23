<script setup>
     import CardProductOffer from '@/components/cards/CardProductOffer.vue';

    const props = defineProps({
        offersDates: {type: Object, required: true},
        addToListButton: {type: Number},
    })

    import { ref, defineProps, onMounted } from 'vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';


const modules = [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow];

</script>

<template>
    <div>
        <swiper
        :modules="modules"
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        }"
          :slides-per-view="1.8"
          :space-between="5"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
        >
      
          <swiper-slide v-for="product in offersDates" class="px-1">
              <CardProductOffer class="mb-10" :product="product" :addToListButton="addToListButton"/>
          </swiper-slide>
          ...
        </swiper>
    </div>
</template>

<style>
    .swiper-button-prev, .swiper-button-next, .swiper-pagination, .swiper-scrollbar{
        @apply  text-primary-900;
    }

    .swiper-pagination-bullet-active{
        @apply bg-primary-900;
    }
</style>