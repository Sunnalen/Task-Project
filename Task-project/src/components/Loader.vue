<template>
  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</template>

<style>
  body{
    --big: 80px;
    --middle: 64px;
    --small: 8px;
  }

  .lds-ring {
  display: inline-block;
  position: relative;
  width: var(--big);
  height: var(--big);
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: var(--middle);
  height: var(--middle);
  margin: var(--small);
  border: var(--small) solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>