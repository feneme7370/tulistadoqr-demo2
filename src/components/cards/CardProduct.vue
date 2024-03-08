<script setup>
  import ImgTumbLightbox from '@/components/sistem/ImgTumbLightbox.vue'
  import { formatCurrency } from '@/helpers/price'
  import { urlBack, urlFront } from '@/helpers/config'
  import { useListStore } from '@/stores/list';
  const apiList = useListStore()

    const props = defineProps({
        product: {type: Object, required: true},
        addToListButton: {type: Number},
    })
</script>

<template>
   
    <div class="my-5 px-2">
        

        <div class="flex justify-center gap-1 my-2 bg-primary-400 border border-primary-900 rounded-3xl text-gray-700 min-h-28">


            <div 
                class="py-1 px-2 flex flex-col justify-between" 
                :class="product.image_hero != '' ? 'w-8/12': 'w-11/12'">
                <div>
                <p class="text-gray-100 underline mb-3 text-base text-center font-bold">{{ product.name }}</p>

                <p class="mb-1 italic text-gray-300 text-sm line-clamp-2 ">{{ product.description }}</p>
                </div>

                <div class="flex justify-between items-center">
                    <div v-if="product.price_original < product.price_seller || product.price_seller == '' || product.price_seller == '0'">
                        <p class="mb-1 text-sm font-bold text-green-100 ">{{ formatCurrency(product.price_original)}}</p>
                    </div>
                    <div v-else>
                        <span class="mb-1 mr-5 font-bold text-sm text-green-100 ">{{ formatCurrency(product.price_seller)}}</span>
                        <span class="line-through mb-1 text-xs text-red-200 ">{{ formatCurrency(product.price_original)}}</span>
                    </div>
                    <div v-if="addToListButton">
                        <button class="block whitespace-nowrap bg-green-200 text-green-800 text-sm font-bold my-2 me-2 px-2.5 py-0.5 rounded" @click="apiList.addToList(product)">Agregar</button>
                    </div>
                </div>

                <div class="my-1 flex items-center gap-1 overflow-x-auto overflow-hidden">

                <span v-for="tag in product.tags" class="block whitespace-nowrap  bg-primary-50 text-primary-900 text-xs font-bold my-2 me-2 px-2.5 py-0.5 rounded-xl">{{ tag.name }}</span>

                </div>


            </div>
            <ImgTumbLightbox 
                v-if="product.image_hero != ''"
                class="w-1/4 p-2 max-w-32 max-h-32"
                :uri="urlBack()+product.image_hero_uri"
                :name="product.image_hero"
                :nameImg="product.category + ' - ' + product.name"
                nameAlbum="productos"
            />

        </div>

    </div>


</template>

<style scoped>

</style>