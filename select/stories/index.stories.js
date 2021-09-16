import defaultConfig from '~/story-helpers';
import Select from '~/select';

export default defaultConfig;

const items = [{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }];

export const Default = () => ({
  components: { Select },
  template: `
    <Select :items="items"></Select>
  `,
  data: () => ({
    items,
  }),
});

export const Outline = () => ({
  components: { Select },
  template: `
    <Select :items="items" outline></Select>
  `,
  data: () => ({
    items,
  }),
});

export const Label = () => ({
  components: { Select },
  template: `
    <Select :items="items" label="Label"></Select>
  `,
  data: () => ({
    items,
  }),
});

export const Placeholder = () => ({
  components: { Select },
  template: `
    <Select :items="items" placeholder="Placeholder"></Select>
  `,
  data: () => ({
    items,
  }),
});

export const Disabled = () => ({
  components: { Select },
  template: `
    <Select :items="items" label="Label" disabled></Select>
    <br>
    With value:<br>
    <Select :items="items" model-value="Item 1" label="Label" disabled></Select>
  `,
  data: () => ({
    items,
  }),
});

export const Readonly = () => ({
  components: { Select },
  template: `
    <Select :items="items" label="Label" readonly></Select>
    <br>
    With value:<br>
    <Select :items="items" model-value="Item 1" label="Label" readonly></Select>
  `,
  data: () => ({
    items,
  }),
});

export const Colors = () => ({
  components: { Select },
  template: `
    <Select
      :items="items"
      model-value="Item 2"
      color="success">
    </Select>
    <br><br>

    <Select
      :items="items"
      model-value="Item 2"
      color="info">
    </Select>
    <br><br>

    <Select
      :items="items"
      model-value="Item 2"
      color="warning">
    </Select>
    <br><br>

    <Select
      :items="items"
      model-value="Item 2"
      color="error">
    </Select>

    <br>
    Colors in dropdown items:<br>
    <Select
      :items="items2"
      label="Pick a color">
    </Select>
  `,
  data: () => ({
    items,
    items2: [
      { label: 'red', color: 'red' },
      { label: 'green', color: 'green' },
      { label: 'blue', color: 'blue' },
    ],
  }),
});

export const CustomItems = () => ({
  components: { Select },
  template: `
    <Select :items="items" label="Label">
      <template #item="{ item, index }">
        <w-icon>wi-check</w-icon>

        <span class="mx2">
          This is the custom item
        </span>

        <w-tag class="white grey-light2--bg">
          {{ index }}
        </w-tag>
      </template>
    </Select>
  `,
  data: () => ({
    items,
  }),
});
