/* eslint-disable react/display-name */
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useState } from 'react';

export const TextArea = forwardRef(({ className, error, taskitem, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	const [value, setValue] = useState(taskitem?taskitem.task:'');

	const handleClick = (e: { detail: number; }) => {
		if (taskitem) {
			switch (e.detail) {	
			case 2:
				location.href='/task/' + taskitem.id;			
				break;
			default:
				return;
			}
		}
		return;
	};
	
	return (		
		<div className={cn(className, styles.textareaWrapper)} onClick={handleClick} >
			<textarea className={cn(styles.textarea, {
				[styles.error]: error
			})}
			value={value} onChange={event => setValue(event.target.value)}
			ref={ref} {...props}/>			
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>				
	);	
});
