<script setup>
import CardProduct from '@/components/cards/CardProduct.vue'
import ImgTumbLightbox from '@/components/sistem/ImgTumbLightbox.vue'
import { urlBack, urlFront } from '@/helpers/config'

const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
    companiesDates: { type: Object, required: true },
})



</script>

<template>
  <div>

    <div v-for="level in levelsDates" :key="level.id" class="mb-8">
      <div v-if="categoriesDates.some(category => category.level_id === level.id)">

        <h2 class="text-center font-bold text-3xl italic mb-5">{{ level.name }}</h2>
    
        <div v-for="category in categoriesDates" :key="category.id">
          <div v-if="productsDates.some(product => product.category_id === category.id)">

            <div v-if="category.level_id == level.id">
      
              <div class="flex justify-between items-center gap-5 sm:px-3 bg-primary-600 h-20 rounded-t-3xl lg:rounded-md">
                <ImgTumbLightbox 
                        class="w-12 h-12 ml-3"
                        :uri="urlBack()+category.image_hero_uri"
                        :name="category.image_hero"
                        :nameImg="category.name"
                    />
                <h3 class="w-2/4 font-semibold italic text-xl mb-2 text-gray-200">{{ category.name }}</h3>
                <div></div>
              </div>
          
              <div v-for="product in productsDates" :key="product.id">
                <div v-if="product.category_id == category.id">
                  
                  <CardProduct 
                    :product="product"
                    :addToListButton="companiesDates.membership.list_product"
                  />
      
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>