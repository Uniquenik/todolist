import '../../scss/todoCard-styles.scss'

export const TodoCard = (props: {
    isComplete: boolean,
    index: number,
    title: string,
    datetime: number,
    onCheck: () => void,
    onDelete: () => void
}) => {
    return(
        <div className={'todo-card'}>
            <div className={'todo-card__left'}>
                <input
                    checked={props.isComplete}
                    onChange={() => props.onCheck()}
                    className={'todo-card__checkbox'}
                    type="checkbox"
                    id={'checkbox'+props.index.toString()}
                />
                <label className={'todo-card__checkbox-label'}
                       htmlFor={'checkbox'+props.index.toString()}
                ></label>
                <div
                    className={props.isComplete ? 'todo-card__title todo-card__title-complete' : 'todo-card__title'}>
                {props.title}
                </div>
            </div>
            <div className={'todo-card__right'}>
                <div className={'todo-card__datetime'}>
                    <div>
                        {new Date(props.datetime).toLocaleDateString()}
                    </div>
                    <div>
                        {new Date(props.datetime).toLocaleTimeString()}
                    </div>
                </div>
                <button className={'todo-card__button'}
                        onClick={() => props.onDelete()}
                >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor"></path></svg>
                </button>
            </div>
        </div>
    )
}
