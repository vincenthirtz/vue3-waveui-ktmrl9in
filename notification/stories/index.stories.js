import defaultConfig from '~/story-helpers';
import Notification from '~/notification';

export default defaultConfig;

export const Default = () => ({
  components: { Notification },
  template: `
    <Notification color="pink">This is a notification</Notification>
  `,
});

export const Positions = () => ({
  components: { Notification },
  template: `
    <Notification top left>Top left corner</Notification>
    <Notification top>Top center</Notification>
    <Notification top right>Top right corner</Notification>
    <Notification bottom left>Bottom left corner</Notification>
    <Notification bottom>Bottom center</Notification>
    <Notification bottom right>Bottom right corner</Notification>
  `,
});

export const Colors = () => ({
  components: { Notification },
  template: `
    <Notification top left color="pink">Top left corner</Notification>
    <Notification top color="error">Top center</Notification>
    <Notification top right color="warning">Top right corner</Notification>
    <Notification bottom left color="amber">Bottom left corner</Notification>
    <Notification bottom color="success">Bottom center</Notification>
    <Notification bottom right color="info">Bottom right corner</Notification>
  `,
});

export const Types = () => ({
  components: { Notification },
  template: `
    <Notification error top left>Error</Notification>
    <Notification warning top right>Warning</Notification>
    <Notification success bottom left>Success</Notification>
    <Notification info bottom right>Info</Notification>
  `,
});

export const Plain = () => ({
  components: { Notification },
  template: `
    <Notification error plain top left>Error</Notification>
    <Notification warning plain top right>Warning</Notification>
    <Notification success plain bottom left>Success</Notification>
    <Notification info plain bottom right>Info</Notification>
  `,
});
