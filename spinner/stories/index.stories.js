import defaultConfig from '~/story-helpers';
import Spinner from '~/spinner';

export default defaultConfig;

export const Default = () => ({
  components: { Spinner },
  template: `
    <spinner></spinner>
  `,
});

export const Fade = () => ({
  components: { Spinner },
  template: `
    <spinner fade></spinner>
  `,
});

export const Bounce = () => ({
  components: { Spinner },
  template: `
    <spinner bounce></spinner>
  `,
});

export const Size = () => ({
  components: { Spinner },
  template: `
    <div class="w-flex align-center">
      <spinner class="ma2" fade xs />
      <spinner class="ma2" fade sm />
      <spinner class="ma2" fade md />
      <spinner class="ma2" fade lg />
      <spinner class="ma2" fade xl />
      <spinner class="ma2" fade size="5em" />
    </div>
  `,
});

export const Color = () => ({
  components: { Spinner },
  template: `
    <w-spinner class="ma2" fade color="green" />
    <w-spinner class="ma2" fade color="amber" />
    <w-spinner class="ma2" fade color="orange" />
    <w-spinner class="ma2" fade color="error" />
    <w-spinner class="ma2" fade color="pink" />
  `,
});
