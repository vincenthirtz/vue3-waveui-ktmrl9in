import defaultConfig from '~/story-helpers';
import Slider from '~/slider';

export default {
  ...defaultConfig,
  parameters: { ...defaultConfig.parameters, layout: 'fullscreen' },
};

export const Default = () => ({
  components: { Slider },
  template: `
    <slider></slider>
  `,
});

export const Value = () => ({
  components: { Slider },
  template: `
    <slider v-model="value"></slider>

    <code>{{ value }}</code>
  `,
  data: () => ({
    value: 50,
  }),
});

export const ThumbLabel = () => ({
  components: { Slider },
  template: `
    <slider class="mt12" :model-value="35" thumb-label></slider>
  `,
});

export const DropletThumbLabel = () => ({
  components: { Slider },
  template: `
    <slider class="mt12" :model-value="35" thumb-label="droplet"></slider>
  `,
});

export const MinAndMax = () => ({
  components: { Slider },
  template: `
    <slider v-model="value" :min="35" :max="65"></slider>

    <code>{{ value }}</code>
  `,
  data: () => ({
    value: 50,
  }),
});

export const Step = () => ({
  components: { Slider },
  template: `
    <slider v-model="value" :step="10"></slider>

    <code>{{ value }}</code>
  `,
  data: () => ({
    value: 50,
  }),
});

export const StepLabel = () => ({
  components: { Slider },
  template: `
    <slider v-model="value" :step="10" step-labels></slider>

    <pre class="mt6">{{ value }}</pre>
  `,
  data: () => ({
    value: 50,
  }),
});

export const Disabled = () => ({
  components: { Slider },
  template: `
    <slider :model-value="35" disabled></slider>
  `,
});

export const Readonly = () => ({
  components: { Slider },
  template: `
    <slider :model-value="35" readonly></slider>
  `,
});

export const Colors = () => ({
  components: { Slider },
  template: `
    <slider class="mt6" :model-value="35" color="error"></slider>
    <slider class="mt6" :model-value="35" color="warning"></slider>
    <slider class="mt6" :model-value="35" color="success"></slider>
    <slider class="mt6" :model-value="35" color="info"></slider>
  `,
});

// export const Default = () => ({
//   components: { Slider },
//   template: `
//     <slider></slider>
//   `
// })
