import defaultConfig from '~/story-helpers';
import Divider from '~/divider';

export default {
  ...defaultConfig,
  parameters: { ...defaultConfig.parameters, layout: 'fullscreen' },
};

export const Default = () => ({
  components: { Divider },
  template: `
    <divider class="ma6"></divider>
  `,
});

export const Colors = () => ({
  components: { Divider },
  template: `
    <divider class="ma6" color="primary"></divider>
    <divider class="ma6" color="success"></divider>
    <divider class="ma6" color="pink"></divider>
    <divider class="ma6" color="error"></divider>
    <divider class="ma6" color="warning"></divider>
  `,
});

export const Vertical = () => ({
  components: { Divider },
  template: `
    <w-toolbar class="py0" bg-color="grey-light5">
      <div class="title2 my2">Toolbar</div>
      <div class="spacer"></div>
      <span class="mx1">Item 1</span>
      <divider class="mx1" vertical></divider>
      <span class="mx1">Item 2</span>
      <divider class="mx1" vertical></divider>
      <span class="mx1">Item 3</span>
    </w-toolbar>
  `,
});

export const Content = () => ({
  components: { Divider },
  template: `
    <div class="w-flex align-center justify-center">
      <w-button class="my6">Log in</w-button>
      <divider class="mx6" vertical color="pink">OR</divider>
      <w-button class="my6">Sign in</w-button>
    </div>

    <div class="text-center mt12">
      <w-button class="my6">Log in</w-button>
      <divider class="mx6" color="pink">OR</divider>
      <w-button class="my6">Sign in</w-button>
    </div>
  `,
});
