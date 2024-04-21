import {
  Heading,
  Card,
  Image,
  CardBody,
  Text,
  Stack,
  Box,
  OrderedList,
  ListItem
} from "@chakra-ui/react"

const PluginsPage = () => {
  return (
    <>
      <Heading>Огляд плагінів для Figma</Heading>
      <Stack spacing='4' mt={10}>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://i.ytimg.com/vi/DbdqoMQrcRM/maxresdefault.jpg'
            alt='Caffe Latte'
          />

        <Stack>
          <CardBody>
            <Heading size='md'>Unsplash</Heading>

            <Text py='2'>
              З цим плагіном ви можете швидко додавати високоякісні фотографії з Unsplash безпосередньо у ваші макети.
            </Text>
          </CardBody>
        </Stack>
        </Card>

        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTRjS1cMqY7Rzu7Ywauf1oPN3bOMbaZ-grdK5TolDew&s'
            alt='Caffe Latte'
          />

        <Stack>
          <CardBody>
            <Heading size='md'>Content Reel</Heading>

            <Text py='2'>
              Цей плагін дозволяє швидко заповнювати макети контентом, таким як текст, зображення та дані, щоб швидко створювати реалістичні макети.
            </Text>
          </CardBody>
        </Stack>
        </Card>

        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://www.figma.com/community/thumbnail?resource_id=960109239648737173&resource_type=plugin'
            alt='Caffe Latte'
          />

        <Stack>
          <CardBody>
            <Heading size='md'>Chart</Heading>

            <Text py='2'>
              Цей плагін дозволяє автоматично створювати діаграми та графіки на основі даних, що ви вводите, прямо у Figma.
            </Text>
          </CardBody>
        </Stack>
        </Card>

        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://cdnp3.stackassets.com/50020c15b0c3eb2d56ac18e34ee8c4ee776b24ca/store/3bf607f7b3512d73c02884e4c700e575b778fe02c64d82119a8f88edd8af/sale_40133_primary_image.jpg'
            alt='Caffe Latte'
          />

        <Stack>
          <CardBody>
            <Heading size='md'>Mockuuups Studio</Heading>

            <Text py='2'>
              Цей плагін надає доступ до бібліотеки з широким вибором макетів та шаблонів для швидкої розробки дизайнів.
            </Text>
          </CardBody>
        </Stack>
        </Card>

        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://www.figma.com/community/thumbnail?resource_id=769588393361258724&resource_type=plugin'
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Vectary 3D</Heading>

              <Text py='2'>
                Використовуйте цей плагін для імпорту та редагування 3D-моделей безпосередньо у Figma для створення привабливих та інноваційних дизайнів.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Stack>

      <Box mt={10}>
        <Heading>Інтеграція Figma з іншими інструментами та сервісами</Heading>
        <OrderedList mt={10} spacing={5} mb={10}>
          <ListItem>
            <Heading size={'small'}>Zeplin</Heading>
             <Text w={['100%', null, '70%']}>Ця інтеграція дозволяє легко експортувати дизайни з Figma у Zeplin для співпраці з розробниками та іншими учасниками команди.</Text>
          </ListItem>
          <ListItem>
            <Heading size={'small'}>Adobe XD</Heading>
             <Text w={['100%', null, '70%']}>Ви можете експортувати макети з Figma у формат Adobe XD, щоб поділитися даними між різними дизайнерськими інструментами.</Text>
          </ListItem>
          <ListItem>
            <Heading size={'small'}>Slack</Heading>
             <Text w={['100%', null, '70%']}>Інтеграція Figma з Slack дозволяє надсилати сповіщення та переглядати зміни у макетах безпосередньо у вашому робочому просторі.</Text>
          </ListItem>
          <ListItem>
            <Heading size={'small'}>Jira</Heading>
             <Text w={['100%', null, '70%']}>Ви можете прив&apos;язати макети Figma до завдань у Jira, щоб забезпечити спрощену співпрацю між дизайнерами та розробниками.</Text>
          </ListItem>
          <ListItem>
            <Heading size={'small'}>GitHub</Heading>
             <Text w={['100%', null, '70%']}>Інтеграція Figma з GitHub дозволяє автоматично синхронізувати зміни у макетах з відповідними репозиторіями проектів.</Text>
          </ListItem>
        </OrderedList>
      </Box>
    </>
  )
}

export default PluginsPage
