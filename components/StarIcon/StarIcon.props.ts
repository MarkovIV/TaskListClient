import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface StarIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	id?: string;
	isEditable?: boolean;
	
}