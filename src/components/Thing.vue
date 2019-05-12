<template>
  <div class="thing">
    <strong>title: {{ title }}</strong>
    <div>
      message: {{ message }}
    </div>
    <div>
      test computed: {{ testComputed }}
    </div>
    <div>
      <button v-on:click="onClick">Ding {{ count }}</button>
      at {{ Date.now() }}
    </div>
  </div>
</template>

<script lang="ts">
  // import Vue from 'vue'
  // import Component from 'vue-class-component'
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

  @Component
  export default class Thing extends Vue {
    // Prop
    @Prop()
    private title!: string;

    // Data
    private message: string = process.env.DEFAULT_MESSAGE || 'Hello!';
    private count: number = 0;

    // Methods
    private onClick(): void {
      this.count++;
    }

    // Lifecycle method
    private mounted() {
      console.log(`${Thing.name} mounted!`);
    }

    // Computed
    get testComputed() {
      return Math.random();
    }

    // Watch
    @Watch('count')
    private onMessageChanged(value: string, oldValue: string) {
      console.log(`${oldValue} -> ${value}`);
    }
  }
</script>

<style lang="less">
  .thing {
    background-color: orange;
  }
</style>
