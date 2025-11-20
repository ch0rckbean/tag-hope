import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

// 아동 정보
const childrenList = [
  {
    id: 1,
    name: '짱구',
    imgSrc: '/img/ch1.jpeg',
    age: 5,
  },
  {
    id: 2,
    name: '밍구',
    imgSrc: '/img/ch2.jpeg',
    age: 3,
  },
  {
    id: 3,
    name: '맹구',
    imgSrc: '/img/ch3.png',
    age: 5,
  },
  {
    id: 2,
    name: '봉미선',
    imgSrc: '/img/ch4.jpeg',
    age: 6,
  },
];

export default function Donate() {
  const nav = useNavigate();
  return (
    <Container>
      <div className='title'>
        <h1>희망 나누기</h1>
      </div>
      <div className='children'>
        {childrenList.map((ch) => (
          <>
            <Card key={ch.id} maxW='sm'>
              <CardBody>
                <Image src={ch.imgSrc} alt={ch.name} borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{ch.name}</Heading>

                  <Text color='blue.600' fontSize='2xl'>
                    아기 설명
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  variant='solid'
                  colorScheme='blue'
                  onClick={() => nav('/complete')}
                >
                  후원하기
                </Button>
              </CardFooter>
            </Card>{' '}
          </>
        ))}
      </div>
    </Container>
  );
}
