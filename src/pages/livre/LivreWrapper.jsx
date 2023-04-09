import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
export const GlobalContext = createContext();

export default function Wrapper({children}){
    const [livre, setUsers] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast=useToast();
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})
    const FechUsers= () =>{
        
        axios.get('/api/livre')
        .then(
            (res)=>{
                setUsers(res.data);
            }
        ).catch((err) =>{
            console.log(err.response.data);
        });
    };
    const Delete = (id) =>{
        axios
        .delete(`/api/livre/${id}`)
        .then(res=>{
            setUsers(livre.filter((u) => u._id !== id));
            toast({
                title: 'User Deleted',
                status: 'success',
                duration: 4000,
                isClosable:true,
            });
        }).catch((err)=>{
            console.log(err.response.data);
        })
    }
    const Add = (form, setForm) =>{
        axios.post('api/livre', form)
        .then(res=>{
            setUsers([...livre, res.data]);
            toast({
                title: 'User Added',
                status: 'success',
                duration: 4000,
                isClosable:true,
            });
            setErrors({})
            setForm({})
            onClose()
        })
        .catch((err)=>{
           setErrors(err.response.data.error);
        });
    };

    const FindOne = async (id) => {
        await axios
        .get(`/api/livre/${id}`)
        .then((res)=>{
            setUser(res.data);
        })
        .catch((err)=>{
            setErrors(err.response.data.error)
        });
    };
    const Update= (form, setForm, id)=>{
        axios.put(`/api/livre/${id}`, form)
        .then(res=>{
            toast({
                title: 'User Updated',
                status: 'success',
                duration: 4000,
                isClosable:true,
            });
            setErrors({});
            setForm({});
            onClose();
            FechUsers();
        })
        .catch((err)=>{
           setErrors(err.response.data.error);
        });
    };

    return <GlobalContext.Provider value={{FechUsers,livre, Delete, Add, onOpen, FindOne, isOpen, onClose, errors, setErrors, user, setUser, Update}}>{children}</GlobalContext.Provider>
}