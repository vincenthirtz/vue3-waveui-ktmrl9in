import defaultConfig from '~/story-helpers';
import Accordion from '~/accordion';

export default {
  ...defaultConfig,
  parameters: { ...defaultConfig.parameters, layout: 'fullscreen' },
};

const items = [
  { title: 'item 1', content: 'Item content 1        ' },
  { title: 'item 2', content: 'Item content 2' },
  { title: 'item 3', content: 'Item content 3' },
];

export const Default = () => ({
  components: { Accordion },
  template: `
    <accordion :items="items"></accordion>
  `,
  data: () => ({
    items,
  }),
});

export const Expand = () => ({
  components: { Accordion },
  template: `
    <accordion :items="items" :model-value="[false, true, false]"></accordion>
  `,
  data: () => ({
    items,
  }),
});

export const ExpandSingle = () => ({
  components: { Accordion },
  template: `
    <accordion 
      :items="items" 
      :value="[false, true, false]" 
      expand-single>
    </accordion>
  `,
  data: () => ({
    items,
  }),
});

export const IconRight = () => ({
  components: { Accordion },
  template: `
    <accordion :items="items" expand-icon-right></accordion>
  `,
  data: () => ({
    items,
  }),
});
export const CustomExpandIcon = () => ({
  components: { Accordion },
  template: `
    <accordion :items="items" expand-icon="wi-plus"></accordion>
    <br>
    <accordion :items="items" :expand-icon="false"></accordion>
  `,
  data: () => ({
    items,
  }),
});

export const Shadow = () => ({
  components: { Accordion },
  template: `
    <accordion :items="items" shadow></accordion>
  `,
  data: () => ({
    items,
  }),
});

export const Colors = () => ({
  components: { Accordion },
  template: `
    <accordion :items="items" bg-color="primary" class="my1"></accordion>
    <accordion :items="items" bg-color="success-light3" class="my1"></accordion>
    <accordion :items="items" bg-color="amber-light5" class="my1"></accordion>
    <br>
    <accordion :items="items" color="primary" class="my1"></accordion>
  `,
  data: () => ({
    items,
  }),
});
