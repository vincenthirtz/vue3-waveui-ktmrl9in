import defaultConfig from '~/story-helpers';
import Table from '~/table';
import Button from '~/button';

export default {
  ...defaultConfig,
  parameters: { ...defaultConfig.parameters, layout: 'fullscreen' },
};

const headers = [
  { label: 'ID', key: 'id' },
  { label: 'First name', key: 'firstName' },
  { label: 'Last name', key: 'lastName' },
];

const items = [
  { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
  { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
  { id: 3, firstName: 'Rory', lastName: 'Bristol' },
  { id: 4, firstName: 'Daley', lastName: 'Elliott' },
  { id: 5, firstName: 'Virgil', lastName: 'Carman' },
  { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
  { id: 7, firstName: 'Beckah', lastName: 'Mann' },
  { id: 8, firstName: 'Davie', lastName: 'Forester' },
  { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
  { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
  { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
  { id: 12, firstName: 'Sheree', lastName: 'Castle' },
  { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
  { id: 14, firstName: 'Maude', lastName: 'Hayley' },
  { id: 15, firstName: 'Josie', lastName: 'Richard' },
];

export const Default = () => ({
  components: { Table },
  template: `
    <Table 
      :headers="headers"
      :items="items">
    </Table>
  `,
  data: () => ({
    headers,
    items: items.slice(0, 5),
  }),
});

export const NoData = () => ({
  components: { Table },
  template: `
    <Table 
      :headers="headers"
      :items="[]">
    </Table>
  `,
  data: () => ({
    headers,
    items: items.slice(0, 5),
  }),
});

export const Alignments = () => ({
  components: { Table },
  template: `
    <Table 
      :headers="headers"
      :items="items">
    </Table>
  `,
  data: () => ({
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName', align: 'center' },
      { label: 'Last name', key: 'lastName', align: 'right' },
    ],
    items: items.slice(0, 5),
  }),
});

export const noHeaders = () => ({
  components: { Table },
  template: `
    <Table 
      :headers="headers"
      :items="items"
      no-headers>
    </Table>
  `,
  data: () => ({
    headers,
    items: items.slice(0, 5),
  }),
});

export const fixedHeaders = () => ({
  components: { Table },
  template: `
    <Table 
      :headers="headers"
      :items="items"
      fixed-headers
      style="height: 250px">
    </Table>
  `,
  data: () => ({
    headers,
    items,
  }),
});

// export const MobileLayout = () => ({
//   components: { Table },
//   template: `
//     <Table
//       :headers="headers"
//       :items="items"
//       :mobile-breakpoint="900">
//     </Table>
//   `,
//   data: () => ({
//     headers,
//     items: items.slice(0, 5)
//   })
// })

export const sorting = () => ({
  components: { Table },
  template: `
    Current sorting: 
    <code>{{ sort }}</code>
    
    <Table 
      class="mt4"
      :headers="headers"
      :items="items"
      v-model:sort="sort">
    </Table>
  `,
  data: () => ({
    headers,
    items: items.slice(0, 5),
    sort: '+firstName',
  }),
});

export const filtering = () => ({
  components: { Table, Button },
  template: `
    <div class="w-flex wrap mb3">
      <Button
        class="mr2 mb1"
        @click="activeFilter = 0"
        round
        :outline="activeFilter !== 0">
        No filter
      </Button>

      <Button
        class="mr2 mb1"
        @click="activeFilter = 1"
        round
        :outline="activeFilter !== 1">
        Last name starting with 'M'
      </Button>

      <Button
        class="mr2 mb1"
        @click="activeFilter = 2"
        round
        :outline="activeFilter !== 2">
        ID >= 10
      </Button>
    </div>
    
    <Table 
      class="mt4"
      :headers="headers"
      :items="items"
      :filter="filters[activeFilter]">
    </Table>
  `,
  data: () => ({
    headers,
    items,
    filters: [
      null,
      (item) => item.lastName[0] === 'M',
      (item) => item.id >= 10,
    ],
    activeFilter: 0,
  }),
});
