import defaultConfig from '~/story-helpers';
import Menu from '~/menu';
import '@mdi/font/css/materialdesignicons.min.css';

export default defaultConfig;

export const Default = () => ({
  components: { Menu },
  template: `
    Click the icon to see the menu.<br>

    <Menu>
      <template #activator="{ on }">
        <w-icon
          class="ma12"
          v-on="on"
          xl
          color="primary-light2">
          mdi mdi-home
        </w-icon>
      </template>
      Menu content
    </Menu>
  `,
});

export const Positions = () => ({
  components: { Menu },
  template: `
    <div class="text-center mt12">
      <Menu left>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>

      <Menu top>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>

      <Menu>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>

      <Menu right>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>
    </div>
  `,
});

export const Colors = () => ({
  components: { Menu },
  template: `
    <div class="text-center mt12">
      Hover the icons to see the color of the Menu.<br>

      <Menu color="pink">
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="pink">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>

      <Menu bg-color="green" color="white">
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="green">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>
    </div>
  `,
});

export const ShowOnHover = () => ({
  components: { Menu },
  template: `
    <div class="text-center mt12">
      Hover the icon to toggle the Menu.<br>

      <Menu show-on-hover>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>
    </div>
  `,
});

export const ProgrammaticToggle = () => ({
  components: { Menu },
  template: `
    <div class="text-center mt12">
      <button @click="show = !show">Toggle Menu</button><br>

      <Menu v-model="show" show-on-click>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>
    </div>
  `,
  data: () => ({
    show: false,
  }),
});

export const Persistent = () => ({
  components: { Menu },
  template: `
    <div class="text-center mt12">
      You can only close by clicking the activator again.
      <br>
      <Menu :model-value="true" persistent>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>
    </div>
  `,
  data: () => ({
    show: false,
  }),
});

export const hideOnMenuClick = () => ({
  components: { Menu },
  template: `
    <div class="text-center mt12">
      The menu will close when clicking inside it.
      <br>
      <Menu :model-value="true" hide-on-menu-click>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>
    </div>
  `,
  data: () => ({
    show: false,
  }),
});

export const Round = () => ({
  components: { Menu },
  template: `
    <div class="text-center mt12">
      <Menu :model-value="true" round>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>
    </div>
  `,
  data: () => ({
    show: false,
  }),
});

export const Tile = () => ({
  components: { Menu },
  template: `
    <div class="text-center mt12">
      <Menu :model-value="true" tile>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>
    </div>
  `,
  data: () => ({
    show: false,
  }),
});

export const Shadow = () => ({
  components: { Menu },
  template: `
    <div class="text-center mt12">
      <Menu :model-value="true" shadow>
        <template #activator="{ on }">
          <w-icon
            class="ma2"
            v-on="on"
            xl
            color="primary-light2">
            mdi mdi-home
          </w-icon>
        </template>
        Menu content
      </Menu>
    </div>
  `,
  data: () => ({
    show: false,
  }),
});
