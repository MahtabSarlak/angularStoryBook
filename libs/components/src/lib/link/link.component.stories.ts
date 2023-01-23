import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { LinkComponent } from './link.component';// This exports the Stories group for this component

export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/Link',  // The component related to the Stories
  component: LinkComponent,  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [LinkComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta<LinkComponent>;

const DefaultTemplate: Story<LinkComponent> = (args: LinkComponent) => ({
  props: { ...args },
  template: `
    <app-link
      [color]="color"
      [href]="href"
      [target]="target"
    >
     default content
    </app-link>`,
});

const SecondaryTemplate: Story<LinkComponent> = (args: LinkComponent) => ({
  props: { ...args },
  template: `
    <app-link
      [color]="color"
      [href]="href"
      [target]="target"
    >
     second content
    </app-link>`,
});
export const BaseLink = DefaultTemplate.bind({
});
BaseLink.storyName="base link"
BaseLink.args={
  color: 'primary',
  href: 'https://storybook.js.org/',
  target: '_blank',
}

export const SecondLink = SecondaryTemplate.bind({
  color: 'primary',
  href: 'https://storybook.js.org/',
  target: '_blank',
});
SecondLink.storyName="second link"
SecondLink.args={
  color: 'primary',
  href: 'https://storybook.js.org/',
  target: '_blank',
}
