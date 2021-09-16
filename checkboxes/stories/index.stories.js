import defaultConfig from '~/story-helpers';
import Checkboxes from '~/checkboxes';

export default defaultConfig;

const items = [{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }];

export const Default = () => ({
  components: { Checkboxes },
  template: `
    <checkboxes :items="items"></checkboxes>
  `,
  data: () => ({
    items,
  }),
});

export const Colors = () => ({
  components: { Checkboxes },
  template: `
    <checkboxes
      :items="items"
      :model-value="['Item 1', 'Item 2']"
      color="success">
    </checkboxes>
    <br><br>

    <checkboxes
      :items="items"
      :model-value="['Item 1', 'Item 2']"
      color="info">
    </checkboxes>
    <br><br>

    <checkboxes
      :items="items"
      :model-value="['Item 1', 'Item 2']"
      color="warning">
    </checkboxes>
    <br><br>

    <checkboxes
      :items="items"
      :model-value="['Item 1', 'Item 2']"
      color="error">
    </checkboxes>
  `,
  data: () => ({
    items,
  }),
});

export const Disabled = () => ({
  components: { Checkboxes },
  template: `
    <checkboxes
      :items="items"
      :model-value="['Item 2']"
      disabled>
    </checkboxes>
  `,
  data: () => ({
    items,
  }),
});

export const Round = () => ({
  components: { Checkboxes },
  template: `
    <checkboxes 
      :items="items" 
      :model-value="['Item 2']"
      round>
    </checkboxes>
  `,
  data: () => ({
    items,
  }),
});

export const Custom = () => ({
  components: { Checkboxes },
  template: `
    <checkboxes 
      :items="items" 
      :model-value="['Item 2']">
      <template #item="{ item, index }">
        <w-icon>wi-check</w-icon>
        <span class="mx2">
          This is the custom item
        </span>
        <code>{{ index }}</code>
      </template>
    </checkboxes>
  `,
  data: () => ({
    items,
  }),
});
