import styled from 'styled-components'; //imsc short code

const SidebarContainer = styled.div`
    /* flex: 1;
    height: calc(100vh - 50px); */
    background-color: rgb(161, 188, 214);
    box-shadow: 2px 0 4px -2px grey;
    width:250px;
    position: sticky;
    padding: 20px;
    
`
/*const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`*/
const SidebarMenu = styled.div`
    margin-bottom: 10px;
`
const SidebarTitle = styled.h3`
    font-size: 1rem;
    color: black;
`
const SidebarMainTitle = styled.h2`
    font-size: 1.5rem;
    color: black;
    margin-bottom: .5rem;
`

const SidebarList = styled.ul`
    list-style: none;
`
const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
/* &:hover {
        background-color: rgb(240, 240, 255);
    } */
`
export {SidebarContainer, SidebarMenu, SidebarMainTitle, SidebarTitle, SidebarList, SidebarListItem}