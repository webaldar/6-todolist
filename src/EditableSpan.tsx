import {ChangeEvent, useState} from "react";

type EditableSpanProps = {
    oldTitle: string
    onClick: (updateTitle: string) => void
};
export const EditableSpan = ({oldTitle, onClick}: EditableSpanProps) => {
    const [edit, setEdit] = useState(false)
    const [updateTitle, setUpdateTitle] = useState(oldTitle)

    const editHandler = () => {
        setEdit(!edit)
        if (edit) {
            onClick(updateTitle)
        }
    }
    const changeUpdateTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdateTitle(event.currentTarget.value)
    }

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