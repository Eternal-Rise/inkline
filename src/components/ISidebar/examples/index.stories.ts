import ISidebar from '../index.vue';
import {
    ISidebarBasicExample,
    ISidebarCollapseBreakpointExample,
    ISidebarCollapseTrueExample,
    ISidebarCollapseFalseExample,
    ISidebarColorVariantsExample,
    ISidebarCollapsePositionExample,
    ISidebarCollapsibleExample,
    ISidebarSizeVariantsExample,
    ISidebarPlacementExample,
    ISidebarRoutingExample,
    ISidebarRoutingActiveExample
} from './index';
import { colorArgType, sizeArgType } from '@inkline/inkline/__storybook__';

export default {
    component: ISidebar,
    title: 'Components/Sidebar',
    argTypes: {
        ...colorArgType(),
        ...sizeArgType()
    }
};

const Template = (args: any) => ({
    components: {
        ISidebarBasicExample
    },
    setup: () => ({ args }),
    template: '<ISidebarBasicExample v-bind="args" />'
});

export const Basic = Template.bind({});
export const CollapseBreakpoint = () => ISidebarCollapseBreakpointExample;
export const CollapseTrue = () => ISidebarCollapseTrueExample;
export const CollapseFalse = () => ISidebarCollapseFalseExample;
export const ColorVariants = () => ISidebarColorVariantsExample;
export const CollapsePosition = () => ISidebarCollapsePositionExample;
export const Collapsible = () => ISidebarCollapsibleExample;
export const SizeVariants = () => ISidebarSizeVariantsExample;
export const Placement = () => ISidebarPlacementExample;
export const Routing = () => ISidebarRoutingExample;
export const RoutingActive = () => ISidebarRoutingActiveExample;
