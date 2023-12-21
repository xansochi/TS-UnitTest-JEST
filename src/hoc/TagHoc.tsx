/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import React , { useEffect, useRef, useState } from 'react';

export function WithApp(Component:React.FunctionComponent<any>) {
  return function (props:object) {
    const actionRef = useRef<HTMLSelectElement | null>(null);
    const firstinputRef = useRef<HTMLInputElement | null>(null);
    const secondinputRef = useRef<HTMLInputElement | null>(null);

    const [calcTag, setCalcTag] = useState(false);
    const [qtag, setQtag] = useState(false);

    useEffect(() => console.log('re-render'));
    return (
        <Component
        {...props}
        calcTag = {calcTag}
        qtag = {qtag}
        setCalcTag = {setCalcTag}
        setQtag = {setQtag}
        actionRef = { actionRef }
        firstinputRef = { firstinputRef }
        secondinputRef = { secondinputRef }
        />
    );
  };
}

