import defaultConfig from '~/story-helpers';
import Breadcrumbs from '~/breadcrumbs';

export default defaultConfig;

const items = [
  { label: 'Sitemap', route: '/sitemap' },
  { label: 'Home', route: '/' },
  { label: 'Current page', route: '/w-breadcrumbs' },
];

export const Default = () => ({
  components: { Breadcrumbs },
  template: `
    <breadcrumbs :items="items"></breadcrumbs>
  `,
  data: () => ({
    items,
  }),
});

export const Colors = () => ({
  components: { Breadcrumbs },
  template: `
    <breadcrumbs :items="items" color="primary"></breadcrumbs><br>
    <breadcrumbs :items="items" color="pink"></breadcrumbs><br>
    <breadcrumbs :items="items" color="warning"></breadcrumbs><br>
    <div class="title2 mt6 mb4">Separator color:</div>
    <breadcrumbs :items="items" separator-color="red"></breadcrumbs><br>
    <breadcrumbs :items="items" color="warning" separator-color="red"></breadcrumbs>
  `,
  data: () => ({
    items,
  }),
});

export const Sizes = () => ({
  components: { Breadcrumbs },
  template: `
    <w-breadcrumbs class="my4" :items="items" xs></w-breadcrumbs>
    <w-breadcrumbs class="my4" :items="items" sm></w-breadcrumbs>
    <w-breadcrumbs class="my4" :items="items" md></w-breadcrumbs>
    <w-breadcrumbs class="my4" :items="items" lg></w-breadcrumbs>
    <w-breadcrumbs class="my4" :items="items" xl></w-breadcrumbs>
  `,
  data: () => ({
    items,
  }),
});

export const CustomItem = () => ({
  components: { Breadcrumbs },
  template: `
    <breadcrumbs :items="items">  
      <template #item="{ item, isLast }">
        <w-tag
          :color="isLast ? 'grey' : 'green'"
          round
          outline
          v-html="item.label">
        </w-tag>
      </template>
    </breadcrumbs>
  `,
  data: () => ({
    items,
  }),
});

export const CustomSeparator = () => ({
  components: { Breadcrumbs },
  template: `
    <breadcrumbs :items="items">  
      <template #separator>//</template>
    </breadcrumbs>
  `,
  data: () => ({
    items,
  }),
});

export const LinkLastItem = () => ({
  components: { Breadcrumbs },
  template: `
    <breadcrumbs :items="items" link-last-item></breadcrumbs>
  `,
  data: () => ({
    items,
  }),
});
