import { useContext, createContext } from 'react'



//https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/learn/lecture/31590892#questions

const AuthContext = createContext()

export function AuthProvider({children, value}) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuthValue() {
    return useContext(AuthContext)
}