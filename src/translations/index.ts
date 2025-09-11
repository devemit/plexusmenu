import { en } from './en';
import { mk } from './mk';
import { sr } from './sr';

export const translations = {
   en,
   mk,
   sr,
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof en;
