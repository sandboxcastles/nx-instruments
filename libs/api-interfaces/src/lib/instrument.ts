import { BaseEntity } from "./base-entity";

export interface Instrument extends BaseEntity {
  title: string;
  type: InstrumentType;
}

export enum InstrumentType {
  Brass = 'brass',
  Percussion = 'percussion',
  String = 'string',
  Woodwind = 'woodwind',
  Other = 'other'
}
