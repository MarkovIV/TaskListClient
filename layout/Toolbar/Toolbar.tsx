import { ToolbarProps } from './Toolbar.props';
import styles from './Toolbar.module.css';
import cn from 'classnames';

export const Toolbar = ({ className, ...props }: ToolbarProps): JSX.Element => {
	return (
		<footer {...props} className={cn(styles.toolbar, className)}>
			<div>
				Пок-ть вып.
			</div>
			<div>
				Сортировать по возр./уб.
			</div>
			<div>
				Приоритет
			</div>
		</footer>
	);	
};