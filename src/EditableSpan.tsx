import {useState} from "react";

type EditableSpanProps = {
    title: string
};
export const EditableSpan = ({title}: EditableSpanProps) => {
    const [edit, setEdit] = useState(false)
    const editHandler = () => {
        setEdit(!edit)
    }

    return (
        edit
            ? <input autoFocus onBlur={editHandler} value={title}/>
            : <span onDoubleClick={editHandler}>{title}</span>


    );
};