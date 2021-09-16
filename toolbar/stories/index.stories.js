import defaultConfig from '~/story-helpers';
import Toolbar from '~/toolbar';

export default defaultConfig;

export const Default = () => ({
  components: { Toolbar },
  template: `
    <toolbar>
      <div class="ml2">Logo</div>
      <div class="spacer"></div>
      
      <div class="ml2">Item 1</div>
      <div class="ml2">Item 2</div>
      <div class="ml2">Item 3</div>
    </toolbar>
  `,
});

export const Colors = () => ({
  components: { Toolbar },
  template: `
    <toolbar color="primary">
      <div class="ml2">Logo</div>
      <div class="spacer"></div>
      
      <div class="ml2">Item 1</div>
      <div class="ml2">Item 2</div>
      <div class="ml2">Item 3</div>
    </toolbar>

    <toolbar bg-color="primary-light3" class="mt8">
      <div class="ml2">Logo</div>
      <div class="spacer"></div>
      
      <div class="ml2">Item 1</div>
      <div class="ml2">Item 2</div>
      <div class="ml2">Item 3</div>
    </toolbar>
  `,
});
