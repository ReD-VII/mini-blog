import React, { useState, useEffect } from 'react'
import { db, auth } from '../../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth'



export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // Limpando o cache de funçoes na memoria
    // deal with memory leak
    /*https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/learn/lecture/31590878#questions*/
    //(3:03)
    const [cancelled, setCancelled] = useState(false)




    // Cleaup
    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }



    // Função de Criação de usuarios
    const createUser = async (data) => {
        // Enviando dados para o servidor. o uso de async e exigida na cominicação
        // para que seja executada a funçãp independente do fluxo do programa


        //https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/learn/lecture/31590886#questions
        checkIfIsCancelled() //Verifica se ta cancelado (0:39)
        //Se nao estiver cancelado ele da um loading
        setLoading(true)
        setError(null)

        // INICIANDO O SISTEMA DE CRIAÇÂO DE USUARIO
            // 1º - Verifica o cancelled
            // 2º - Ativa o estado de loading
            // 3º - Rezeta a variavel que armazena a msg de erro




        // Validaçoes do backend (1:02)
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )


            // Atualizando dados do usuario no firestore   
            await updateProfile(user, {
                displayName: data.displayName
            })



            console.log("USUARIO CADASTRADO!")



            setLoading(false)


            return user



        } catch (error) {
            // console.log(error.message)
            // console.log(typeof error.message)
            // console.log(auth)
            // // console.log(`MSG: ${data.email}`)
            // // console.log(`MSG: ${data.password}`)

            // Tratando erros
            let systemMessage
            // Variavel que recebe a msg de acordo com o erro mapeado

            if (error.message.includes("Password")) { //Verifica se na mensagem contem os caracteres informados
                systemMessage = "A senha precisa conter pelo menos 6 caracteres"
            } else if (error.message.includes("email-already")) {
                systemMessage = "E-mail ja cadastrado"
            } else {
                systemMessage = "Ocorreu um erro, por favor tente mais tarde."
            }
            setError(systemMessage)
            setLoading(false)
        }





    }



    //Login sign in
    const login = async (data) => { // data armazena os dados que estao vindo do formulario

        checkIfIsCancelled()

        setLoading(true)

        setError(false)

        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)

        } catch (error) {

            // Tratando erros
            let systemMessage
            // Variavel que recebe a msg de acordo com o erro mapeado

            if (error.message.includes("user-not-found")) { //Verifica se na mensagem contem os caracteres informados
                systemMessage = "Usuário não encontrado."
            } else if (error.message.includes("wrong-password")) {
                systemMessage = "Senha incorreta."
            } else {
                systemMessage = "Ocorreu um erro, por favor tente mais tarde."
            }
            setError(systemMessage)
            setLoading(false)

        }
    }



    // Logout - sign out
    const logaut = () => {

        checkIfIsCancelled() // (1:47)

        signOut(auth)
    }














    //https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/learn/lecture/31590886#questions
    //(3:38)
    useEffect(() => {
        return () => setCancelled(true)
    }, [])







    return {
        auth,
        createUser,
        error,
        loading,
        logaut,
        login,
    }



}