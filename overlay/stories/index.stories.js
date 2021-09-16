import defaultConfig from '~/story-helpers';
import Overlay from '~/overlay';

export default defaultConfig;

// Overlays are fullscreen.

export const Default = () => ({
  components: { Overlay },
  template: `
    <overlay :model-value="true"></overlay>
  `,
});

export const Colors = () => ({
  components: { Overlay },
  template: `
    <overlay :model-value="true" bg-color="pink"></overlay>
  `,
});

export const InnerContent = () => ({
  components: { Overlay },
  template: `
    <overlay :model-value="true">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </overlay>
  `,
});
