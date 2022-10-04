import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PriorityProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditable?: boolean;
	priority: number;	
	setPriority?: (priority: number) => void;
}