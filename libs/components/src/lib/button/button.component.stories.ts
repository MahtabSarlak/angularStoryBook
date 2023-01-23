import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ButtonComponent],
    })
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `<button met-button><span>test</span></button>`,
});
