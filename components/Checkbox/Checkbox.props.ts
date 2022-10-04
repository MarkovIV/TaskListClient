import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CheckboxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	isDone?: boolean;
	isEditable?: boolean;
	setDone?: (done: boolean) => void;	
}