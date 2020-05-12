import { createContext, useContext } from "react"

export const ShowAllContext = createContext()

export const useShowAll = () => useContext(ShowAllContext)
