import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  IconButton,
  useDisclosure,
  Divider,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import CustomLink from './CustomLink'

const SideMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Flex p={5} justifyContent={'flex-end'}>
        <IconButton
          boxSize={'3rem'}
          ref={btnRef}
          onClick={onOpen}
          icon={<HamburgerIcon />}
        />
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Навігація</DrawerHeader>
          <Divider />
          <DrawerBody>
            <Flex flexDirection={'column'} gap={3} mt={5}>
              <CustomLink onClose={onClose} to={'/'}>Головна сторінка</CustomLink>
              <CustomLink onClose={onClose} to={'/about'}>Основні функції Figma</CustomLink>
              <CustomLink onClose={onClose} to={'/suggestion'}>Практичні поради та приклади використання</CustomLink>
              <CustomLink onClose={onClose} to={'/plugins'}>Огляд плагінів та інтеграцій</CustomLink>
              <CustomLink onClose={onClose} to={'/compare'}>Порівняння з іншими інструментами</CustomLink>
              <CustomLink onClose={onClose} to={'/faq'}>Часті запитання (FAQ)</CustomLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideMenu
