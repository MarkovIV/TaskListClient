/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
import { PriorityProps } from './Priority.props';
import { StarIcon } from '../StarIcon/StarIcon';
import { useState, useEffect, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import styles from './Priority.module.css';
import cn from 'classnames';

export const Priority = forwardRef(({ isEditable = false, priority, setPriority, className, ...props }: PriorityProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [priorityArray, setPriorityArray]	= useState<JSX.Element[]>(new Array(3).fill(<></>));
	
	useEffect(() => {
		constructPriority(priority);
	}, [priority]);

	const constructPriority = (currentPriority: number) => {
		const updatedArray = priorityArray.map((r: JSX.Element, i: number) => {
			
			if (i < currentPriority) {
				return (<span
							className = {cn({
								[styles.editable]: isEditable
							})}
							onMouseEnter={() => changeDisplay(i + 1)}
							onMouseLeave={() => changeDisplay(priority)}
							onClick={() => onClick(i + 1)}
							tabIndex={isEditable ? 0 : -1}
							onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => isEditable && handleSpace(i + 1, e)}
						>
						<StarIcon
							id="filled"
							isEditable = {isEditable}			
							
						/></span>);
			}
			else {
				return (<span
							className = {cn({
								[styles.editable]: isEditable
							})}
							onMouseEnter={() => changeDisplay(i + 1)}
							onMouseLeave={() => changeDisplay(priority)}
							onClick={() => onClick(i + 1)}
							tabIndex={isEditable ? 0 : -1}
							onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => isEditable && handleSpace(i + 1, e)}
						>
						<StarIcon
							isEditable = {isEditable}							
						/></span>);
			}
			
			
		});
		setPriorityArray(updatedArray);
	};
				
	const changeDisplay = (i: number) => {
		if(!isEditable) {
			return;
		}		
		constructPriority(i);
	};

	const onClick = (i: number) => {
		if(!isEditable || !setPriority) {
			return;
		}
		setPriority(i);

	};

	const handleSpace = (i: number, e: KeyboardEvent<HTMLDivElement>) => {
		if (e.code != 'Space' || !setPriority) {
			return;
		}
		setPriority(i);
	};

	return (
		<div {...props} ref={ref} className={cn(styles.priorityWrapper, className)}>
			{priorityArray[0]}
			{priorityArray[1]}
			{priorityArray[2]}
		</div>	
	);	
});