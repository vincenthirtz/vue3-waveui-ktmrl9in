import defaultConfig from '~/story-helpers';
import Btn from '~/button';

export default defaultConfig;

export const Default = () => ({
  components: { Btn },
  template: `
    <btn>Button</btn>
  `,
});

export const Colors = () => ({
  components: { Btn },
  template: `
    <btn bg-color="primary" class="ma1">Button</btn>
    <btn bg-color="secondary" class="ma1">Button</btn>
    <br>
    <btn bg-color="success" class="ma1">Button</btn>
    <btn bg-color="info" class="ma1">Button</btn>
    <btn bg-color="warning" class="ma1">Button</btn>
    <btn bg-color="error" class="ma1">Button</btn>
  `,
});

export const Sizes = () => ({
  components: { Btn },
  template: `
    <btn xs class="ma1">Button</btn>
    <btn sm class="ma1">Button</btn>
    <btn md class="ma1">Button</btn>
    <btn lg class="ma1">Button</btn>
    <btn xl class="ma1">Button</btn>
    <br>
    <btn width="100px" height="40px">Button</btn>
  `,
});

export const Round = () => ({
  components: { Btn },
  template: `
    <btn round>Button</btn>
  `,
});

export const Tile = () => ({
  components: { Btn },
  template: `
    <btn tile>Button</btn>
  `,
});

export const Outline = () => ({
  components: { Btn },
  template: `
    <btn outline>Button</btn>
  `,
});

export const Text = () => ({
  components: { Btn },
  template: `
    <btn text>Button</btn>
  `,
});

export const Shadow = () => ({
  components: { Btn },
  template: `
    <btn shadow>Button</btn>
  `,
});

export const Link = () => ({
  components: { Btn },
  template: `
    <btn route="https://antoniandre.github.io/wave-ui/w-button">Button</btn>
  `,
});

export const Icon = () => ({
  components: { Btn },
  template: `
    <btn icon="wi-cross">Button</btn>
  `,
});

export const Loading = () => ({
  components: { Btn },
  template: `
    <btn loading>Button</btn>
  `,
});
