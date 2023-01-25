import { FC, useReducer } from 'react';
import {v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './'

export interface EntriesState {
   entries: Entry[],
}

export interface Props {
   children: React.ReactNode
}

const Entries_INITIAL_STATE: EntriesState = {
   entries: [
      {
         _id: uuidv4(),
         description: 'pending -- asdjasbjbsa asn bdnasbdb asjdb jas bdj',
         status: 'pending',
         createdAt: Date.now(),
      },
      {
         _id: uuidv4(),
         description: 'pending22 -- asdjasbjbsa asn bdnasbdb asjdb jas bdj',
         status: 'pending',
         createdAt: Date.now(),
      },
      {
         _id: uuidv4(),
         description: 'in-progress -- asdjasbjbsa asn bdnasbdb asjdb jas bdj',
         status: 'in-progress',
         createdAt: Date.now() - 100000,
      },
      {
         _id: uuidv4(),
         description: 'finished -- asdjasbjbsa asn bdnasbdb asjdb jas bdj',
         status: 'finished',
         createdAt: Date.now() - 1000000,
      },
   ],
}


export const EntriesProvider = ( {children}:Props ) => {

   const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE)

   const addNewEntry = ( description: string) =>{
      const newEntry: Entry = {
         _id: uuidv4(),
         description,
         createdAt: Date.now(),
         status: 'pending'
      }

      dispatch({ type: '[Entry] Add-Entry', payload: newEntry})
   }


   return (
      <EntriesContext.Provider value={{ 
          ...state,

          addNewEntry
      }}>
          { children }
      </EntriesContext.Provider>
   )
};