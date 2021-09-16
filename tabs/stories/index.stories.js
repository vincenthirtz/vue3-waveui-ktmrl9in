import defaultConfig from '~/story-helpers';
import Tabs from '~/tabs';

export default {
  ...defaultConfig,
  parameters: { ...defaultConfig.parameters, layout: 'fullscreen' },
};

const items = [
  { title: 'item 1', content: 'Item content 1' },
  { title: 'item 2', content: 'Item content 2' },
  { title: 'item 3', content: 'Item content 3' },
];

export const Default = () => ({
  components: { Tabs },
  template: `
    <tabs :items="items"></tabs>
  `,
  data: () => ({
    items,
  }),
});

export const Expand = () => ({
  components: { Tabs },
  template: `
    <tabs :items="items" :model-value="1"></tabs>
  `,
  data: () => ({
    items,
  }),
});

export const Colors = () => ({
  components: { Tabs },
  template: `
    <tabs :items="items" bg-color="amber-light5" class="my1"></tabs>
    <br>
    <tabs :items="items" color="pink" class="my1"></tabs>
  `,
  data: () => ({
    items,
  }),
});

export const SliderColor = () => ({
  components: { Tabs },
  template: `
    <tabs :items="items" slider-color="cyan"></tabs>
  `,
  data: () => ({
    items,
  }),
});

export const ActiveClass = () => ({
  components: { Tabs },
  template: `
    <tabs :items="items" active-class="cyan" class="my1"></tabs>
    <tabs :items="items" active-class="cyan--bg white" class="my1"></tabs>
  `,
  data: () => ({
    items,
  }),
});

export const Card = () => ({
  components: { Tabs },
  template: `
    <tabs :items="items" card></tabs>
  `,
  data: () => ({
    items,
  }),
});
