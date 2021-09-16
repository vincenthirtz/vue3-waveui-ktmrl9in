import defaultConfig from '~/story-helpers';
import Dialog from '~/dialog';

export default defaultConfig;

export const Default = () => ({
  components: { Dialog },
  template: `
    <button @click="show = !show">{{ show ? 'Hide' : 'Show' }} dialog</button>
    <Dialog v-model="show">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </Dialog>
  `,
  data: () => ({
    show: false,
  }),
});

export const Persistent = () => ({
  components: { Dialog },
  template: `
    <button @click="show = !show">{{ show ? 'Hide' : 'Show' }} dialog</button>
    <Dialog v-model="show" persistent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
      <template #actions>
        <div class="spacer"></div>
        <w-button
          @click="show = false"
          bg-color="error"
          dark>
          Close
        </w-button>
      </template>
    </Dialog>
  `,
  data: () => ({
    show: false,
  }),
});

export const Nesting = () => ({
  components: { Dialog },
  template: `
    <button @click="show1 = !show1">{{ show1 ? 'Hide' : 'Show' }} dialog</button>
    <w-dialog
      v-model="show1"
      :width="600"
      title="Dialog 1">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
      <w-button
        class="mt6"
        @click="show2 = true"
        bg-color="indigo-light1"
        dark>
        Open dialog 2
      </w-button>

      <template #actions>
        <div class="spacer" />
        <w-button
          @click="show1 = false"
          bg-color="error"
          dark>
          Close
        </w-button>
      </template>
    </w-dialog>

    <w-dialog
      v-model="show2"
      :width="250"
      title="Dialog 2">
      <w-button class="my6"
        @click="show2 = false"
        bg-color="error"
        dark>
        Close
      </w-button>
    </w-dialog> 
  `,
  data: () => ({
    show1: false,
    show2: false,
  }),
});

export const CustomOverlay = () => ({
  components: { Dialog },
  template: `
    <button @click="show = !show">{{ show ? 'Hide' : 'Show' }} dialog</button>
    <w-dialog
      v-model="show"
      :width="500"
      :overlay-opacity="overlayChoice === 'opacity' && overlayOpacity"
      :overlay-color="(overlayChoice !== 'opacity' && overlayChoice) || ''">
      <template #title>
        <w-icon class="mr2">mdi mdi-tune</w-icon>
        Control panel
      </template>

      <w-radio
        class="d-flex mt1"
        v-model="overlayChoice"
        return-value="opacity">
        Overlay opacity
        <input
          class="ml2"
          v-model="overlayOpacity"
          type="number"
          step="0.1" min="0"
          max="1" />
      </w-radio>
      <w-radio
        class="d-flex mt1"
        v-model="overlayChoice"
        return-value="rgba(35, 71, 129, 0.5)">
        Custom color: transparent blue
      </w-radio>
      <w-radio
        class="d-flex mt1"
        v-model="overlayChoice"
        return-value="#e91e63">
        Custom color: opaque pink
      </w-radio>
      <w-radio
        class="d-flex mt1"
        v-model="overlayChoice"
        return-value="transparent">
        Custom color: transparent
      </w-radio>

      <template #actions>
        <div class="spacer" />
        <w-button
          @click="show = false"
          bg-color="error"
          dark>
          Close
        </w-button>
      </template>
    </w-dialog>
  `,
  data: () => ({
    show: false,
    overlayOpacity: 0.3,
    overlayChoice: 'opacity',
  }),
});
