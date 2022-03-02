import React from 'react';
import { Link } from 'react-router-dom'

import { IoAppsSharp, IoPerson,IoCopySharp, IoColorWandOutline, IoPodiumSharp, IoRocket , IoCalendarOutline, IoPeople, IoLogoHtml5, IoTvSharp, IoCloudy, IoCartSharp} from 'react-icons/io5'

import {SidebarContainer, SidebarWrapper, SidebarMenu, SidebarTitle, SidebarList, SidebarListItem} from './styles'
import {IconButton} from './../../ui/buttons'

function SideBar (props) {
    return (  
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>User</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                        <IconButton>
                            <IoAppsSharp size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="/dashboard">Dashboard Page</Link>
                        </SidebarListItem>

                        <SidebarListItem>
                        <IconButton>
                            <IoPerson size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="/">User Sign Out</Link>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Shop By</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                        <IconButton>
                            <IoCopySharp size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="*">Categories</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                        <IconButton>
                            <IoColorWandOutline size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="*">New Releases</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                        <IconButton>
                            <IoPodiumSharp size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="*">Rating</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                        <IconButton>
                            <IoRocket size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="*">Genre</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                        <IconButton>
                            <IoCalendarOutline size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="*">Year</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                        <IconButton>
                            <IoPeople size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="*">Actor</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                        <IconButton>
                            <IoLogoHtml5 size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="*">Studio</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                        <IconButton>
                            <IoTvSharp size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="*">Blu-Ray</Link>
                        </SidebarListItem>
                        <SidebarListItem>
                        <IconButton>
                            <IoCloudy size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="*">Movies to Stream</Link>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Checkout</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                        <IconButton>
                            <IoCartSharp size="1.25rem" color="blue"/>
                        </IconButton>
                        <Link to="dashboard">Cart</Link>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default SideBar