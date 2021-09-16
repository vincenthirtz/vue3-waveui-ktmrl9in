import defaultConfig from '~/story-helpers';
import Badge from '~/badge';
import Btn from '~/button';

export default defaultConfig;

export const Default = () => ({
  components: { Badge, Btn },
  template: `
    <badge model-value="1">
      <btn outline>button</btn>
    </badge>
  `,
});

export const Colors = () => ({
  components: { Badge, Btn },
  template: `
    <badge model-value="1" bg-color="primary" class="mx3">
      <btn outline>button</btn>
    </badge>
    <badge model-value="1" bg-color="secondary" class="mx3">
      <btn outline>button</btn>
    </badge>
    
    <br><br>
    <badge model-value="1" bg-color="success" class="mx3">
      <btn outline>button</btn>
    </badge>
    <badge model-value="1" bg-color="info" class="mx3">
      <btn outline>button</btn>
    </badge>
    <badge model-value="1" bg-color="warning" class="mx3">
      <btn outline>button</btn>
    </badge>
    <badge model-value="1" bg-color="error" class="mx3">
      <btn outline>button</btn>
    </badge>
  `,
});

export const Sizes = () => ({
  components: { Badge, Btn },
  template: `
    <badge xs model-value="1" class="mx3">
      <btn outline>button</btn>
    </badge>
    <badge sm model-value="1" class="mx3">
      <btn outline>button</btn>
    </badge>
    <badge md model-value="1" class="mx3">
      <btn outline>button</btn>
    </badge>
    <badge lg model-value="1" class="mx3">
      <btn outline>button</btn>
    </badge>
    <badge xl model-value="1" class="mx3">
      <btn outline>button</btn>
    </badge>
  `,
});

export const Positions = () => ({
  components: { Badge, Btn },
  template: `
    <badge model-value="1" top left class="ma2">
      <btn outline>button</btn>
    </badge>
    <badge model-value="1" top right class="ma2">
      <btn outline>button</btn>
    </badge>

    <br>
    <badge model-value="1" bottom left class="ma2">
      <btn outline>button</btn>
    </badge>
    <badge model-value="1" bottom right class="ma2">
      <btn outline>button</btn>
    </badge>


    <br><br>
      <badge model-value="1" top left overlap class="ma1">
      <btn outline class="ma1">button</btn>
    </badge>
    <badge model-value="1" top right overlap class="ma1">
      <btn outline class="ma1">button</btn>
    </badge>

    <br>
    <badge model-value="1" bottom left overlap class="ma1">
      <btn outline class="ma1">button</btn>
    </badge>
    <badge model-value="1" bottom right overlap class="ma1">
      <btn outline class="ma1">button</btn>
    </badge>
  `,
});

export const dot = () => ({
  components: { Badge, Btn },
  template: `
    <badge dot overlap>
      <btn outline class="mr2">button</btn>
    </badge>
  `,
});

export const Icon = () => ({
  components: { Badge, Btn },
  template: `
    <badge round overlap>
      <template #badge>
        <w-icon>wi-cross</w-icon>
      </template>
      <btn outline class="mr1">button</btn>
    </badge>
  `,
});
