<template>
  <p>hello times: {{ helloTimes }}</p>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class Hello extends Vue {
    helloTimes: number = 0;

    public sayHello() {
      this.helloTimes = Date.now();
    }
  }
</script>
