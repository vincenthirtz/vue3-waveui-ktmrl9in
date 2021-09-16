import defaultConfig from '~/story-helpers';
import Icon from '~/icon';
import '@mdi/font/css/materialdesignicons.min.css';

export default defaultConfig;

export const Default = () => ({
  components: { Icon },
  template: `
    <icon>mdi mdi-home</icon>
    <icon>mdi mdi-star</icon>
    <icon>mdi mdi-paw</icon>
  `,
});

export const Sizes = () => ({
  components: { Icon },
  template: `
    <icon xs>mdi mdi-home</icon>
    <icon sm>mdi mdi-home</icon>
    <icon md>mdi mdi-home</icon>
    <icon lg>mdi mdi-home</icon>
    <icon xl>mdi mdi-home</icon>
    <br><br>

    Custom size:
    <icon size="5em">mdi mdi-home</icon>
  `,
});

export const Colors = () => ({
  components: { Icon },
  template: `
    <icon color="info">mdi mdi-home</icon>
    <icon color="success">mdi mdi-home</icon>
    <icon color="warning">mdi mdi-home</icon>
    <icon color="error">mdi mdi-home</icon>
    <icon color="pink">mdi mdi-home</icon>
  `,
});

export const Transformations = () => ({
  components: { Icon },
  template: `
    <div class="title4">Spin</div>
    <Icon 
      class="mr1" 
      xl 
      color="primary" 
      spin>
      mdi mdi-star
    </Icon>

    <div class="title4 mt6">Rotate</div>
    <Icon 
      class="rotated-icon mr1" 
      xl 
      color="primary" rotate135a>
      mdi mdi-paw
    </Icon>

    <Icon 
      class="rotated-icon mr1" 
      xl 
      color="primary" rotate90a>
      mdi mdi-paw
    </Icon>

    <Icon 
      class="rotated-icon mr1" 
      xl 
      color="primary" rotate45a>
      mdi mdi-paw
    </Icon>

    <Icon 
      class="rotated-icon mr1" 
      xl 
      color="primary">
      mdi mdi-paw
    </Icon>

    <Icon 
      class="rotated-icon mr1" 
      xl 
      color="primary" rotate45>
      mdi mdi-paw
    </Icon>

    <Icon 
      class="rotated-icon mr1" 
      xl 
      color="primary" rotate90>
      mdi mdi-paw
    </Icon>

    <Icon 
      class="rotated-icon mr1" 
      xl 
      color="primary" rotate135>
      mdi mdi-paw
    </Icon>

    <Icon 
      class="rotated-icon mr1" 
      xl 
      color="primary" rotate180>
      mdi mdi-paw
    </Icon>

    <div class="title4 mt6">Flip</div>
    <Icon 
      class="mr1" 
      xl 
      color="primary">
      mdi mdi-thumb-up
    </Icon>

    <Icon 
      class="mr1" 
      xl 
      color="primary" 
      flip-x>
      mdi mdi-thumb-up
    </Icon>

    <Icon 
      class="mr1" 
      xl 
      color="primary" 
      flip-y>
      mdi mdi-thumb-up
    </Icon>
  `,
});
