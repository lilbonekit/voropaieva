import {
  Heading,
  Flex,
  Image,
  Text,
  Fade,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"
import { useState, useEffect } from "react";
import figmaLogo from '/figma.svg'
import CustomLink from "../../assets/components/CustomLink";

const HomePage = () => {
  const [startAnimation, setStartAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartAnimation(prevState => !prevState);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return(
   <>
    <Heading fontSize={['4xl',null,'6xl']}>Проектування та розробка web-сайту «Практика використання online інструменту Figma  для розробки макетів»</Heading>
    <Flex className="hero-box" mt={10} justifyContent={'flex-end'} alignItems={'center'}>
      <Box w={['100%',null,'50%']} align={'right'}>
        <Text fontSize={'xs'}>Figma - це потужний інструмент, який змінює підхід до проектування веб-інтерфейсів. Він не лише спрощує процес розробки макетів, але й надає можливість співпрацювати в реальному часі, обмінюватися думками та отримувати зворотній зв&apos;язок від команди. На нашому сайті ми детально розглянемо всі переваги використання Figma та надамо корисні поради для ефективного використання цього інструменту.</Text>
        <Heading mt={4} fontSize={'small'}>Виконала: Воропаєва Олександра Ігорівна ВПВПС-21-3</Heading>
      </Box>
      <Fade in={startAnimation}>
        <Image
            boxSize='300px'
            objectFit='cover'
            src={figmaLogo}
          />
      </Fade>
    </Flex>
    <Heading mt={10} fontSize={'3xl'}>Зміст сайту</Heading>
    <Box mt={10}>
      <Accordion allowToggle pb={10}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Основні функції Figma
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
           <Flex flexDirection={'column'} gap={3}>
              <Text>
                Подробиці щодо того, як Figma працює для розробки макетів.
                Демонстрація різних функцій та інструментів, які пропонує Figma.
              </Text>
              <CustomLink to={'/about'}>Детальніше</CustomLink>
           </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Практичні поради та приклади використання
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Покрокові інструкції з використання Figma для розробки макетів.
            </Text>
            <CustomLink to={'/suggestion'}>Детальніше</CustomLink>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Огляд плагінів та інтеграцій
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Перегляд корисних плагінів для розширення можливостей Figma.
              Інформація про інтеграцію Figma з іншими інструментами та сервісами.
            </Text>
            <CustomLink to={'/plugins'}>Детальніше</CustomLink>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Порівняння з іншими інструментами
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Порівняння Figma з аналогічними інструментами для розробки макетів.
              Переваги та недоліки в порівнянні з альтернативами.
            </Text>
            <CustomLink to={'/compare'}>Детальніше</CustomLink>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Часті запитання (FAQ)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Відповіді на найбільш поширені запитання щодо використання Figma.
            </Text>
            <CustomLink to={'/faq'}>Детальніше</CustomLink>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
   </>
  )
}

export default HomePage