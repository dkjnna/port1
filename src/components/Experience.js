import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import ExperienceArray from "./ExperienceArray";

export default function Experience({ color }) {
  const experience = ExperienceArray();

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          {/* Menampilkan semua data experience tanpa filter */}
          <Stack px={4} spacing={4}>
            {experience.map((exp) => (
              <Fade bottom key={exp.company}>
                <Card size="sm">
                  <CardHeader>
                    <Flex justifyContent="space-between">
                      <HStack>
                        <Image src={exp.image} h={50} />
                        <Box px={2} align="left">
                          <Text fontWeight={600}>{exp.company}</Text>
                          <Text>{exp.position}</Text>
                        </Box>
                      </HStack>
                      <Text px={2} fontWeight={300}>
                        {exp.duration}
                      </Text>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Flex>
                      <List align="left" spacing={3}>
                        {exp.listItems.map((item, index) => (
                          <ListItem key={index}>
                            <ListIcon
                              boxSize={6}
                              as={ChevronRightIcon}
                              color={`${color}.500`}
                            />
                            {item}
                          </ListItem>
                        ))}
                      </List>
                    </Flex>
                  </CardBody>
                  <CardFooter>
                    <HStack spacing={2}>
                      {exp.badges.map((badge) => (
                        <Badge
                          key={badge.name}
                          colorScheme={badge.colorScheme}
                        >
                          {badge.name}
                        </Badge>
                      ))}
                    </HStack>
                  </CardFooter>
                </Card>
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
