import {
  Heading,
  Box,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  UnorderedList,
  ListItem,
  Text,
  SimpleGrid,
  CardFooter,
  Button,
  Image
} from "@chakra-ui/react"

const SuggestionPage = () => {
  return (
    <>
      <Heading>Покрокові інструкції з використання Figma для розробки макетів</Heading>
      <Box mt={10}>
        <Card>
          <CardHeader>
            <Heading size='md'>Figma workflow</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Створення нового проекту
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                      Увійдіть до свого облікового запису Figma та створіть новий проект.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                      Виберіть тип проекту (наприклад, мобільний додаток, веб-сайт тощо) та розмір канви.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Налаштування сітки та направляючих
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                      Використовуйте сітку для забезпечення вирівнювання елементів та зручного розміщення.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                      Використовуйте направляючі для точного розташування елементів та збереження консистентності дизайну.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Створення компонентів
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                      Створюйте компоненти для елементів, які повторюються у вашому дизайні (наприклад, кнопки, заголовки, форми тощо).
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                    Використовуйте компоненти для швидкого оновлення всього дизайну при зміні одного компонента.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Використання прототипування
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                      Додайте взаємодію та переходи між сторінками за допомогою функцій прототипування Figma.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                      Створюйте прототипи, щоб показати клієнтам або команді, як працюватиме кінцевий продукт.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Спільна робота з командою
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                      Запрошуйте інших учасників у ваш проект та працюйте над ним спільно.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text pt='2' fontSize='sm'>
                    Використовуйте коментарі та зміни у реальному часі для спілкування та збору зворотного зв&apos;язку.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>

      <Heading mt={10}>Приклади проєктів</Heading>

      <SimpleGrid m={'20px 0'} spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        <Card>
          <CardHeader>
            <Heading size='md'>Drift Car Website Design</Heading>
          </CardHeader>
          <CardBody>
            <Image
              maxW={{ base: '100%'}}
              borderRadius={10}
              mb={5}
              src='https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/7b1d86f14056b6f7c1dae6f365a6c277b48f9174'
              alt='Project 1'
            />
            <Text isTruncated>Hi Guys! Hope you are all doing great. Presenting a Falken Style Silvia Drift Car Web Design. This is a website design and a design system with a responsive display, wireframe, and auto layout.</Text>
          </CardBody>
          <CardFooter>
            <Button as={'a'} href={'https://www.figma.com/community/file/1361896595402131591/drift-car-website-design'}>Переглянути</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Heading size='md'>Kencan - Dating App UI Kit</Heading>
          </CardHeader>
          <CardBody>
            <Image
              maxW={{ base: '100%'}}
              borderRadius={10}
              mb={5}
              src='https://s3-alpha.figma.com/hub/file/4143198007/dcda2826-c266-4885-89eb-cca385d0fdea-cover.png'
              alt='Project 2'
            />
            <Text isTruncated>Kencan is a Premium & High Quality UI Kit with All Full Features of Dating, Social Media, Chat, Love, & Meet App. Kencan came with unique style and niche, you can easily edit and customize all elements with design components which can speed up design process for your projects.</Text>
          </CardBody>
          <CardFooter>
            <Button as={'a'} href={'https://www.figma.com/community/file/1214503152099045793/kencan-dating-app-ui-kit'}>Переглянути</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Heading size='md'>ProScan - Document & PDF Scanner App UI Kit</Heading>
          </CardHeader>
          <CardBody>
            <Image
              maxW={{ base: '100%'}}
              borderRadius={10}
              mb={5}
              src='https://s3-alpha.figma.com/hub/file/4146018811/cbd1cb13-531d-4028-afbe-a451729ebf42-cover.png'
              alt='Project 1'
            />
            <Text isTruncated>ProScan is a Premium & High Quality UI Kit with All Full Features of Document & PDF Scanner App. ProScan came with unique style and niche, you can easily edit and customize all elements with design components which can speed up design process for your projects. Everything is integrated with the design system, so you only need to change the color, logo, text, and so on in the design system, then the entire design screen will automatically change.</Text>
          </CardBody>
          <CardFooter>
            <Button as={'a'} href={'https://www.figma.com/community/file/1218823989467855715/proscan-document-pdf-scanner-app-ui-kit'}>Переглянути</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  )
}

export default SuggestionPage
