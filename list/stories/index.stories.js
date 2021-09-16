import defaultConfig from '~/story-helpers';
import List from '~/list';
import '@mdi/font/css/materialdesignicons.min.css';

export default defaultConfig;

const items = [
  { value: 1, label: 'Sitemap' },
  { value: 2, label: 'Home' },
  { value: 3, label: 'Current page' },
];

const items2 = [
  { value: 1, label: 'Sitemap', color: 'pink' },
  { value: 2, label: 'Home', color: 'red' },
  { value: 3, label: 'Current page', color: 'orange' },
  { value: 4, label: 'Current page', color: 'amber' },
];

const items3 = [
  { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' },
  {
    label: 'Check',
    id: 'check',
    icon: 'mdi mdi-check',
    route: '/w-list/check',
  },
  {
    label: 'Cross',
    id: 'cross',
    icon: 'mdi mdi-close',
    route: '/w-list/cross',
  },
  {
    label: 'Info',
    id: 'info',
    icon: 'mdi mdi-information',
    route: '/w-list/info',
  },
  {
    label: 'Warning',
    id: 'warning',
    icon: 'mdi mdi-alert',
    route: '/w-list/warning',
  },
  {
    label: 'Disabled',
    id: 'disabled',
    icon: 'mdi mdi-minus-circle',
    route: '/w-list/disabled',
    disabled: true,
  },
];

export const Default = () => ({
  components: { List },
  template: `
    <list :items="items"></list>
  `,
  data: () => ({
    items,
  }),
});

export const Icons = () => ({
  components: { List },
  template: `
    <list :items="items" icon="wi-check"></list>
  `,
  data: () => ({
    items,
  }),
});

export const Colors = () => ({
  components: { List },
  template: `
    <list :items="items" color="green"></list>
    <list :items="items" color="primary" class="mt4"></list>
  `,
  data: () => ({
    items,
  }),
});

export const Selectable = () => ({
  components: { List },
  template: `
    Single selection:
    <list 
      :items="items" 
      v-model="selection"
      class="mt3 mb8">
    </list>

    Multiple selection:
    <list 
      :items="items" 
      v-model="selection2" 
      multiple
      class="mt3">
    </list>
  `,
  data: () => ({
    items,
    selection: 1,
    selection2: [1, 2],
  }),
});

export const Hoverable = () => ({
  components: { List },
  template: `
    <list 
      :items="items" 
      hover>
    </list>
    <list 
      :items="items" 
      hover 
      color="green" 
      class="mt6">
    </list>
    <list 
      :items="items2" 
      hover 
      color="green" 
      class="mt6">
    </list>
  `,
  data: () => ({
    items,
    items2,
  }),
});

export const Checklist = () => ({
  components: { List },
  template: `
    <list 
      :items="items"
      v-model="selection1"
      checklist
      class="mb8">
    </list>

    Round checkboxes:
    <list 
      :items="items"
      v-model="selection2"
      checklist 
      round-checkboxes
      class="mt3 mb8">
    </list>

    Checklist with different colors:
    <list 
      :items="items2"
      v-model="selection3"
      checklist 
      round-checkboxes
      class="mt3">
    </list>
  `,
  data: () => ({
    items,
    items2,
    selection1: [1, 2, 3],
    selection2: [1, 2, 3],
    selection3: [1, 2, 3, 4],
  }),
});

export const Navigation = () => ({
  components: { List },
  template: `
    <list :items="items3" nav>
      <template #item="{ item }">
        <span>{{ item.label }}</span>
        <div class="spacer"></div>
        <w-icon md>{{ item.icon }}</w-icon>
      </template>
    </list>
  `,
  data: () => ({
    items3,
  }),
});
