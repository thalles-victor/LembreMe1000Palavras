import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('words_litst_model')
export class WordsLitstModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  word: string;
}
