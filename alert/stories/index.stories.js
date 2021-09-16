import defaultConfig from '~/story-helpers';
import Alert from '~/alert';
import 'wave-ui/dist/wave-ui.css';

export default {
  ...defaultConfig,
  parameters: { ...defaultConfig.parameters, layout: 'fullscreen' },
};

export const Default = () => ({
  components: { Alert },
  template: `
    <alert>Alert</alert>
  `,
});

export const Sizes = () => ({
  components: { Alert },
  template: `
    <alert xs class="my1">Alert</alert>
    <alert sm class="my1">Alert</alert>
    <alert md class="my1">Alert</alert>
    <alert lg class="my1">Alert</alert>
    <alert xl class="my1">Alert</alert>
  `,
});

export const Colors = () => ({
  components: { Alert },
  template: `
    <alert bg-color="primary" color="white" class="my1">Alert</alert>
    <alert bg-color="secondary" class="my1">Alert</alert>
    <alert bg-color="success" color="white" class="my1">Alert</alert>
    <alert bg-color="info" color="white" class="my1">Alert</alert>
    <alert bg-color="warning" color="white" class="my1">Alert</alert>
    <alert bg-color="error" color="white" class="my1">Alert</alert>
    <alert color="pink" class="my1">Alert</alert>
    <alert bg-color="pink" color="white" class="my1">Alert</alert>
    <alert bg-color="purple" color="cyan-light4" class="my1">Alert</alert>
    <alert bg-color="cyan-light4" color="purple" class="my1">Alert</alert>
  `,
});

export const Types = () => ({
  components: { Alert },
  template: `
    <alert success class="my1">Alert</alert>
    <alert info class="my1">Alert</alert>
    <alert warning class="my1">Alert</alert>
    <alert error class="my1">Alert</alert>
  `,
});

export const TypeAndPlain = () => ({
  components: { Alert },
  template: `
    <alert success plain color="white" class="my1">Alert</alert>
    <alert info plain color="white" class="my1">Alert</alert>
    <alert warning plain color="white" class="my1">Alert</alert>
    <alert error plain color="white" class="my1">Alert</alert>
  `,
});

export const IconOutside = () => ({
  components: { Alert },
  template: `
    <alert success icon-outside class="my1">Alert</alert>
    <alert info icon-outside class="my1">Alert</alert>
    <alert warning icon-outside class="my1">Alert</alert>
    <alert error icon-outside class="my1">Alert</alert>
  `,
});

export const Outline = () => ({
  components: { Alert },
  template: `
    <alert outline class="my1">Alert</alert>
  `,
});

export const Tile = () => ({
  components: { Alert },
  template: `
    <alert tile class="my1">Alert</alert>
  `,
});

export const Round = () => ({
  components: { Alert },
  template: `
    <alert round class="my1">Alert</alert>
  `,
});

export const Shadow = () => ({
  components: { Alert },
  template: `
    <alert shadow class="my1">Alert</alert>
  `,
});

export const Borders = () => ({
  components: { Alert },
  template: `
    <alert border-left class="my1">Alert</alert>
    <alert border-right class="my1">Alert</alert>
    <alert border-top class="my1">Alert</alert>
    <alert border-bottom class="my1">Alert</alert>
    <alert no-border class="my1">Alert</alert>
  `,
});

export const Dismiss = () => ({
  components: { Alert },
  template: `
    <alert dismiss class="my1">Alert</alert>
  `,
});
