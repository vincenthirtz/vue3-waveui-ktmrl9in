import defaultConfig from '~/story-helpers';
import Timeline from '~/timeline';

export default defaultConfig;

const items = [
  { title: 'Item 1', content: 'Content 1' },
  { title: 'Item 2', content: 'Content 2' },
  { title: 'Item 3', content: 'Content 3' },
  { title: 'Item 4', content: 'Content 4' },
];

export const Default = () => ({
  components: { Timeline },
  template: `
    <timeline :items="items"></timeline>
  `,
  data: () => ({
    items,
  }),
});

export const Color = () => ({
  components: { Timeline },
  template: `
    <timeline :items="items" color="green"></timeline>
  `,
  data: () => ({
    items,
  }),
});

export const Icon = () => ({
  components: { Timeline },
  template: `
    <timeline :items="items" icon="wi-check" color="green"></timeline>
  `,
  data: () => ({
    items,
  }),
});

export const Custom = () => ({
  components: { Timeline },
  template: `
    <timeline :items="items">
      <template #item="{ item, index }">
        <w-icon>wi-check</w-icon>

        <span class="mx2">
          This is the custom item
        </span>

        <w-tag class="white grey-light2--bg">
          {{ index }}
        </w-tag>
      </template>
    </timeline>
  `,
  data: () => ({
    items,
  }),
});
