import defaultConfig from '~/story-helpers';
import Input from '~/input';

export default defaultConfig;

export const Default = () => ({
  components: { Input },
  template: `
    <Input autocomplete="off"></Input>
  `,
});

export const Outline = () => ({
  components: { Input },
  template: `
    <Input outline autocomplete="off"></Input>
  `,
});

export const Round = () => ({
  components: { Input },
  template: `
    <Input round autocomplete="off"></Input>
    
    <div class="title4 mt8 mb2">With outline</div>
    <Input round outline autocomplete="off"></Input>
  `,
});

export const Tile = () => ({
  components: { Input },
  template: `
    <Input tile autocomplete="off"></Input>
    
    <div class="title4 mt8 mb2">With outline</div>
    <Input tile outline autocomplete="off"></Input>
  `,
});

export const Shadow = () => ({
  components: { Input },
  template: `
    <Input shadow autocomplete="off"></Input>
    
    <div class="title4 mt8 mb2">With outline</div>
    <Input shadow outline autocomplete="off"></Input>
  `,
});

export const Label = () => ({
  components: { Input },
  template: `
    <Input label="Label" autocomplete="off"></Input>
    
    <div class="title4 mt8">Static label</div>
    <Input label="Label" static-label autocomplete="off"></Input>
  `,
});

export const LabelPosition = () => ({
  components: { Input },
  template: `
    <div class="title4 mb2">Label inside (default)</div>
    <Input label="Label" label-position="inside" autocomplete="off"></Input>
    
    <div class="title4 mt12 mb2">Label on the left</div>
    <Input label="Label" label-position="left" autocomplete="off"></Input>
    
    <div class="title4 mt12 mb2">Label on the right</div>
    <Input label="Label" label-position="right" autocomplete="off"></Input>
  `,
});

export const Placeholder = () => ({
  components: { Input },
  template: `
    <Input placeholder="Placeholder" autocomplete="off"></Input>
  `,
});

export const Disabled = () => ({
  components: { Input },
  template: `
    <Input disabled label="Disabled" autocomplete="off"></Input>
  `,
});

export const Readonly = () => ({
  components: { Input },
  template: `
    <Input readonly label="Readonly" autocomplete="off"></Input>
  `,
});

export const Background = () => ({
  components: { Input },
  template: `
    <Input bg-color="pink-light5" autocomplete="off"></Input>
    <Input bg-color="red-light5" class="mt4" autocomplete="off"></Input>
    <Input bg-color="amber-light5" class="mt4" autocomplete="off"></Input>
    <Input bg-color="blue-light5" class="mt4" autocomplete="off"></Input>
    <Input bg-color="green-light5" class="mt4" autocomplete="off"></Input>
  `,
});

export const Color = () => ({
  components: { Input },
  template: `
    <Input label="Label" color="pink" autocomplete="off"></Input>
    <Input label="Label" color="error" class="mt4" autocomplete="off"></Input>
    <Input label="Label" color="warning" class="mt4" autocomplete="off"></Input>
    <Input label="Label" color="info" class="mt4" autocomplete="off"></Input>
    <Input label="Label" color="success" class="mt4" autocomplete="off"></Input>
  `,
});
