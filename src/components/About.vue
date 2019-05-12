<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div>
      <input v-model="msg">
      <p>msg: {{ msg }}</p>
      <p>helloMsg: {{ helloMsg }}</p>
      <p>computed msg: {{ computedMsg }}</p>
      <Hello ref="helloComponent" />
      <World />
      <p>
        <button @click="greet">Greet</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  import Hello from './Hello.vue';
  import World from './World';

  const AboutProps = Vue.extend({
    props: {
      propMessage: String
    }
  });

  @Component({
    components: {
      Hello,
      World
    },
  })
  export default class About extends AboutProps {
    // inital data
    msg: number = 123;
    // use prop values for initial data
    helloMsg: string = 'Hello';

    $refs!: {
      helloComponent: Hello
    };

    // // additional declaration is needed
    // // when you declare some properties in `Component` decorator
    // count!: number;

    // lifecycle hook
    mounted () {
      this.greet()
    }
    // computed
    get computedMsg () {
      return 'computed ' + this.msg
    }
    // method
    greet () {
      console.log('greeting: ' + this.msg);
      this.$refs.helloComponent.sayHello();
    }
  }
</script>
