import defaultConfig from '~/story-helpers';
import Textarea from '~/textarea';

export default defaultConfig;

export const Default = () => ({
  components: { Textarea },
  template: `
    <Textarea></Textarea>
  `,
});

export const Outline = () => ({
  components: { Textarea },
  template: `
    <Textarea outline></Textarea>
  `,
});

export const Label = () => ({
  components: { Textarea },
  template: `
    <Textarea label="Label"></Textarea>
  `,
});

export const LabelPosition = () => ({
  components: { Textarea },
  template: `
    <Textarea
      class="mb4"
      outline
      label="Label" 
      label-position="inside">
    </Textarea>
    
    <Textarea
      class="mb4"
      outline
      label="Label" 
      label-position="left">
    </Textarea>
    
    <Textarea
      class="mb4"
      outline
      label="Label" 
      label-position="right">
    </Textarea>
  `,
});

export const Placeholder = () => ({
  components: { Textarea },
  template: `
    <Textarea placeholder="placeholder"></Textarea>
  `,
});

export const Shadow = () => ({
  components: { Textarea },
  template: `
    <Textarea shadow></Textarea>
  `,
});

export const Tile = () => ({
  components: { Textarea },
  template: `
    <Textarea outline tile></Textarea>
  `,
});

export const Disabled = () => ({
  components: { Textarea },
  template: `
    <Textarea 
      outline 
      disabled 
      label="Label" 
      model-value="Content">
    </Textarea>
  `,
});

export const Readonly = () => ({
  components: { Textarea },
  template: `
    <Textarea 
      outline 
      readonly 
      label="Label" 
      model-value="Content">
    </Textarea>
  `,
});

export const Colors = () => ({
  components: { Textarea },
  template: `
    <Textarea color="pink" model-value="Pink text"></Textarea>
    <Textarea bg-color="pink-light5" color="grey" model-value="Pink Background, grey text."></Textarea>
  `,
});
