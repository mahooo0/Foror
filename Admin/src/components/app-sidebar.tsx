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
import { Link } from 'react-router-dom';

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
                {
                    title: 'About Dev',
                    url: '/app/home_about_dev',
                    isActive: false, // Add the isActive property
                },
                {
                    title: 'Prefe For',
                    url: '/app/Home_Prefe',
                    isActive: false, // Add the isActive property
                },
                {
                    title: 'Colabarete Companies',
                    url: '/app/Colabarete_Companies',
                    isActive: false, // Add the isActive property
                },
                {
                    title: 'Services',
                    url: '/app/Home_Services',
                    isActive: false, // Add the isActive property
                },
            ],
        },
        {
            title: 'Protfolio',
            url: '#',
            items: [
                {
                    title: 'Category',
                    url: '/app/partfolio-category',
                },
                {
                    title: 'worcks',
                    url: '/app/partfolio',
                },
            ],
        },
        {
            title: 'Services',
            url: '#',
            items: [
                {
                    title: 'Services',
                    url: '/app/services',
                },
            ],
        },
        {
            title: 'Price List',
            url: '#',
            items: [
                {
                    title: 'prices',
                    url: '/app/prices',
                },
                {
                    title: ' featrues',
                    url: '/app/prices-featrues',
                },
            ],
        },
        {
            title: 'Contact',
            url: '#',
            items: [
                {
                    title: 'info',
                    url: '/app/contact-info',
                },
                {
                    title: 'socialmedia',
                    url: '/app/socialmedia',
                },
                {
                    title: 'users',
                    url: '/app/contacts',
                },
            ],
        },
        {
            title: 'blogs',
            url: '#',
            items: [
                {
                    title: 'blogs',
                    url: '/app/blogs',
                },
            ],
        },
        {
            title: 'About',
            url: '#',
            items: [
                {
                    title: 'Hero',
                    url: '/app/about-Hero',
                },
                {
                    title: 'Hero Dev',
                    url: '/app/about-dev-hero',
                },
                {
                    title: 'desing Tools',
                    url: '/app/desing-tools',
                },
                {
                    title: 'dev Tools',
                    url: '/app/dev-tools',
                },
                {
                    title: 'dev steps',
                    url: '/app/dev-steps',
                },
                {
                    title: 'statistics',
                    url: '/app/statistics',
                },
                {
                    title: 'Revue',
                    url: '/app/revue',
                },
            ],
        },
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
                                    <SidebarMenu className=" pl-3">
                                        {item.items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton
                                                    asChild
                                                    isActive={item.isActive}
                                                >
                                                    <Link to={item.url}>
                                                        {item.title}
                                                    </Link>
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
