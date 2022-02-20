import { Connection, Repository } from 'typeorm';

import { WordsLitstModel } from '../Entity/WordsLitstModel';

interface ICreateWordsList {
  id?: number;
  word: string;
}

export class WordsRepo {
  private ormRepository: Repository<WordsLitstModel>;

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(WordsLitstModel);
  }

  public async getAll(): Promise<WordsLitstModel[]> {
    const words = await this.ormRepository.find();

    return words;
  }

  public async create({ id, word }: ICreateWordsList): Promise<WordsLitstModel> {
    const wordCreated =  await this.ormRepository.create({ id ,
      word
    });

    await this.ormRepository.save(wordCreated)
    .then( () => {
      console.log("o itme foi salvo")
      return wordCreated
    })
    .catch( () => console.log("erro ao salvar"))

    
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}