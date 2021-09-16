import defaultConfig from '~/story-helpers';
import Radios from '~/radios';

export default defaultConfig;

const items = [{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }];

export const Default = () => ({
  components: { Radios },
  template: `
    <radios :items="items"></radios>
  `,
  data: () => ({
    items,
  }),
});

export const Colors = () => ({
  components: { Radios },
  template: `
    <radios
      :items="items"
      model-value="Item 2"
      color="success">
    </radios>
    <br><br>

    <radios
      :items="items"
      model-value="Item 2"
      color="info">
    </radios>
    <br><br>

    <radios
      :items="items"
      model-value="Item 2"
      color="warning">
    </radios>
    <br><br>

    <radios
      :items="items"
      model-value="Item 2"
      color="error">
    </radios>
  `,
  data: () => ({
    items,
  }),
});

export const Disabled = () => ({
  components: { Radios },
  template: `
    <radios
      :items="items"
      model-value="Item 2"
      disabled>
    </radios>
  `,
  data: () => ({
    items,
  }),
});
