/* eslint-disable react/display-name */
import { TaskAreaProps } from './TaskArea.props';
import styles from './TaskArea.module.css';
import cn from 'classnames';
import { TextArea } from '../TextArea/TextArea';
import { Priority } from '../Priority/Priority';
import { useState } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { ForwardedRef, forwardRef } from 'react';

export const TaskArea = forwardRef(({ className, taskitem, ...props }: TaskAreaProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [priority, setPriority] = useState<number>(taskitem?Number(taskitem.priority):2);
	const [isDone, setDone] = useState<boolean>(taskitem?taskitem.done:false);
	
	return (
		<div className={cn(className, styles.wrapper)}	ref={ref} {...props} >
			<Priority priority={priority} isEditable setPriority={setPriority} className={styles.priority}/>	
			<Checkbox isDone={isDone} isEditable setDone={setDone} className={styles.checkbox}/>
			<TextArea placeholder='Задача' taskitem={taskitem} className={styles.task}/>					
		</div>					
	);	
});