<template>
    <div class="flex flex-col justify-center min-h-[calc(100vh-120px)]">
        <img :src="isDark ? '/img/ChillCode.svg' : '/img/ChillCode_Light.svg'" alt="Chillcode Logo" class="w-60 mb-7">
        <div class="hack text-7xl mb-7">
            A programing blog <br>make learning code<br></br>
            <span class="gradient-text" ref="text"></span>
        </div>
        <div class="text-2xl mb-7">
            코드를 쉽고 명확히 배우기 위한 프로그래밍 블로그
        </div>
        <div class="flex flex-row gap-5">
            <button class="rounded-full pl-7 pr-7 pt-3 pb-3 button-main hover"
            v-on:click="router.go('/start')">
                시작하기
            </button>
            <button class="rounded-full pl-7 pr-7 pt-3 pb-3 border-solid border-2 button-sub hover"
            v-on:click="router.go('/about')">
                어바웃 확인하기
            </button>
        </div>
    </div>
</template>

<style>
    .gradient-text {
        background: var(--vp-home-hero-name-background);
        color: transparent;
        background-clip: text;
    }

    .gradient-text::after {
        content: '|'; 
        color: white;
        margin-left: 3px;
        animation: blink .8s infinite;
    }

    @keyframes blink {
        0%, 50% {
            opacity: 1;
        }
        50.01%, 100% {
            opacity: 0;
        }
    }

    .button-main {
        background-color: var(--vp-c-brand-1);
    }

    .button-sub {
        border-color: var(--vp-c-brand-1);
    }

    .hover:hover {
        filter: brightness(150%);
    }

    .hover {
        transition: filter 0.2s ease-in-out;
    }
</style>

<script setup>
    import { useRouter } from 'vitepress';
    import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
    import gsap from 'gsap';
    import TextPlugin from 'gsap/TextPlugin';
    gsap.registerPlugin(TextPlugin)

    const router = useRouter();

    // 다크모드 감지
    const isDark = ref(document.documentElement.classList.contains('dark'))
    let observer
    onMounted(() => {
    observer = new MutationObserver(() => {
        isDark.value = document.documentElement.classList.contains('dark')
    })
    observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        })
    })

    onBeforeUnmount(() => {
        observer && observer.disconnect()
    })

    // gsap 에니메이션
    const text = ref(null)
    const words = ["very chill", "clear and easy"]
    let i = 0
    let timeline

    const typeNext = () => {
        const w = words[i]
        timeline = gsap.to(text.value, { duration: w.length * 0.1, text: w, ease: "none" })
            .then(() => gsap.delayedCall(5, () =>
            gsap.to(text.value, { duration: w.length * 0.05, text: "", ease: "none" })
                .then(() => { i = (i + 1) % words.length; typeNext() })
            ))
    }

    onMounted(() => {
        typeNext()
    })

    onUnmounted(() => {
        timeline?.kill()
    })
</script>