import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
  Text,
  useToast
} from '@chakra-ui/react'

import { useEffect } from 'react'

import { MinusIcon, AddIcon } from '@chakra-ui/icons'

const FaqPage = () => {
  const toast = useToast()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toast({
        title: `Дякую, що додивився сайт до кінця!`,
        status: 'success',
        isClosable: true,
        description: 'Сподіваюсь, цей сайт допоміг Вам ознайомитися з Figma - потужним інструментом для проектування інтерфейсів!'
      });
    }, 2000);

    return () => clearTimeout(timeoutId);
  })

  return (
    <>
      <Heading>Часті запитання про використання Figma</Heading>
      <Accordion mt={10} allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Чим відрізняється Figma від інших програм для дизайну?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Figma відрізняється своєю онлайн-доступністю та можливістю співпраці в реальному часі, що робить його ідеальним для командної роботи. Крім того, Figma має широкий вибір інтеграцій з іншими інструментами та сервісами.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Які переваги використання Figma для дизайну?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Переваги використання Figma включають реально-часову співпрацю, зручний інтерфейс користувача, можливість роботи з будь-якого пристрою, широкий вибір інтеграцій та безкоштовні та платні плани доступу.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Як я можу поділитися своїм проектом у Figma з колегами?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Ви можете поділитися своїм проектом у Figma, надіславши посилання на проект або надавши доступ до нього через електронну пошту. Також можна скористатися можливістю співпраці в реальному часі, дозволяючи вашим колегам переглядати та редагувати проект одночасно з вами.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Які інтеграції доступні для Figma?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Figma має широкий вибір інтеграцій з іншими інструментами та сервісами, такими як Zeplin, Slack, Jira, Adobe XD, GitHub та багатьма іншими. Ці інтеграції полегшують спільну роботу з командою та іншими інструментами у вашому робочому процесі.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Як можна отримати допомогу щодо використання Figma?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Ви можете скористатися різними ресурсами для отримання допомоги щодо використання Figma, такими як офіційна документація, відеоуроки на YouTube, форуми спільноти та підтримка клієнтів у випадку виникнення проблем.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Чи можна імпортувати файли з інших програм для дизайну у Figma?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Так, Figma підтримує імпорт файлів з інших програм для дизайну, таких як Sketch та Adobe XD. Ви можете імпортувати файли у форматі .sketch, .xd, .fig та інші.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Як можна експортувати готові макети з Figma?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Ви можете експортувати готові макети з Figma у різних форматах, таких як PNG, JPG, SVG, PDF та інші. Для експорту виберіть потрібні елементи або всю артборду та використайте опцію Експорт у панелі інструментів.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Чи можна використовувати Figma для створення анімацій та прототипів?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Так, Figma має вбудовані інструменти для створення анімацій та прототипів. Ви можете створювати взаємодію між елементами, переходи між сторінками та інші анімаційні ефекти.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Як зберегти версії проектів та відстежувати їхні зміни у Figma?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Figma автоматично зберігає версії проектів у хмарі, що дозволяє вам відстежувати зміни та відновлювати попередні версії. Ви також можете використовувати функцію коментарів для обговорення змін у проекті з колегами.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Як встановити Figma на мій пристрій?
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Figma є веб-додатком, тому ви можете просто зайти на веб-сайт Figma та увійти у свій обліковий запис або створити новий. Також є можливість встановлення додатка Figma для настільних комп&apos;ютерів з операційними системами Windows та macOS.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Text mt={10}>Ці додаткові питання та відповіді доповнюють нашу колекцію часто задаваних запитань про використання Figma, що може бути корисним для новачків та досвідчених користувачів.</Text>
    </>
  )
}

export default FaqPage
