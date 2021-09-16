import defaultConfig from '~/story-helpers';
import Switch from '~/switch';

export default defaultConfig;

export const Default = () => ({
  components: { Switch },
  template: `
    <Switch :model-value="false" class="ma2"></Switch>
    <Switch :model-value="true" class="ma2"></Switch>
  `,
});

export const Disabled = () => ({
  components: { Switch },
  template: `
    <Switch :model-value="false" disabled class="ma2"></Switch>
    <Switch :model-value="true" disabled class="ma2"></Switch>
  `,
});

export const Color = () => ({
  components: { Switch },
  template: `
    <Switch :model-value="true" color="green" class="ma2"></Switch>
    <Switch :model-value="true" color="amber" class="ma2"></Switch>
    <Switch :model-value="true" color="orange" class="ma2"></Switch>
    <Switch :model-value="true" color="error" class="ma2"></Switch>
    <Switch :model-value="true" color="pink" class="ma2"></Switch>
  `,
});

export const Thin = () => ({
  components: { Switch },
  template: `
    <Switch :model-value="false" thin class="ma2"></Switch>
    <Switch :model-value="true" thin class="ma2"></Switch>
  `,
});
