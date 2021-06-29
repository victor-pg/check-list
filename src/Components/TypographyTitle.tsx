import React from 'react';
import './TypographyTitle.css';

interface  Props {
    level:number,
    children:string
}

const TypographyTitle:React.FC<Props>=({level,children})=>{
        return(
            <>
                <div className={`h${level}`}>{children}</div>
            </>
        );
}

export default TypographyTitle;
