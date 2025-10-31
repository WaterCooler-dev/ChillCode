<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { useRouter } from 'vitepress';
const router = useRouter();
</script>

<template>
    <DefaultTheme.Layout>
        <template #not-found>
            <div class="flex justify-center items-center flex-col min-h-[calc(100vh-155px)]">
                <div class="hack text-6xl mb-7">404 ERROR!</div>
                <div class="text-xl text-center mb-7">
                    많고 많은 Ctrl + F를 해보았지만... 원하는 문서는 없는 것 같습니다.<br>
                    혹시 길을 잃어버리신거라면, 홈으로 돌아가시는건 어떨까요?
                </div>
                <button class="rounded-full pl-7 pr-7 pt-3 pb-3 button-main hover"
                v-on:click="router.go('/')">
                    홈으로 돌아가기
                </button>
            </div>
        </template>
    </DefaultTheme.Layout>
</template>

<style>

</style>