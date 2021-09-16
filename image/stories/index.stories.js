import defaultConfig from '~/story-helpers';
import Image from '~/image';

export default defaultConfig;

export const Default = () => ({
  components: { Image },
  template: `
    <Image src="https://antoniandre.github.io/wave-ui/images/favicon.png"></Image>
  `,
});

export const Dimensions = () => ({
  components: { Image },
  template: `
    <Image 
      src="https://antoniandre.github.io/wave-ui/images/japanese-wave.png"
      class="mr5"
      :width="150"
      :height="150">
    </Image>
  `,
});

export const Ratio = () => ({
  components: { Image },
  template: `
    <Image 
      src="https://antoniandre.github.io/wave-ui/images/japanese-wave.png"
      :ratio="233 / 1000">
    </Image>
  `,
});

export const Spinner = () => ({
  components: { Image },
  template: `
    <Image 
      src="https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png"
      width="100%"
      :ratio="1 / 2">
    </Image>

    <small class="grey d-block mt8">Dev notes: disabling the browser cache will prevent you from seeing the transition.
The reason for it is that the image first loads in the w-image component, then once it's fully loaded, the image src is filled (or background url) and the image would load again if you disable the cache. On big images, you would then see a truncated image until completely loaded, just like a standard <img>.</small>
  `,
});

export const Lazy = () => ({
  components: { Image },
  template: `
    <h1>scroll down to see the lazy-loaded image!</h1>
    <br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br>

    <Image 
      src="https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png"
      lazy
      :ratio="2550 / 5098">
    </Image>
  `,
});

export const Fallback = () => ({
  components: { Image },
  template: `
    <Image 
      src="broken link"
      fallback="https://antoniandre.github.io/wave-ui/images/not-found.jpg"
      @error="showError = true">
    </Image>

    <strong v-if="showError" class="d-block mt8">Oops. The image could not load!</strong>
  `,
  data: () => ({
    showError: false,
  }),
});
