import { createApp } from 'vue';
import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';
import './index.css';

const app = createApp({});
new WaveUI(app, {
  // Some Wave UI options.
});

export const withWaveUI = (story, content) => {
  const Story = story();
  const { wAppFlex, wAppPadded = true } = Story;
  return {
    app,
    components: { Story },
    template: `<w-app ${wAppFlex ? '' : 'block'} ${
      wAppPadded ? 'class="padded"' : ''
    }><Story /></w-app>`,
  };
};

export default {
  parameters: { layout: 'centered' },
  decorators: [withWaveUI],
};
