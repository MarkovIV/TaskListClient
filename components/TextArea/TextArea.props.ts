import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { TaskItem } from '../../interfaces/task.interface';

export interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	error?: FieldError;
	taskitem?: TaskItem;	
}