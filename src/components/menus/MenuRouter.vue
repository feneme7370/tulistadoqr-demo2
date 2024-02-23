<script setup>
import { ref } from 'vue';
import CardProduct from '@/components/cards/CardProduct.vue';
import { urlBack, urlFront } from '@/helpers/config'

const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
    companiesDates: { type: Object, required: true },
})

const levelId = ref('')
const categoryId = ref('')

const levelIdSelected = (id) => {
  levelId.value = id
  categoryId.value = ''
}


</script>

<template>

  <div>
    <h2 class="text-center font-bold italic text-3xl my-5">Categorias Generales</h2>

    <!-- listado de niveles -->
    <div class="flex flex-wrap justify-center gap-5 items-center py-10 bg-primary-400 rounded-3xl">
      <div v-for="level in levelsDates" :key="level.id" >
        
        <div v-if="categoriesDates.some(category => category.level_id === level.id)" >

          <div @click="levelIdSelected(level.id)" class="my-2 bg-center bg-no-repeat w-28 h-28 px-1 mx-5 relative">
                <img 
                    loading="lazy"
                    class="w-full h-full object-cover rounded-3xl border border-primary-900"
                    :src="urlBack()+level.image_hero_uri+level.image_hero" 
                    alt="imagen portada"
                >
                
    
                <div class="absolute right-0 -bottom-5 left-0 px-1 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col cursor-pointer">
                  <a class="bg-primary-100 block rounded-3xl border border-primary-900 w-full">
                    <h1 class="my-2 text-base italic font-extrabold text-gray-800 ">{{ level.name }}</h1>
                  </a>
                </div>
    
          </div>

        </div>
  
      </div>
    </div>
    
    <!-- listado de categorias segun level -->
    <div v-if="levelId" class="mt-5">
      <h2 class="text-center font-bold italic text-lg mb-5">Categorias</h2>
      <!-- mini cards -->
      <div class="flex flex-wrap items-center justify-center">
        
        <div v-for="category in categoriesDates" :key="category.id">
          <div  v-if="productsDates.some(product => product.category_id === category.id)">

            <div 
              v-if="category.level_id == levelId" 
              class="mb-10 bg-center bg-no-repeat cursor-pointer relative mx-5 bg-primary-200 rounded-3xl border border-primary-900 overflow-hidden"
              @click="categoryId = category.id"
            >
                <img 
                    loading="lazy"
                    class="w-32 h-20 mx-auto object-cover"
                    :src="urlBack()+category.image_hero_uri+category.image_hero" 
                    alt="imagen portada"
                >

                <div class="text-center flex items-center justify-center flex-col">
                    <a class="w-full p-1 italic font-bold text-sm text-gray-200 border-t border-primary-900">
                      {{ category.name }}
                    </a>
                </div>

            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- listados de productos de cada categoria -->
    <div v-if="categoryId" class="mt-5">
      <div v-for="product in productsDates" :key="product.id">
  
          <div v-if="product.category_id === categoryId">
      
            <CardProduct 
              class=" max-w-lg mx-auto lg:rounded-md"
              :product="product"
              :addToListButton="companiesDates.membership.list_product"
            />
      
          </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>