import defaultConfig from '~/story-helpers';
import Card from '~/card';

export default defaultConfig;

export const Default = () => ({
  components: { Card },
  template: `
    <card>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </card>
  `,
});

export const CardTitle = () => ({
  components: { Card },
  template: `
    <card title="Terms and conditions">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </card>
  `,
});

export const CardActions = () => ({
  components: { Card },
  template: `
    <card title="Terms and conditions">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.

      <template #actions>
        <div class="spacer"></div>
        <w-button bg-color="error" class="mr2">I disagree</w-button>
        <w-button bg-color="success">I agree</w-button>
      </template>
    </card>
  `,
});

export const Colors = () => ({
  components: { Card },
  template: `
    <card bg-color="amber-light5" class="my1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </card>

    <card bg-color="success-light3" class="my1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </card>

    <card color="primary" class="my1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </card>
  `,
});

export const Tile = () => ({
  components: { Card },
  template: `
    <card tile>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </card>
  `,
});

export const Shadow = () => ({
  components: { Card },
  template: `
    <card shadow>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </card>
  `,
});

export const Image = () => ({
  components: { Card },
  template: `
    <card image="https://antoniandre.github.io/wave-ui/images/japanese-wave.png">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.
    </card>
  `,
});
