import Vue, { CreateElement } from 'vue';
import Component from 'vue-class-component';

@Component
export default class World extends Vue {
  public render(h: CreateElement) {
    return <h2>This TSX isn't rendered for some reasons... But compilation OK!</h2>;
  }
}
