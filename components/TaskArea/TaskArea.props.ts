import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TaskItem } from '../../interfaces/task.interface';

export interface TaskAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	taskitem?: TaskItem;
}