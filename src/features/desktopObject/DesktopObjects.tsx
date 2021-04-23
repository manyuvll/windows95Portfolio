import styled from 'styled-components';
import notePadIcon from '../../assets/icons/notepad.png'
import contactFolder from '../../assets/icons/contact-folder.png'
import { useAppDispatch } from '../../app/hooks';
import { ABOUT } from '../../pages/pagesTypes'
import { openPage } from '../../pages/pagesSlicer'

const DesktopItems = styled.div`
 height: 50vh;
 width: 5rem;
 display: flex;
 flex-direction: column;
 margin-left: 12px;
 margin-top: 10px;
`

const DesktopObjectWrapper = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    margin-bottom: 20px;
`

const DesktopObjectImg = styled.img `

`
const DesktopObjectTitle = styled.div `
    font-family: w95fa;
    font-size: 0.9rem;
    color: white;
    margin-top: 5px;
`

export default function DesktopObjects() {
    const dispatch = useAppDispatch()

    return (
    <DesktopItems>
        <DesktopObjectWrapper onClick={() => dispatch(openPage(ABOUT))}>
            <DesktopObjectImg src={notePadIcon}/>
            <DesktopObjectTitle>
                AboutMe.txt
            </DesktopObjectTitle>
        </DesktopObjectWrapper>
        <DesktopObjectWrapper>
            <DesktopObjectImg src={contactFolder}/>
            <DesktopObjectTitle>
                ContactMe
            </DesktopObjectTitle>
        </DesktopObjectWrapper>
    </DesktopItems>
    )
}