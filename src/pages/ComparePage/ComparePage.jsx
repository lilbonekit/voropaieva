import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Text,
  Divider
} from '@chakra-ui/react'

const ComparePage = () => {
  return (
    <>
      <Heading>Порівняння Figma з іншими інструментами для розробки макетів</Heading>
      <Heading mt={10} size={'large'}>Figma vs Scketch</Heading>
      <TableContainer mt={10}>
        <Table variant='simple'>
          <TableCaption>Порівняння Figma та Sketch</TableCaption>
          <Thead>
            <Tr>
              <Th>Характеристика</Th>
              <Th>Figma</Th>
              <Th>Sketch</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Тип</Td>
              <Td>Веб-додаток</Td>
              <Td>Локальний застосунок</Td>
            </Tr>
            <Tr>
              <Td>Спільна робота</Td>
              <Td>Реальний час</Td>
              <Td>Залежить від зовнішніх інтеграцій</Td>
            </Tr>
            <Tr>
              <Td>Інтерфейс користувача</Td>
              <Td>Залежить від особистих уподобань</Td>
              <Td>Часто вважається більш інтуїтивним</Td>
            </Tr>
            <Tr>
              <Td>Вартість</Td>
              <Td>Безкоштовний та платні плани</Td>
              <Td>Платний застосунок</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Характеристика</Th>
              <Th>Figma</Th>
              <Th>Sketch</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Heading mt={10} size={'large'}>Figma vs Adobe XD</Heading>
      <TableContainer mt={10}>
        <Table variant='simple'>
          <TableCaption>Порівняння Figma та Adobe XD</TableCaption>
          <Thead>
            <Tr>
              <Th>Характеристика</Th>
              <Th>Figma</Th>
              <Th>Adobe XD</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Тип</Td>
              <Td>Веб-додаток</Td>
              <Td>Локальний застосунок</Td>
            </Tr>
            <Tr>
              <Td>Спільна робота</Td>
              <Td>Реальний час</Td>
              <Td>Залежить від зовнішніх інтеграцій</Td>
            </Tr>
            <Tr>
              <Td>Функціональність</Td>
              <Td>Широкий спектр інструментів та функцій</Td>
              <Td>Простота та легкість використання</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Характеристика</Th>
              <Th>Figma</Th>
              <Th>Adobe XD</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Heading mt={10} size={'large'}>Figma vs InVision</Heading>
      <TableContainer mt={10}>
      <Table variant='simple'>
        <TableCaption>Порівняння Figma та InVision</TableCaption>
        <Thead>
          <Tr>
            <Th>Характеристика</Th>
            <Th>Figma</Th>
            <Th>InVision</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Тип</Td>
            <Td>Веб-додаток</Td>
            <Td>Веб-додаток</Td>
          </Tr>
          <Tr>
            <Td>Спільна робота</Td>
            <Td>Реальний час</Td>
            <Td>Можливість коментувати та співпрацювати над проектами</Td>
          </Tr>
          <Tr>
            <Td>Функціональність</Td>
            <Td>Широкий спектр інструментів та функцій</Td>
            <Td>Наголос на прототипуванні та спільній роботі у команді</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Характеристика</Th>
            <Th>Figma</Th>
            <Th>InVision</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
    <Divider mt={10} mb={10}/>
    <Text>Порівнявши Figma з аналогічними інструментами розробки макетів, такими як Sketch, Adobe XD і InVision, можна зробити кілька висновків. Figma відзначається своєю онлайн-доступністю та можливістю реального часу співпраці, що робить його ідеальним вибором для роботи у команді, особливо з розрізненим географічним розміщенням. Однак інші інструменти, такі як Sketch і Adobe XD, можуть бути більш зручними для користувачів, які більше призначені для роботи на стаціонарному комп&apos;ютері та шукають локальні застосунки з більш інтуїтивно зрозумілим інтерфейсом. В той же час, InVision може відповідати потребам тих, хто більше зосереджений на прототипуванні та спільній роботі у команді. У кінцевому підсумку, вибір між цими інструментами залежить від конкретних потреб та пріоритетів користувача.</Text>
    <Divider mt={10} mb={10}/>
    </>
  )
}

export default ComparePage
