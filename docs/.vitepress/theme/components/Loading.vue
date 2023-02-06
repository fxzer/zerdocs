<template>

  <div class="loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script setup lang='ts'>

</script>
<style scoped lang='scss'>
.loader {
  /* 相对定位 */
  position: relative;
  color: #A886F2;
  width: 60px;
  height: 60px;
}

.loader div {
  /* currentColor可以获取到父元素的color */
  background-color: currentColor;
}

/* loader下的第一个div（小球） */
.loader div:nth-child(1) {
  width: 16px;
  height: 16px;
  /* 绝对定位 */
  position: absolute;
  bottom: 32%;
  left: 18%;
  border-radius: 50%;
  /* 设置变换基点的位置 */
  transform-origin: center bottom;
  /* 执行动画：动画名 时长 加速后减速 无限次播放 */
  animation: ball-jump 0.6s ease-in-out infinite;
}

/* loader下的非第一个div（其他三个div，楼梯） */
.loader div:not(:nth-child(1)) {
  width: 20px;
  height: 4px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(60%);
  animation: ball-steps 1.8s linear infinite;
}

/* 接下来需要分别为每一节楼梯设置不同的动画延迟 */
.loader div:nth-child(2) {
  animation-delay: 0s;
}

.loader div:nth-child(3) {
  animation-delay: -0.6s;
}

.loader div:nth-child(4) {
  animation-delay: -1.2s;
}

/* 定义动画 */
/* 小球弹跳动画 */
@keyframes ball-jump {
  0% {
    transform: scale(1, 0.7);
  }

  20% {
    transform: scale(0.7, 1.2);
  }

  40% {
    transform: scale(1, 1);
  }

  50% {
    bottom: 80%;
    transform: scale(1, 1);
  }

  80%,
  90% {
    transform: scale(0.7, 1.2);
  }

  100% {
    transform: scale(1, 0.7);
  }
}

/* 楼梯移动动画 */
@keyframes ball-steps {
  0% {
    top: 0;
    right: 0;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    top: 100%;
    right: 100%;
    opacity: 0;
  }
}
</style>