<template>
    <div class="bg-zinc-200 dark:bg-zinc-800 rounded-md p-4 max-w-lg mx-auto my-5 flex cursor-pointer lecture"
    v-on:click="router.go(props.lectureSrc)">
        <img :src="props.imgSrc" :alt="props.imgAlt" class="max-w-20 rounded">
        <div class="ml-5">
            <div class="hack text-xl">{{ props.lectureTitle }}</div>
            <div class="mt-1 text-base">{{ props.lectureDesc }}</div>
        </div>
    </div>
</template>


<style>
    .lecture {
        transition: filter 0.2s ease-in-out;
    }

    .lecture:hover {
        filter: brightness(150%);
    }
</style>


<script setup>
import { useRouter } from 'vitepress';

const router = useRouter();

const props = defineProps({
    imgSrc: { type: String, required: true },
    imgAlt: String,
    lectureSrc: { type: String, required: true },
    lectureTitle: String,
    lectureDesc: String
})
</script>