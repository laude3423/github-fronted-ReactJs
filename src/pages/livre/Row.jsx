import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from './LivreWrapper';

const Row= ({id, titreLivre, auteurLivre, editeurLivre, dateAparution}) =>{
    const {Delete, onOpen, FindOne}= useContext(GlobalContext);
    return(
        <Tr>
            <Td><Avatar name={titreLivre} /></Td>
            <Td>{titreLivre}</Td>
            <Td>{auteurLivre}</Td>
            <Td>{editeurLivre}</Td>
            <Td>{dateAparution}</Td>
            <Td>
                <Box display={'flex'} gap="1">
                    <Button colorScheme={"blue"} onClick={()=> {onOpen(); FindOne(id);}}>
                        <AiFillEdit />
                    </Button>
                    <Button colorScheme={"red"} onClick={() => Delete(id)}>
                        <AiFillDelete />
                    </Button>               
                </Box>
            </Td>
        </Tr>
    )
};
export default Row;