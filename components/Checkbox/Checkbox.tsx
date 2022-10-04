/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
import { CheckboxProps } from './Checkbox.props';
import { useState, useEffect, forwardRef, ForwardedRef, KeyboardEvent } from 'react';
import styles from './Checkbox.module.css';
import cn from 'classnames';
import CheckboxIsDone from './checkboxIsDone.svg';
import CheckboxIsNotDone from './checkboxIsNotDone.svg';

export const Checkbox = forwardRef(({ isDone=false, isEditable=false, setDone, className, ...props }: CheckboxProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [checkBox, setCheckBox] = useState<JSX.Element>(<></>);
	
	useEffect(() => {
		constructCheckBox(isDone);
	}, [isDone]);
	
	const constructCheckBox = (currentIsDone: boolean) => {
		const updatedCheckBox = (): JSX.Element => {
			
			if (currentIsDone) {
				return (				
				<span
					className={cn(className, styles.svg, {
					[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(!isDone)}
					onMouseLeave={() => changeDisplay(isDone)}
					onClick={() => onClick(!isDone)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => isEditable && handleSpace(!isDone, e)}
					>
					<CheckboxIsDone />						
				</span>				
				);
			}
			else {
				return (
				<span
					className={cn(className, styles.svg, {
					[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(!isDone)}
					onMouseLeave={() => changeDisplay(isDone)}
					onClick={() => onClick(!isDone)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => isEditable && handleSpace(!isDone, e)}
					>
					<CheckboxIsNotDone />					
				</span>						
				);
			}			
		};
		setCheckBox(updatedCheckBox);
	};
					
	const changeDisplay = (d: boolean) => {
		if(!isEditable) {
			return;
		}		
		constructCheckBox(d);
	};

	const onClick = (d: boolean) => {
		if(!isEditable || !setDone) {
			return;
		}
		setDone(d);
	};

	const handleSpace = (d: boolean, e: KeyboardEvent<HTMLDivElement>) => {
		if (e.code != 'Space' || !setDone) {
			return;
		}
		setDone(d);
	};

	return (
		<div {...props} ref={ref} className={className}>
			{checkBox}		
		</div>	
	);			
});