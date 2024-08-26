import {ChangeEvent, KeyboardEvent, useState} from "react";

type EditableSpanProps = {
    oldTitle: string
};
export const EditableSpan = ({oldTitle}: EditableSpanProps) => {
    const [edit, setEdit] = useState(false)
    const [updateTitle, setUpdateTitle] = useState(oldTitle)
    console.log(updateTitle)
    const editHandler = () => {
        setEdit(!edit)
    }
    const changeUpdateTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdateTitle(event.currentTarget.value)
    }
    // const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null)
    //     if (event.key === 'Enter') {
    //         addItemHandler()
    //     }
    // }

    return (
        edit
            ? <input onChange={changeUpdateTitleHandler}
                     // onKeyUp={addTaskOnKeyUpHandler}
                     autoFocus
                     onBlur={editHandler}
                     value={updateTitle}/>
            : <span onDoubleClick={editHandler}>{oldTitle}</span>


    );
};