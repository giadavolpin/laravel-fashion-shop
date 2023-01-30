<template>
    <section>
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
    </section>
</template>

<script>

export default {
    name: 'LoadingComponent',

}
</script>

<style lang="scss" scoped>
section {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}

div {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    margin: 1px;
}

.div1 {
    background-color: pink;
    animation: position-change1 5s infinite;
}

.div2 {
    background-color: pink;
    animation: position-change2 5s infinite;
}

.div3 {
    background-color: pink;
    animation: position-change3 5s infinite;
}

.div4 {
    background-color: black;
    animation: position-change4 5s infinite;
}


@keyframes position-change1 {
    0% {
        left: 0px;
        bottom: 0px;
    }

    10% {
        left: 0px;
        bottom: 100px;
    }

    20% {
        left: 306px;
        bottom: 100px;
    }

    30% {
        left: 306px;
        bottom: 0px;
    }

    40% {
        left: 204px;
        bottom: 0px;
    }

    50% {
        left: 204px;
        bottom: 0px;
    }

    60% {
        left: 102px;
        bottom: 0px;
    }

    70% {
        left: 102px;
        bottom: 0px;
    }

    80% {
        left: 0px;
        bottom: 0px;
    }
}

@keyframes position-change2 {
    0% {
        left: 0px;
        bottom: 0px;
    }

    10% {
        left: 0px;
        bottom: 0px;
    }

    20% {
        left: -102px;
        bottom: 0px;
    }

    30% {
        left: -102px;
        bottom: 100px;
    }

    40% {
        left: 204px;
        bottom: 100px;
    }

    50% {
        left: 204px;
        bottom: 0px;
    }

    60% {
        left: 102px;
        bottom: 0px;
    }

    70% {
        left: 102px;
        bottom: 0px;
    }

    80% {
        left: 0px;
        bottom: 0px;
    }
}

@keyframes position-change3 {
    0% {
        left: 0px;
        bottom: 0px;
    }

    10% {
        left: 0px;
        bottom: 0px;
    }

    20% {
        left: -102px;
        bottom: 0px;
    }

    30% {
        left: -102px;
        bottom: 0px;
    }

    40% {
        left: -204px;
        bottom: 0px;
    }

    50% {
        left: -204px;
        bottom: 100px;
    }

    60% {
        left: 102px;
        bottom: 100px;
    }

    70% {
        left: 102px;
        bottom: 0px;
    }

    80% {
        left: 0px;
        bottom: 0px;
    }
}

@keyframes position-change4 {
    0% {
        left: 0px;
        bottom: 0px;
    }

    10% {
        left: 0px;
        bottom: 0px;
    }

    20% {
        left: -102px;
        bottom: 0px;
    }

    30% {
        left: -102px;
        bottom: 0px;
    }

    40% {
        left: -204px;
        bottom: 0px;
    }

    50% {
        left: -204px;
        bottom: 0px;
    }

    60% {
        left: -306px;
        bottom: 0px;
    }

    70% {
        left: -306px;
        bottom: 100px;
    }

    80% {
        left: 0px;
        bottom: 100px;
    }

    90% {
        left: 0px;
        bottom: 0px;
    }
}
</style>