import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Container,FormControl, Input, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { GlobalContext } from "./LivreWrapper";
import Row from './Row';
import DrawerLivre from './DrawerLivre';

const Livre = () => {
    const {FechUsers,livre,onOpen}= useContext(GlobalContext);
    const [query, setQuery]= useState('');
    useEffect(() =>{
      FechUsers();
  },[]);

  const onChangeHandler = (e) =>{
    setQuery(e.target.value);
  }
  return (
      <Container maxW={'full'} p="4" fontSize={'18px'}>
            <Box rounded="lg" boxShadow="base" p="4">
                <Box mt="2" gap={'2'} mb="4" display={'flex'}>
                    <FormControl>
                        <Input type='text' onChange={onChangeHandler} />
                    </FormControl>
                    <Button leftIcon={<AiOutlineSearch />} colorScheme='teal' variant='outline'
                    maxW="300px" minW="150px">
                    Search
                    </Button> 
                </Box>
            </Box>
            <Box mt="5" rounded={'lg'} boxShadow="base">
                <Box p="4" display={'flex'} justifyContent="space-between">
                <Text fontSize="xl" fontWeight="bold">
                List Users
                </Text>
                    <Button leftIcon={<AiOutlinePlus fontSize={'20px'}/>} colorScheme="teal" variant="outline" maxW="300px"
                    minW="150px" onClick={onOpen}>Add User
                    </Button>
                </Box>
                        <TableContainer>
                          <Table variant='simple'>
                            <Thead>
                              <Tr>
                                <Th>Avatar</Th>
                                <Th>Titre</Th>
                                <Th>Auteur</Th>
                                <Th>Editeur</Th>
                                <Th>Date 'aparution</Th>
                                <Th>Actions</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {
                                livre.map(({_id, titreLivre, auteurLivre, editeurLivre, dateAparution})=>{
                                  return(<Row 
                                    id={_id}
                                    titreLivre={titreLivre}
                                    auteurLivre={auteurLivre}
                                    editeurLivre={editeurLivre}
                                    dateAparution={dateAparution}
                                    />);
                                })
                              }
                              
                            </Tbody>
                          </Table>
                        </TableContainer>
                        <DrawerLivre />
                </Box>
        </Container>
  )
}

export default Livre