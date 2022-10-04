import { createContext, useState, PropsWithChildren } from 'react';
import { TaskItem } from '../interfaces/task.interface';

export interface IAppContext {
	tasks: TaskItem[];
	setTaskList?: (newTaskList: TaskItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ tasks: [] });

export const AppContextProvider = ({ tasks, children}: PropsWithChildren<IAppContext> ): JSX.Element => {
	const [taskListState, setTaskListState] = useState<TaskItem[]>(tasks);
	const setTaskList = (newTaskList: TaskItem[]) => {
		setTaskListState(newTaskList);
	};
	
	return <AppContext.Provider value={{ tasks: taskListState, setTaskList }}>
		{children}
	</AppContext.Provider>;
};