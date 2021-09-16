import defaultConfig from '~/story-helpers';
import tooltip from '~/tooltip';
import '@mdi/font/css/materialdesignicons.min.css';

export default defaultConfig;

export const Default = () => ({
  components: { tooltip },
  template: `
    Hover the icon to see the tooltip.<br>

    <tooltip>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          xl
          color="primary-light2">
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </tooltip>
  `,
});

export const Positions = () => ({
  components: { tooltip },
  template: `
    <div class="text-center">
      <tooltip left>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Home
      </tooltip>

      <tooltip top>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Home
      </tooltip>

      <tooltip>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Home
      </tooltip>

      <tooltip right>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Home
      </tooltip>
    </div>
  `,
});

export const Colors = () => ({
  components: { tooltip },
  template: `
    Hover the icons to see the color of the tooltip.<br>

    <tooltip color="pink">
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          xl
          color="pink">
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </tooltip>

    <tooltip bg-color="green" color="white">
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          xl
          color="green">
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </tooltip>
  `,
});

export const ShowOnClick = () => ({
  components: { tooltip },
  template: `
    Click the icon to toggle the tooltip.<br>

    <tooltip show-on-click>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          xl
          color="primary-light2">
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </tooltip>
  `,
});

export const ProgrammaticToggle = () => ({
  components: { tooltip },
  template: `
    <button @click="show = !show">Toggle tooltip</button><br>

    <tooltip v-model="show" show-on-click>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          xl
          color="primary-light2">
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </tooltip>
  `,
  data: () => ({
    show: false,
  }),
});

export const Round = () => ({
  components: { tooltip },
  template: `
    <tooltip :model-value="true" show-on-click round>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          xl
          color="primary-light2">
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </tooltip>
  `,
  data: () => ({
    show: false,
  }),
});

export const Tile = () => ({
  components: { tooltip },
  template: `
    <tooltip :model-value="true" show-on-click tile>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          xl
          color="primary-light2">
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </tooltip>
  `,
  data: () => ({
    show: false,
  }),
});

export const Shadow = () => ({
  components: { tooltip },
  template: `
    <tooltip :model-value="true" show-on-click shadow>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          xl
          color="primary-light2">
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </tooltip>
  `,
  data: () => ({
    show: false,
  }),
});
