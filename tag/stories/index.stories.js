import defaultConfig from '~/story-helpers';
import Tag from '~/tag';

export default defaultConfig;

export const Default = () => ({
  components: { Tag },
  template: `
    <tag>Tag</tag>
  `,
});

export const Outline = () => ({
  components: { Tag },
  template: `
    <tag outline>Tag</tag>
  `,
});

export const VModel = () => ({
  components: { Tag },
  template: `
    <tag v-model="tagOn" :outline="tagOn">Tag</tag>
  `,
  data: () => ({
    tagOn: true,
  }),
});
export const Closable = () => ({
  components: { Tag },
  template: `
    <tag v-model="tagOn" closable :outline="tagOn">Tag</tag>
  `,
  data: () => ({
    tagOn: true,
  }),
});

export const Round = () => ({
  components: { Tag },
  template: `
    <tag round>Tag</tag>
  `,
});

export const Tile = () => ({
  components: { Tag },
  template: `
    <tag tile>Tag</tag>
  `,
});

export const Shadow = () => ({
  components: { Tag },
  template: `
    <tag shadow>Tag</tag>
  `,
});

export const Size = () => ({
  components: { Tag },
  template: `
    <tag class="ma2" xs>tag</tag>
    <tag class="ma2" sm>tag</tag>
    <tag class="ma2" md>tag</tag>
    <tag class="ma2" lg>tag</tag>
    <tag class="ma2" xl>tag</tag>
    <br><br>
    Custom size:
    <br>
    <tag class="ma2" width="5em" height="2.5em">tag</tag>
  `,
});

export const Color = () => ({
  components: { Tag },
  template: `
    <tag class="ma2" color="green">tag</tag>
    <tag class="ma2" color="amber">tag</tag>
    <tag class="ma2" color="orange">tag</tag>
    <tag class="ma2" color="error">tag</tag>
    <tag class="ma2" color="pink">tag</tag>
    <br>
    <tag class="ma2" color="white" bg-color="green">tag</tag>
    <tag class="ma2" color="white" bg-color="amber">tag</tag>
    <tag class="ma2" color="white" bg-color="orange">tag</tag>
    <tag class="ma2" color="white" bg-color="error">tag</tag>
    <tag class="ma2" color="white" bg-color="pink">tag</tag>
  `,
});
