import defaultConfig from '~/story-helpers';
import Progress from '~/progress';

export default defaultConfig;

// Indeterminate by default.
export const Default = () => ({
  components: { Progress },
  template: `
    <Progress></Progress>
  `,
});

// Indeterminate by default.
export const Circle = () => ({
  components: { Progress },
  template: `
    <Progress circle></Progress>
  `,
});

export const Sizes = () => ({
  components: { Progress },
  template: `
    <Progress model-value="38" size="1em" color="blue"></Progress>
    <Progress class="mt4" model-value="38" size="2.5em" color="blue"></Progress>

    <Progress circle size="3em" class="mt8"></Progress>
    <Progress circle size="6em" class="mt8"></Progress>
  `,
});

export const TileAndRound = () => ({
  components: { Progress },
  template: `
    <Progress
      model-value="38"
      size="1.4em"
      tile
      color="light-blue">
    </Progress>

    <Progress
      class="mt4"
      model-value="38"
      size="1.4em"
      round
      color="light-blue">
    </Progress>
  `,
});

export const OutlineAndShadow = () => ({
  components: { Progress },
  template: `
    <Progress
      model-value="38"
      size="1em"
      outline
      round
      color="light-blue">
    </Progress>

    <Progress
      class="mt4"
      model-value="38"
      size="1em"
      shadow
      color="light-blue">
    </Progress>
  `,
});

export const Stripes = () => ({
  components: { Progress },
  template: `
    <Progress
      model-value="38"
      size="1em"
      outline
      round
      color="light-blue"
      stripes>
    </Progress>

    <Progress
      class="mt4"
      model-value="38"
      size="1.4em"
      outline
      round
      color="primary"
      stripes>
    </Progress>
  `,
});

export const ProgressValue = () => ({
  components: { Progress },
  template: `
    <Progress
      model-value="38"
      size="1.3em"
      round
      color="primary"
      label>
    </Progress>

    <Progress
      class="mt4"
      model-value="38"
      size="1.3em"
      outline
      round
      label>
    </Progress>

    <Progress 
      circle 
      model-value="38" 
      label
      size="6em" 
      class="mt8"></Progress>
  `,
});

export const RoundAndFlatLineCap = () => ({
  components: { Progress },
  template: `
    <Progress model-value="38" size="2em" round round-cap></Progress>
    <Progress class="mt4" model-value="38" size="2em" round></Progress>

    <Progress circle model-value="38" round round-cap size="6em" class="mt8"></Progress>
    <Progress circle model-value="38" round size="6em" class="mt8 ml2"></Progress>
  `,
});

export const Colors = () => ({
  components: { Progress },
  template: `
    <Progress color="pink"></Progress>
    <Progress class="mt4" color="error"></Progress>
    <Progress class="mt4" color="warning"></Progress>
    <Progress class="mt4" color="info"></Progress>
    <Progress class="mt4" color="success"></Progress>
    
    <Progress circle class="mt4" color="pink"></Progress>
    <Progress circle class="mt4" color="error"></Progress>
    <Progress circle class="mt4" color="warning"></Progress>
    <Progress circle class="mt4" color="info"></Progress>
    <Progress circle class="mt4" color="success"></Progress>
  `,
});
