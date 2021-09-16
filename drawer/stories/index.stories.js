import defaultConfig from '~/story-helpers';
import Drawer from '~/drawer';

export default defaultConfig;

export const Default = () => ({
  components: { Drawer },
  template: `
    <button @click="showDrawer = !showDrawer">
      Show drawer
    </button>

    <drawer
      v-model="showDrawer"
      width="160px">
    </drawer>
  `,
  data: () => ({
    showDrawer: false,
  }),
});

export const Positions = () => ({
  components: { Drawer },
  template: `
    <button @click="showDrawer = true;position = 'right'">
      Show drawer on right
    </button><br><br>

    <button @click="showDrawer = true;position = 'left'">
      Show drawer on left
    </button><br><br>

    <button @click="showDrawer = true;position = 'top'">
      Show drawer on top
    </button><br><br>

    <button @click="showDrawer = true;position = 'bottom'">
      Show drawer on bottom
    </button>

    <drawer
      v-model="showDrawer"
      width="160px"
      :[position]="true">
    </drawer>
  `,
  data: () => ({
    showDrawer: false,
    position: 'right',
  }),
});

export const WidthAndHeight = () => ({
  components: { Drawer },
  template: `
    <button @click="showDrawer = !showDrawer">
      Show drawer
    </button>

    <drawer
      v-model="showDrawer"
      bottom 
      height="60px">
    </drawer>
  `,
  data: () => ({
    showDrawer: false,
  }),
});

export const Persistent = () => ({
  components: { Drawer },
  template: `
    <button @click="showDrawer = !showDrawer">
      Show drawer
    </button>

    <drawer
      v-model="showDrawer"
      bottom 
      height="60px"
      persistent>
      <div class="w-flex align-center justify-center">
        <button @click="showDrawer = false">Close</button>
      </div>
    </drawer>
  `,
  data: () => ({
    showDrawer: false,
  }),
});

export const PushContent = () => ({
  wAppFlex: true,
  wAppPadded: false,
  components: { Drawer },
  template: `
    <Drawer
      v-model="showDrawer"
      push-content
      :overlay-opacity="0.15"
      width="160px">
      <template #pushable>
        <div class="py12 w-flex column align-center justify-center">
          <p>Pushable content</p>
          <w-button
            @click="showDrawer = !showDrawer"
            outline
            color="primary">
            Show drawer
          </w-button>
        </div>
      </template>

      <div class="ma2">Drawer content</div>
    </Drawer>
  `,
  data: () => ({
    showDrawer: false,
  }),
});
