import React, { 
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { ActivityIndicator } from "react-native";
import { Connection, createConnection } from "typeorm";
import { WordsLitstModel } from "../Entity/WordsLitstModel";
import { WordsRepo } from "../Repositorys/WordsRepo";
import { CreateTodosTable1645307432579 } from "./migrations/1645307432579-CreateTodosTable";

interface DatabaseConnectionContextData {
  wordsRpository: WordsRepo;
}

const DatabaseConnectionContext = createContext<DatabaseConnectionContextData>(
  {} as DatabaseConnectionContextData,
)

export const DatabaseConnectionProvider: React.FC = ({ children })=> {
  const [connection, setConnection] = useState<Connection | null>(null)

  const connect = useCallback( async () => {
    const createdConnection = await createConnection({
      type: 'expo',
      database: 'WordsDataBase.db',
      driver: require('expo-sqlite'),
      entities: [WordsLitstModel],

      migrations: [CreateTodosTable1645307432579],
      migrationsRun: true,
      
      synchronize: false
    });
    setConnection(createdConnection);
  }, []);

  useEffect( () => {
    if(!connection) {
      connect();
    }
  }, [connect, connection]);

  if(!connection) {
    return <ActivityIndicator />
  }
  return(
    <DatabaseConnectionContext.Provider
      value={{
        wordsRpository: new WordsRepo(connection),
      }}
    >
      { children }
    </DatabaseConnectionContext.Provider>
  )
}

export function useDataBaseConnection() {
  const context = useContext(DatabaseConnectionContext);

  return context;
}