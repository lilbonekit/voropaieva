import {
  Heading ,
  Box,
  Flex,
  List,
  ListItem,
  ListIcon,
  Text,
  Divider,
  Button,
  OrderedList,
  Kbd
} from "@chakra-ui/react"

import { CheckIcon } from "@chakra-ui/icons"

const AboutPage = () => {
  return (
    <>
      <Heading>Основні функції Figma</Heading>
      <Box mt={10}>
      <List spacing={3}>
        <ListItem>
          <Flex>
            <ListIcon as={CheckIcon} color='green.500' />
            <Box>
              <Heading fontSize={'large'}> Спільна робота в реальному час.</Heading>
              <Text w={['100%', null, '70%']}>Figma дозволяє кільком користувачам одночасно працювати над одним проектом, спільно редагуючи макети та спілкуючись у реальному часі.</Text>
            </Box>
          </Flex>
        </ListItem>

        <ListItem>
          <Flex>
            <ListIcon as={CheckIcon} color='green.500' />
            <Box>
              <Heading fontSize={'large'}>Векторне малювання та редагування</Heading>
              <Text w={['100%', null, '70%']}>Ви можете створювати та редагувати векторні об&apos;єкти, такі як форми, лінії та криві, для створення складних макетів інтерфейсу.</Text>
            </Box>
          </Flex>
        </ListItem>

        <ListItem>
          <Flex>
            <ListIcon as={CheckIcon} color='green.500' />
            <Box>
              <Heading fontSize={'large'}>Система шарів (Layers)</Heading>
              <Text w={['100%', null, '70%']}>Figma має потужну систему шарів, яка дозволяє вам організовувати та керувати видимістю різних елементів вашого макету.</Text>
            </Box>
          </Flex>
        </ListItem>

        <ListItem>
          <Flex>
            <ListIcon as={CheckIcon} color='green.500' />
            <Box>
              <Heading fontSize={'large'}>Бібліотеки компонентів (Components)</Heading>
              <Text w={['100%', null, '70%']}>Ви можете створювати та використовувати компоненти, які дозволяють вам повторно використовувати елементи дизайну та забезпечують єдність у всьому проекті.</Text>
            </Box>
          </Flex>
        </ListItem>

        <ListItem>
          <Flex>
            <ListIcon as={CheckIcon} color='green.500' />
            <Box>
              <Heading fontSize={'large'}>Прототипування (Prototyping)</Heading>
              <Text w={['100%', null, '70%']}>Figma дозволяє створювати інтерактивні прототипи, де ви можете встановлювати взаємодію між елементами та сторінками для демонстрації функціоналу вашого додатку або веб-сайту.</Text>
            </Box>
          </Flex>
        </ListItem>
      </List>
      </Box>
      <Divider mt={10}/>
      <Box mt={10}>
        <Heading fontSize={'3xl'}>Подробиці щодо того, як Figma працює для розробки макетів</Heading>
        <Text mt={5}>Figma - це веб-застосунок, що працює в браузері, тому ви можете отримати доступ до своїх макетів з будь-якого пристрою, що має Інтернет-підключення. Ви можете створювати нові макети з нуля або імпортувати файли з інших програм для дизайну. Крім того, Figma має широкий спектр інструментів для малювання, редагування та оформлення об&apos;єктів, що дозволяє створювати складні та креативні макети.</Text>
        <Flex gap={3} mt={5} justifyContent={"center"} flexWrap={'wrap'}>
          <Button as={'a'} w={['100%', null, 'fit-content']} target="_blank" href={'https://www.figma.com/downloads/'} colorScheme='teal' variant='solid'>Завантажити Figma</Button>
          <Button as={'a'} w={['100%', null, 'fit-content']} target="_blank" href={'https://www.figma.com/'} colorScheme='teal' variant='solid'>Перейти до Web версії</Button>
        </Flex>
      </Box>
      <Divider mt={10}/>
      <Box mt={10}>
        <Heading fontSize={'3xl'}>Демонстрація різних функцій та інструментів, які пропонує Figma:</Heading>
        <OrderedList spacing={3} mt={10}>
          <ListItem>
            <Flex>
              <Box>
                <Heading fontSize={'large'}>Створення об&apos;єктів</Heading>
                <Text w={['100%', null, '70%']}>Для створення прямокутників, кол та інших форм перейдіть до панелі інструментів, оберіть відповідний інструмент (наприклад, Rectangle Tool для прямокутників) і намалюйте форму на макеті. Ви можете встановити розміри та інші параметри форми у вікні налаштувань.</Text>
              </Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <Box>
                <Heading fontSize={'large'}>Робота з текстом</Heading>
                <Text w={['100%', null, '70%']}>Щоб додати текст, виберіть Text Tool з панелі інструментів, клацніть на макеті, щоб розмістити курсор, і почніть писати. Після введення тексту ви можете вибрати текст та використати панель інструментів для зміни шрифту, розміру, коліру тощо.</Text>
              </Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <Box>
                <Heading fontSize={'large'}>Використання компонентів</Heading>
                <Text w={['100%', null, '70%']}>Для створення компонентів (наприклад, кнопок або меню) спочатку створіть елемент дизайну, а потім виберіть його і використайте команду Create Component або натисніть <Kbd>Ctrl/Cmd</Kbd> + <Kbd>Alt</Kbd>+ <Kbd>K</Kbd>. Після цього ви можете використовувати цей компонент у своєму проекті.</Text>
              </Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <Box>
                <Heading fontSize={'large'}>Прототипування</Heading>
                <Text w={['100%', null, '70%']}>Для створення взаємодії між сторінками та анімацій перейдіть до режиму прототипування (Prototype mode) натиснувши на вкладку Prototype у верхній панелі. Потім виберіть об&apos;єкт, з яким ви хочете встановити взаємодію, та перетягніть стрілку до цільової сторінки або об&apos;єкту. Ви також можете налаштувати різні типи переходів та анімацій за допомогою відповідних опцій.</Text>
              </Box>
            </Flex>
          </ListItem>
        </OrderedList>
        <Flex justifyContent={'center'} w={['100%', null, '500px']} m={'30px auto'}>
          <iframe width="100%" height="400px" src="https://www.youtube.com/embed/8jCKxNGSUtk?si=gALJ7hTWnUlR-hng" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Flex>
ʼ      </Box>
    </>
  )
}

export default AboutPage
