import * as React from 'react';
import { ChevronRight } from 'lucide-react';

import { VersionSwitcher } from '@/components/version-switcher';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
    versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
    navMain: [
        {
            title: 'Base Fuctuanality',
            url: '#',
            items: [
                {
                    title: 'Translates',
                    url: '/app/translates',
                },
                {
                    title: 'Dashboard',
                    url: '/app',
                    isActive: false, // Add the isActive property
                },
                {
                    title: 'Seo',
                    url: '/app/seo',
                    isActive: false, // Add the isActive property
                },
                {
                    title: 'Logo',
                    url: '/app/Logo',
                    isActive: false, // Add the isActive property
                },
            ],
        },
        {
            title: 'Home',
            url: '#',
            items: [
                {
                    title: 'Hero',
                    url: '/app/Home_hero',
                },
                {
                    title: 'About',
                    url: '/app/Home_About',
                    isActive: false, // Add the isActive property
                },
            ],
        },
        // {
        //     title: 'Getting Started',
        //     url: '#',
        //     items: [
        //         {
        //             title: 'Installation',
        //             url: '#',
        //         },
        //         {
        //             title: 'Project Structure',
        //             url: '#',
        //             isActive: false, // Add the isActive property
        //         },
        //     ],
        // },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <VersionSwitcher
                    versions={data.versions}
                    defaultVersion={data.versions[0]}
                />
            </SidebarHeader>
            <SidebarContent className="gap-0">
                {/* We create a collapsible SidebarGroup for each parent. */}
                {data.navMain.map((item) => (
                    <Collapsible
                        key={item.title}
                        title={item.title}
                        defaultOpen
                        className="group/collapsible"
                    >
                        <SidebarGroup>
                            <SidebarGroupLabel
                                asChild
                                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                            >
                                <CollapsibleTrigger>
                                    {item.title}{' '}
                                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton
                                                    asChild
                                                    isActive={item.isActive}
                                                >
                                                    <a href={item.url}>
                                                        {item.title}
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
