import React from 'react';

import { IoEllipsisVertical,IoNotificationsOutline,IoMailOpen,IoPersonCircle, IoFilm } from 'react-icons/io5'

import {AppBarStyles, AppBarItems, AppBarItem} from './styles'
import {IconButton} from './../../ui/buttons'


function AppBar (props) {
    return (  
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>
                    <IoFilm size="2.5rem" color="White"/>
                    MovieZilla
                </AppBarItem>
                <AppBarItems>
                    <IconButton>
                        <IoNotificationsOutline size="1.25rem" color="white"/>
                    </IconButton>
                    <IconButton>
                        <IoMailOpen size="1.25rem" color="white"/>
                    </IconButton>
                    <IconButton>
                        <IoPersonCircle size="1.25rem" color="white"/>
                    </IconButton>
                    <IconButton>
                        <IoEllipsisVertical size="1.25rem" color="black"/>
                    </IconButton>

                </AppBarItems>
            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar