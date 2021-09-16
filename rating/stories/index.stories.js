import defaultConfig from '~/story-helpers';
import Rating from '~/rating';
import '@mdi/font/css/materialdesignicons.min.css';

export default defaultConfig;

export const Default = () => ({
  components: { Rating },
  template: `
    <rating :model-value="3"></rating>
  `,
});

export const CustomIcon = () => ({
  components: { Rating },
  template: `
    <rating :model-value="3" icon="mdi mdi-heart"></rating>
  `,
});

export const Size = () => ({
  components: { Rating },
  template: `
    <rating :model-value="3" class="ma2" xs></rating>
    <br>
    <rating :model-value="3" class="ma2" sm></rating>
    <br>
    <rating :model-value="3" class="ma2" md></rating>
    <br>
    <rating :model-value="3" class="ma2" lg></rating>
    <br>
    <rating :model-value="3" class="ma2" xl></rating>
  `,
});

export const Max = () => ({
  components: { Rating },
  template: `
    <rating :model-value="3" :max="3" class="ma2"></rating>
    <br>
    <rating :model-value="3" :max="5" class="ma2"></rating>
    <br>
    <rating :model-value="3" :max="10" class="ma2"></rating>
  `,
});

export const Color = () => ({
  components: { Rating },
  template: `
    <rating :model-value="3" class="ma2" color="green"></rating>
    <br>
    <rating :model-value="3" class="ma2" color="amber"></rating>
    <br>
    <rating :model-value="3" class="ma2" color="orange"></rating>
    <br>
    <rating :model-value="3" class="ma2" color="error"></rating>
    <br>
    <rating :model-value="3" class="ma2" color="pink"></rating>
    <br>
    <br>
    Inactive color:
    <br>
    <rating :model-value="3" class="ma2" bg-color="pink-light5" color="pink"></rating>
    <br>
    <rating :model-value="3" class="ma2" bg-color="green-light5" color="pink"></rating>
  `,
});
