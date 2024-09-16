import { validate as uuidValidate } from 'uuid';

export const isValidUUID = (id: string): boolean => {
  return uuidValidate(id);
};
