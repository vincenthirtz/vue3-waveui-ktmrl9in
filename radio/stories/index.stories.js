import defaultConfig from '~/story-helpers';
import Radio from '~/radio';

export default defaultConfig;

export const Default = () => ({
  components: { Radio },
  template: `
    <radio label="Radio"></radio>
  `,
});

export const Colors = () => ({
  components: { Radio },
  template: `
    <Radio
      :model-value="true"
      label="Radio"
      color="success">
    </Radio>
    <br><br>

    <Radio
      :model-value="true"
      label="Radio"
      color="info">
    </Radio>
    <br><br>

    <Radio
      :model-value="true"
      label="Radio"
      color="warning">
    </Radio>
    <br><br>

    <Radio
      :model-value="true"
      label="Radio"
      color="error">
    </Radio>
  `,
});

export const Disabled = () => ({
  components: { Radio },
  template: `
    <Radio
      :model-value="true"
      label="Radio"
      disabled>
    </Radio>
    <br><br>

    <Radio
      label="Radio"
      disabled>
    </Radio>
  `,
});
