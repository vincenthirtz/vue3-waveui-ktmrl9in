import defaultConfig from '~/story-helpers';
import Checkbox from '~/checkbox';

export default defaultConfig;

export const Default = () => ({
  components: { Checkbox },
  template: `
    <checkbox :model-value="true" label="Checkbox"></checkbox>
  `,
});

export const Colors = () => ({
  components: { Checkbox },
  template: `
    <checkbox
      :model-value="true"
      label="Checkbox"
      color="success">
    </checkbox>
    <br><br>

    <checkbox
      :model-value="true"
      label="Checkbox"
      color="info">
    </checkbox>
    <br><br>

    <checkbox
      :model-value="true"
      label="Checkbox"
      color="warning">
    </checkbox>
    <br><br>

    <checkbox
      :model-value="true"
      label="Checkbox"
      color="error">
    </checkbox>
  `,
});

export const Disabled = () => ({
  components: { Checkbox },
  template: `
    <checkbox
      :model-value="true"
      label="Checkbox"
      disabled>
    </checkbox>
  `,
});

export const Indeterminate = () => ({
  components: { Checkbox },
  template: `
    <checkbox
      :model-value="true"
      label="Checkbox"
      indeterminate>
    </checkbox>
  `,
});

export const Round = () => ({
  components: { Checkbox },
  template: `
    <checkbox 
      :model-value="true" 
      label="Checkbox"
      round>
    </checkbox>
  `,
});
